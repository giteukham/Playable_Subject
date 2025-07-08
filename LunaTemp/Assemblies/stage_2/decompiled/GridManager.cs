using System;
using System.Collections.Generic;
using System.Linq;
using DG.Tweening;
using UnityEngine;

public class GridManager : MonoBehaviour
{
	[Header("격자 생성 설정")]
	private const int TotalRows = 9;

	[Tooltip("격자 전체 Y 위치 추가 조절")]
	[SerializeField]
	private float verticalOffset = 0f;

	[Tooltip("시드 값")]
	[SerializeField]
	private int seed = 3;

	private float totalGridHeight;

	[Header("프리팹 설정")]
	[Tooltip("슬롯 프리팹 부모")]
	[SerializeField]
	private Transform prefabsParent;

	[Tooltip("줄 부모 GameObject 프리팹 (선택사항, 빈 GameObject여도 됨)")]
	[SerializeField]
	private GameObject rowParentPrefab;

	[Tooltip("슬롯 프리팹")]
	[SerializeField]
	private GameObject slotPrefab;

	[Tooltip("물건 프리팹")]
	[SerializeField]
	private GameObject stuffPrefab;

	[Tooltip("슬롯 프리팹 크기")]
	[SerializeField]
	private float slotScale = 0.25f;

	[Tooltip("물건 프리팹 크기")]
	[SerializeField]
	private float stuffScale = 1f;

	[Header("슬롯 프리팹 설정")]
	[Tooltip("세로 간격")]
	[SerializeField]
	private float slotWidth = 0.6f;

	[Tooltip("가로 간격")]
	[SerializeField]
	private float slotHeight = 1f;

	[SerializeField]
	private RowData[] levelData = new RowData[9];

	private List<GameObject> rowParents;

	private List<Slot[]> gridSlotsByRow;

	[Header("줄 클리어 설정")]
	[SerializeField]
	private float rowMoveDownDuration = 0.3f;

	private bool[] isRowCleared;

	public static GridManager Instance { get; private set; }

	private void OnValidate()
	{
		if (levelData.Length != 9)
		{
			Array.Resize(ref levelData, 9);
		}
	}

	private void Awake()
	{
		if (Instance != null && Instance != this)
		{
			UnityEngine.Object.Destroy(base.gameObject);
		}
		else
		{
			Instance = this;
		}
	}

	private void Start()
	{
		CreateGrid();
	}

	private void CreateGrid()
	{
		rowParents = new List<GameObject>();
		gridSlotsByRow = new List<Slot[]>();
		isRowCleared = new bool[9];
		for (int j = 0; j < 9; j++)
		{
			isRowCleared[j] = false;
		}
		List<Stuff> wrongStuffs = new List<Stuff>();
		List<Stuff> plcaedWrongStuffs = new List<Stuff>();
		for (int row2 = 0; row2 < 9; row2++)
		{
			RowData currentRowData = levelData[row2];
			for (int i = 0; i < currentRowData.wrongStuffCount; i++)
			{
				GameObject newStuff = UnityEngine.Object.Instantiate(stuffPrefab);
				Stuff stuffComponent = newStuff.GetComponent<Stuff>();
				stuffComponent.Initialize(row2, currentRowData.material);
				wrongStuffs.Add(stuffComponent);
			}
		}
		Shuffle(wrongStuffs, new System.Random(seed));
		totalGridHeight = 8f * slotHeight;
		float startY = totalGridHeight / 2f + verticalOffset;
		for (int row = 0; row < 9; row++)
		{
			GameObject rowParentGO = UnityEngine.Object.Instantiate(rowParentPrefab, prefabsParent);
			rowParentGO.name = $"RowParent_{row}";
			rowParentGO.transform.localPosition = new Vector3(0f, startY - (float)row * slotHeight, 0f);
			rowParents.Add(rowParentGO);
			RowData currentRowData2 = levelData[row];
			int slotsInRow = row + 1;
			float centeredStartX = 0f - (float)row * slotWidth / 2f;
			Slot[] currentRowSlots = new Slot[slotsInRow];
			HashSet<int> wrongSlotIndexes = GetWrongIndexes(slotsInRow, currentRowData2.wrongStuffCount);
			for (int col = 0; col < slotsInRow; col++)
			{
				Vector3 position = new Vector3(centeredStartX + (float)col * slotWidth, 0f, 0f);
				GameObject newSlot = UnityEngine.Object.Instantiate(slotPrefab, rowParentGO.transform);
				Slot slotComponent = newSlot.GetComponent<Slot>();
				newSlot.transform.localPosition = position;
				newSlot.transform.localScale = Vector3.one * slotScale;
				slotComponent.Initialize(row, currentRowData2.material);
				currentRowSlots[col] = slotComponent;
				newSlot.isStatic = true;
				if (row == 0)
				{
					continue;
				}
				if (wrongSlotIndexes.Contains(col))
				{
					for (int k = 0; k < wrongStuffs.Count; k++)
					{
						if (wrongStuffs[k].rowIndex != row)
						{
							wrongStuffs[k].gameObject.transform.SetParent(newSlot.transform);
							wrongStuffs[k].gameObject.transform.localPosition = new Vector3(-1f, -1f, -4.5f);
							wrongStuffs[k].gameObject.transform.localScale = Vector3.one * stuffScale;
							slotComponent.PlaceStuff(wrongStuffs[k]);
							plcaedWrongStuffs.Add(wrongStuffs[k]);
							wrongStuffs.RemoveAt(k);
							break;
						}
						if (wrongStuffs.Count != 1 || wrongStuffs[k].rowIndex != row)
						{
							continue;
						}
						foreach (Stuff stuff in plcaedWrongStuffs)
						{
							if (stuff.rowIndex != row)
							{
								Slot wrongSlot = stuff.transform.parent.gameObject.GetComponent<Slot>();
								wrongStuffs[k].gameObject.transform.SetParent(stuff.transform.parent);
								wrongStuffs[k].gameObject.transform.localPosition = new Vector3(-1f, -1f, -4.5f);
								wrongStuffs[k].gameObject.transform.localScale = Vector3.one;
								wrongSlot.PlaceStuff(wrongStuffs[k]);
								stuff.gameObject.transform.SetParent(newSlot.transform);
								stuff.gameObject.transform.localPosition = new Vector3(-1f, -1f, -4.5f);
								stuff.gameObject.transform.localScale = Vector3.one * stuffScale;
								slotComponent.PlaceStuff(stuff);
								break;
							}
						}
					}
				}
				else
				{
					GameObject newStuff2 = UnityEngine.Object.Instantiate(stuffPrefab, newSlot.transform);
					Stuff stuffComponent2 = newStuff2.GetComponent<Stuff>();
					newStuff2.transform.localPosition = new Vector3(-1f, -1f, -4.5f);
					stuffComponent2.Initialize(row, currentRowData2.material);
					slotComponent.PlaceStuff(stuffComponent2);
				}
			}
			gridSlotsByRow.Add(currentRowSlots);
		}
	}

	private HashSet<int> GetWrongIndexes(int totalSlots, int wrongCount)
	{
		if (wrongCount <= 0)
		{
			return new HashSet<int>();
		}
		System.Random seedRandom = new System.Random(seed);
		IEnumerable<int> wrongIndexesList = (from x in Enumerable.Range(0, totalSlots)
			orderby seedRandom.Next()
			select x).Take(wrongCount);
		return new HashSet<int>(wrongIndexesList);
	}

	private void Shuffle<T>(List<T> list, System.Random rng)
	{
		int j = list.Count;
		while (j > 1)
		{
			j--;
			int i = rng.Next(j + 1);
			T value = list[i];
			list[i] = list[j];
			list[j] = value;
		}
	}

	public void CheckRowClearance(int rowToCheck)
	{
		if (rowToCheck == 0 || isRowCleared[rowToCheck])
		{
			return;
		}
		Slot[] currentRowSlots = gridSlotsByRow[rowToCheck];
		if (currentRowSlots == null || currentRowSlots.Length == 0)
		{
			return;
		}
		bool allSlotsCorrect = true;
		foreach (Slot slot in currentRowSlots)
		{
			if (slot == null || slot.placedStuff == null || !slot.isCorrectlyFilled)
			{
				allSlotsCorrect = false;
				break;
			}
		}
		if (allSlotsCorrect)
		{
			isRowCleared[rowToCheck] = true;
			ClearAndHide(rowToCheck);
		}
	}

	private void ClearAndHide(int rowToHide)
	{
		GameObject rowParentGO = rowParents[rowToHide];
		if (rowParentGO == null)
		{
			return;
		}
		Slot[] currentRowSlots = gridSlotsByRow[rowToHide];
		if (currentRowSlots != null)
		{
			Slot[] array = currentRowSlots;
			foreach (Slot slot in array)
			{
				if (slot != null)
				{
					slot.ClearStuff();
				}
			}
		}
		UnityEngine.Object.Destroy(rowParentGO);
		rowParents[rowToHide] = null;
		gridSlotsByRow[rowToHide] = null;
		MoveRemainingRowsDown(rowToHide);
	}

	private void MoveRemainingRowsDown(int clearedRowIndex)
	{
		Sequence sequence = DOTween.Sequence();
		for (int row = 0; row < 9; row++)
		{
			if (isRowClearedByRowIndex(row))
			{
				continue;
			}
			GameObject rowParentGO = rowParents.ElementAtOrDefault(row);
			if (!(rowParentGO != null))
			{
				continue;
			}
			int clearedRowsBelowCurrent = 0;
			for (int i = row + 1; i < 9; i++)
			{
				if (isRowClearedByRowIndex(i))
				{
					clearedRowsBelowCurrent++;
				}
			}
			float startY = totalGridHeight / 2f + verticalOffset;
			float originalYForThisRow = startY - (float)row * slotHeight;
			float finalTargetY = originalYForThisRow - (float)clearedRowsBelowCurrent * slotHeight;
			Vector3 targetPosition = new Vector3(rowParentGO.transform.localPosition.x, finalTargetY, rowParentGO.transform.localPosition.z);
			sequence.Join(rowParentGO.transform.DOLocalMove(targetPosition, rowMoveDownDuration).SetEase(Ease.OutBounce));
		}
	}

	private bool isRowClearedByRowIndex(int index)
	{
		return index >= 0 && index < isRowCleared.Length && isRowCleared != null && isRowCleared.Length != 0 && isRowCleared.Length > index && isRowCleared.GetValue(index) as bool? == true;
	}
}

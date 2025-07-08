using System.Collections.Generic;
using System.Linq;
using UnityEngine;

[System.Serializable]
public class RowData
{
    public Material material;
    [Range(0, 9)]
    public int wrongStuffCount;
}

public class GridManager : MonoBehaviour
{
    [Header("격자 생성 설정")]
    private const int TotalRows = 9;
    [Tooltip("격자 전체 Y 위치 추가 조절")]
    [SerializeField] private float verticalOffset = 0f;
    [SerializeField] private int seed = 3; // 랜덤 시드 값

    [Header("프리팹 설정")]
    [Tooltip("슬롯 프리팹 부모")]
    [SerializeField] private Transform prefabsParent;
    [Tooltip("슬롯 프리팹")]
    [SerializeField] private GameObject slotPrefab;
    [Tooltip("물건 프리팹")]
    [SerializeField] private GameObject stuffPrefab;
    [Tooltip("슬롯 프리팹 크기")]
    [SerializeField] private float slotScale = 0.25f;
    [Tooltip("물건 프리팹 크기")]
    [SerializeField] private float stuffScale = 1f;

    [Header("슬롯 프리팹 설정")]
    [Tooltip("세로 간격")]
    [SerializeField] private float slotWidth = 0.6f;
    [Tooltip("가로 간격")]
    [SerializeField] private float slotHeight = 1.0f;

    [SerializeField] private RowData[] levelData = new RowData[TotalRows]; // 레벨의 크기는 9로 고정

    void OnValidate()
    {
        if (levelData.Length != TotalRows)
        {
            System.Array.Resize(ref levelData, TotalRows);
        }
    }

    void Start()
    {
        CreateGrid();
    }

    void CreateGrid()
    {
        List<Stuff> wrongStuffs = new List<Stuff>();
        List<Stuff> plcaedWrongStuffs = new List<Stuff>();
        
        // 각 행마다 잘못된 물건 개수만큼 stuff 프리팹 생성
        for (int row = 0; row < TotalRows; row++)
        {
            RowData currentRowData = levelData[row];
            for(int i = 0; i < currentRowData.wrongStuffCount; i++)
            {
                GameObject newStuff = Instantiate(stuffPrefab);
                Stuff stuffComponent = newStuff.GetComponent<Stuff>();
                stuffComponent.Initialize(row, currentRowData.material);
                wrongStuffs.Add(stuffComponent);
            }
        }
        Shuffle(wrongStuffs, new System.Random(seed)); // fisher-yates 셔플

        float totalGridHeight = (TotalRows - 1) * slotHeight;
        float startY = (totalGridHeight / 2.0f) + verticalOffset;

        for (int row = 0; row < TotalRows; row++)
        {
            RowData currentRowData = levelData[row];
            int slotsInRow = row + 1;
            float centeredStartX = -(row * slotWidth / 2.0f);

            HashSet<int> wrongSlotIndexes = GetWrongIndexes(slotsInRow, currentRowData.wrongStuffCount);

            for (int col = 0; col < slotsInRow; col++)
            {
                Vector3 position = new Vector3(centeredStartX + col * slotWidth, startY - (row * slotHeight), 0);
                
                GameObject newSlot = Instantiate(slotPrefab, prefabsParent);
                newSlot.transform.localPosition = position;
                newSlot.transform.localScale =  Vector3.one * slotScale;
                newSlot.GetComponent<Slot>().Initialize(row, currentRowData.material);

                if (row == 0) continue;

                if (wrongSlotIndexes.Contains(col))
                {
                    for (int i = 0; i < wrongStuffs.Count; i++)
                    {
                        if (wrongStuffs[i].rowIndex != row)
                        {
                            wrongStuffs[i].gameObject.transform.SetParent(newSlot.transform);
                            wrongStuffs[i].gameObject.transform.localPosition = new Vector3(-1f, -1f, -4.5f);
                            wrongStuffs[i].gameObject.transform.localScale = Vector3.one * stuffScale;
                            plcaedWrongStuffs.Add(wrongStuffs[i]);
                            wrongStuffs.RemoveAt(i);
                            break;
                        }
                        else if (wrongStuffs.Count == 1 && wrongStuffs[i].rowIndex == row)
                        {
                            foreach(Stuff stuff in plcaedWrongStuffs)
                            {
                                if (stuff.rowIndex != row)
                                {
                                    wrongStuffs[i].gameObject.transform.SetParent(stuff.transform.parent);
                                    wrongStuffs[i].gameObject.transform.localPosition = new Vector3(-1f, -1f, -4.5f);
                                    wrongStuffs[i].gameObject.transform.localScale = Vector3.one;
                                    stuff.gameObject.transform.SetParent(newSlot.transform);
                                    stuff.gameObject.transform.localPosition = new Vector3(-1f, -1f, -4.5f);
                                    stuff.gameObject.transform.localScale = Vector3.one * stuffScale;
                                    break;
                                }
                            }
                        }
                    }
                }
                else
                {
                    GameObject newStuff = Instantiate(stuffPrefab, newSlot.transform);
                    newStuff.transform.localPosition = new Vector3(-1f, -1f, -4.5f); // Stuff 위치 미세 조정
                    newStuff.GetComponent<Stuff>().Initialize(row, currentRowData.material);
                }
            }
        }
    }

    private HashSet<int> GetWrongIndexes(int totalSlots, int wrongCount)
    {
        if (wrongCount <= 0) return new HashSet<int>();
        System.Random seedRandom = new System.Random(seed);
        return Enumerable.Range(0, totalSlots)
                         .OrderBy(x => seedRandom.Next())
                         .Take(wrongCount)
                         .ToHashSet();
    }

    // fisher-yates 셔플
    private void Shuffle<T>(List<T> list, System.Random rng)
    {
        int n = list.Count;
        while (n > 1)
        {
            n--;
            int k = rng.Next(n + 1);
            T value = list[k];
            list[k] = list[n];
            list[n] = value;
        }
    }
}
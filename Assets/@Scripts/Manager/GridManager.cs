using System.Collections.Generic;
using System.Linq;
using UnityEngine;
using DG.Tweening;

[System.Serializable]
public class RowData
{
    public Material material;
    [Range(0, 9)]
    public int wrongStuffCount;
}

public class GridManager : MonoBehaviour
{
    public static GridManager Instance { get; private set; }

    [Header("격자 생성 설정")]
    private const int TotalRows = 9;
    [Tooltip("격자 전체 Y 위치 추가 조절")]
    [SerializeField] private float verticalOffset = 0f;
    [Tooltip("시드 값")]
    [SerializeField] private int seed = 3;
    private float totalGridHeight; // 전체 격자 높이

    [Header("프리팹 설정")]
    [Tooltip("슬롯 프리팹 부모")]
    [SerializeField] private Transform prefabsParent;
    [Tooltip("줄 부모 GameObject 프리팹 (선택사항, 빈 GameObject여도 됨)")]
    [SerializeField] private GameObject rowParentPrefab;
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

    private List<GameObject> rowParents; // 각 줄의 부모 GameObject를 저장할 리스트
    private List<Slot[]> gridSlotsByRow; // 각 줄에 속한 Slot 배열을 저장할 리스트

    [Header("줄 클리어 설정")]
    [SerializeField] private float rowMoveDownDuration = 0.3f; // 줄 내려오는 애니메이션 시간
    private bool[] isRowCleared; // 각 행이 클리어되었는지 여부를 저장

    void OnValidate()
    {
        if (levelData.Length != TotalRows)
        {
            System.Array.Resize(ref levelData, TotalRows);
        }
    }

    void Awake()
    {
        if (Instance != null && Instance != this)
            Destroy(gameObject);
        else
            Instance = this;
    }

    void Start()
    {
        CreateGrid();
    }

    void CreateGrid()
    {
        rowParents = new List<GameObject>();
        gridSlotsByRow = new List<Slot[]>();
        isRowCleared = new bool[TotalRows];
        for (int i = 0; i < TotalRows; i++) isRowCleared[i] = false;

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

        totalGridHeight = (TotalRows - 1) * slotHeight;
        float startY = (totalGridHeight / 2.0f) + verticalOffset;

        for (int row = 0; row < TotalRows; row++)
        {
            GameObject rowParentGO = Instantiate(rowParentPrefab, prefabsParent);
            rowParentGO.name = $"RowParent_{row}"; // Hierarchy에서 이름 구분을 위함
            rowParentGO.transform.localPosition = new Vector3(0, startY - (row * slotHeight), 0); // 줄의 초기 Y 위치
            rowParents.Add(rowParentGO); // 리스트에 추가

            RowData currentRowData = levelData[row];
            int slotsInRow = row + 1;
            float centeredStartX = -(row * slotWidth / 2.0f);

            Slot[] currentRowSlots = new Slot[slotsInRow];

            HashSet<int> wrongSlotIndexes = GetWrongIndexes(slotsInRow, currentRowData.wrongStuffCount);

            for (int col = 0; col < slotsInRow; col++)
            {
                Vector3 position = new Vector3(centeredStartX + col * slotWidth, 0, 0);
                
                GameObject newSlot = Instantiate(slotPrefab, rowParentGO.transform);
                Slot slotComponent = newSlot.GetComponent<Slot>();
                newSlot.transform.localPosition = position;
                newSlot.transform.localScale =  Vector3.one * slotScale;
                slotComponent.Initialize(row, currentRowData.material);

                currentRowSlots[col] = slotComponent;
                newSlot.isStatic = true; 

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
                            slotComponent.PlaceStuff(wrongStuffs[i]);
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
                                    Slot wrongSlot = stuff.transform.parent.gameObject.GetComponent<Slot>();
                                    wrongStuffs[i].gameObject.transform.SetParent(stuff.transform.parent);
                                    wrongStuffs[i].gameObject.transform.localPosition = new Vector3(-1f, -1f, -4.5f);
                                    wrongStuffs[i].gameObject.transform.localScale = Vector3.one;
                                    wrongSlot.PlaceStuff(wrongStuffs[i]);
                                    stuff.gameObject.transform.SetParent(newSlot.transform);
                                    stuff.gameObject.transform.localPosition = new Vector3(-1f, -1f, -4.5f);
                                    stuff.gameObject.transform.localScale = Vector3.one * stuffScale;
                                    slotComponent.PlaceStuff(stuff);
                                    break;
                                }
                            }
                        }
                    }
                }
                else
                {
                    GameObject newStuff = Instantiate(stuffPrefab, newSlot.transform);
                    Stuff stuffComponent = newStuff.GetComponent<Stuff>();
                    newStuff.transform.localPosition = new Vector3(-1f, -1f, -4.5f); // Stuff 위치 미세 조정
                    stuffComponent.Initialize(row, currentRowData.material);
                    slotComponent.PlaceStuff(stuffComponent);
                }
            }
            gridSlotsByRow.Add(currentRowSlots);
        }
    }

    private HashSet<int> GetWrongIndexes(int totalSlots, int wrongCount)
    {
        if (wrongCount <= 0) return new HashSet<int>();
        System.Random seedRandom = new System.Random(seed);
        IEnumerable<int> wrongIndexesList = Enumerable.Range(0, totalSlots)
                         .OrderBy(x => seedRandom.Next())
                         .Take(wrongCount);
        return new HashSet<int>(wrongIndexesList);
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

    // 줄에 똑같은 물건이 있는지 체크하고 맞다면 클리어
    public void CheckRowClearance(int rowToCheck)
    {
        if (rowToCheck == 0) return; 

        // 이미 클리어된 줄이라면 무시
        if (isRowCleared[rowToCheck])
        {
            return;
        }
        
        // 현재 확인 중인 줄의 슬롯들을 가져옴
        Slot[] currentRowSlots = gridSlotsByRow[rowToCheck];
        // 줄이 이미 사라져서 null일 경우, 혹은 잘못된 인덱스
        if (currentRowSlots == null || currentRowSlots.Length == 0)
        {
            return;
        }

        bool allSlotsCorrect = true;

        // 해당 줄의 모든 슬롯 정상 확인
        for (int col = 0; col < currentRowSlots.Length; col++)
        {
            Slot slot = currentRowSlots[col];
            // 슬롯이 없거나 || 물건이 놓이지 않았거나 || 놓인 물건이 올바르지 않다면
            if (slot == null || slot.placedStuff == null || !slot.isCorrectlyFilled)
            {
                allSlotsCorrect = false;
                break;
            }
        }

        if (allSlotsCorrect)
        {
            isRowCleared[rowToCheck] = true; // 해당 줄이 클리어되었음을 표시

            ClearAndHide(rowToCheck); // 줄 사라짐
        }
    }

    private void ClearAndHide(int rowToHide)
    {
        GameObject rowParentGO = rowParents[rowToHide]; // 해당 줄의 부모 GameObject 가져오기
        // 이미 사라졌다면 (예외 처리)
        if (rowParentGO == null) return;

        Slot[] currentRowSlots = gridSlotsByRow[rowToHide];

        if (EffectsManager.Instance != null)
        {
            if(rowParentGO != null)
                EffectsManager.Instance.PlayGoodTextEffect(rowParentGO.transform.position);
            if (currentRowSlots != null)
            {
                foreach (Slot slot in currentRowSlots)
                {
                    if (slot != null)
                        EffectsManager.Instance.PlayRowClearEffect(slot.transform.position);
                }
            }
        }
        if (currentRowSlots != null)
        {
            foreach (Slot slot in currentRowSlots)
                if (slot != null) slot.ClearStuff(); 
        }
        

        Destroy(rowParentGO); // 줄 부모 GameObject와 그 자식들 모두 파괴
        rowParents[rowToHide] = null; // 리스트에서 참조 제거
        gridSlotsByRow[rowToHide] = null; // 슬롯 참조 배열 제거
        

        MoveRemainingRowsDown(rowToHide); // 남아있는 줄들을 아래로 내리는 애니메이션 시작
    }

    private void MoveRemainingRowsDown(int clearedRowIndex)
    {
        Sequence sequence = DOTween.Sequence();

        for (int row = 0; row < TotalRows; row++)
        {
            if (isRowClearedByRowIndex(row)) continue;

            GameObject rowParentGO = rowParents.ElementAtOrDefault(row);
            if (rowParentGO != null)
            {
                int clearedRowsBelowCurrent = 0;
                for (int i = row + 1; i < TotalRows; i++)
                {
                    if (isRowClearedByRowIndex(i)) 
                        clearedRowsBelowCurrent++;
                }

                float startY = (totalGridHeight / 2.0f) + verticalOffset;
                float originalYForThisRow = startY - (row * slotHeight);

                float finalTargetY = originalYForThisRow - (clearedRowsBelowCurrent * slotHeight);

                Vector3 targetPosition = new Vector3(rowParentGO.transform.localPosition.x, finalTargetY, rowParentGO.transform.localPosition.z);

                // Ease.OutBounce로 통통 튀는 효과 추가
                sequence.Join(rowParentGO.transform.DOLocalMove(targetPosition, rowMoveDownDuration).SetEase(Ease.OutBounce));
            }
        }
    }

    // 행이 클리어되었는지 여부를 반환하는 Helper 함수
    // index >= 0 : index가 0보다 큰지
    // index < isRowCleared.Length : index가 줄 개수보다 작은지
    // isRowCleared != null : isRowCleared 배열이 존재 하는지
    private bool isRowClearedByRowIndex(int index)
    {
        return index >= 0 && index < isRowCleared.Length && isRowCleared != null && isRowCleared.Length > 0 ? isRowCleared.GetValue(index) as bool? == true : false;
    }
}
using UnityEngine;

public class GridManager : MonoBehaviour
{
    [Header("격자 생성 설정")]
    [Tooltip("생성할 격자의 총 줄 수")]
    [SerializeField] private int totalRows = 9;

    [Tooltip("생성할 격자의 최소 줄 수")]
    [SerializeField] private int minRows = 3;

    [Tooltip("격자 전체 Y 위치 추가 조절")]
    [SerializeField] private float verticalOffset = 0f;

    [Tooltip("격자를 생성할 부모 오브젝트")]
    [SerializeField] private Transform gridParent;


    [Header("슬롯 크기 및 간격")]
    [Tooltip("슬롯 프리팹")]
    [SerializeField] private GameObject slotPrefab;

    [Tooltip("가로 간격")]
    [SerializeField] private float slotWidth = 0.6f;
    
    [Tooltip("세로 간격")]
    [SerializeField] private float slotHeight = 1.0f;
    
    [Tooltip("프리팹 크기")]
    [SerializeField] private float slotScale = 0.25f;

    void Start()
    {
        CreateGrid();
    }

    void CreateGrid()
    {
        // 가장 윗줄(row 0)부터 가장 아랫줄(row totalRows-1)까지의 총 높이 계산
        float totalGridHeight = (Mathf.Max(minRows, totalRows) - 1) * slotHeight;

        // 격자의 절반 높이만큼 위로 올려서 격자의 중앙이 (0,0)에 오도록, verticalOffset으로 조절 가능
        float startY = (totalGridHeight / 2.0f) + verticalOffset;

        // 격자 생성
        for (int row = 0; row < totalRows; row++)
        {
            int slotsInRow = row + 1;
            for (int col = 0; col < slotsInRow; col++)
            {
                // 각 줄의 중앙 정렬을 위한 X 위치 계산
                float xPos = col * slotWidth - (row * slotWidth / 2.0f);

                // 시작 Y 위치에서 현재 줄의 높이만큼 아래로 이동
                float yPos = startY - (row * slotHeight);
                
                Vector3 localPosition = new Vector3(xPos, yPos, 0);
                
                GameObject newSlot = Instantiate(slotPrefab, gridParent);
                newSlot.transform.localPosition = localPosition;
                newSlot.transform.localScale = slotScale * Vector3.one;
            }
        }
    }
}
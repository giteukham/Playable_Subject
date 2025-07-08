using UnityEngine;
using DG.Tweening; 

public class DragAndDropManager : MonoBehaviour
{
    public static DragAndDropManager Instance { get; private set; }

    private Stuff currentDraggedStuff; // 현재 드래그 중인 물건
    private Vector3 originalStuffPosition; // 드래그 시작 시 물건의 원래 위치
    private Slot originalStuffParentSlot; // 물건이 원래 속해있던 슬롯

    private float currentDragDepth; // 드래그 시작 시 물건의 Z 깊이 (스크린 좌표계 기준)
    private Vector3 dragOffsetFromCenter; // 마우스 클릭 위치와 물건 중심점 간의 오프셋

    [Header("드래그 설정")]
    [SerializeField] private float dragZOffset = -1f;
    [SerializeField] private LayerMask slotLayer; // 슬롯이 있는 레이어

    void Awake()
    {
        if (Instance != null && Instance != this)
            Destroy(gameObject);
        else
            Instance = this;
    }

    // 드래그 시작
    public void StartDrag(Stuff stuff)
    {
        if (currentDraggedStuff != null) return;

        currentDraggedStuff = stuff;
        originalStuffPosition = stuff.transform.position; // 현재 월드 위치 저장
        
        // Stuff가 Slot에 이미 놓여있었다면, 해당 Slot에서 Stuff 정보를 제거
        originalStuffParentSlot = stuff.GetComponentInParent<Slot>();
        // 부모 슬롯이 있고, 그 슬롯에 이 물건이 할당되어 있다면
        if (originalStuffParentSlot != null && originalStuffParentSlot.placedStuff == stuff)
        {
            originalStuffParentSlot.placedStuff = null; // 슬롯에서 물건 참조 해제
            originalStuffParentSlot.isCorrectlyFilled = false; // 슬롯 상태 초기화
        }

        // Stuff의 월드 좌표를 스크린 좌표로 변환하여 Z 깊이를 저장
        currentDragDepth = Camera.main.WorldToScreenPoint(currentDraggedStuff.transform.position).z;

        Vector3 mouseWorldPosition = Camera.main.ScreenToWorldPoint(new Vector3(Input.mousePosition.x, Input.mousePosition.y, currentDragDepth));
        dragOffsetFromCenter = currentDraggedStuff.transform.position - mouseWorldPosition;

        Vector3 currentWorldPos = currentDraggedStuff.transform.position;
        currentDraggedStuff.transform.position = new Vector3(currentWorldPos.x, currentWorldPos.y, currentWorldPos.z + dragZOffset);

        // 부모 해제
        currentDraggedStuff.transform.SetParent(null);
    }

    // 드래그 중
    public void Drag(Stuff stuff)
    {
        if (currentDraggedStuff != stuff) return;
        Vector3 mousePosition = Input.mousePosition;

        // 드래그 시작 시 조절된 Z 깊이를 사용하여 월드 좌표로 변환
        mousePosition.z = Camera.main.WorldToScreenPoint(currentDraggedStuff.transform.position).z; 
        Vector3 newWorldPosition = Camera.main.ScreenToWorldPoint(mousePosition);

        currentDraggedStuff.transform.position = newWorldPosition + dragOffsetFromCenter;
    }

    // 드래그 종료
    public void EndDrag(Stuff stuff)
    {
        if (currentDraggedStuff != stuff) return;

        // 드롭된 위치 아래에 Slot이 있는지 확인 
        RaycastHit hit;
        Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition); // 마우스 포인터에서 Ray 발사

        Slot targetSlot = null;
        // Physics.Raycast(발사할 Ray, 맞은 정보 저장 변수, 최대 거리, 레이어 마스크)
        if (Physics.Raycast(ray, out hit, Mathf.Infinity, slotLayer))
        {
            // Ray가 충돌한 Collider에서 Slot 컴포넌트 가져오기
            targetSlot = hit.collider.GetComponent<Slot>();
        }

        // 대상 슬롯이 존재하고, 그 슬롯이 현재 비어있어야 함
        if (targetSlot != null && targetSlot.placedStuff == null)
        {
            // 슬롯에 물건 배치
            targetSlot.PlaceStuff(currentDraggedStuff);
            if (GridManager.Instance != null)
            {
                GridManager.Instance.CheckRowClearance(targetSlot.rowIndex);
            }
        }
        else // 드롭된 자리가 비어있지 않거나, 슬롯이 아니라면 원래 위치로 복귀
        {   
            currentDraggedStuff.transform.position = originalStuffPosition; // 원래 위치로 되돌리기
            if (originalStuffParentSlot != null)
            {
                originalStuffParentSlot.PlaceStuff(currentDraggedStuff); // 원본 파일의 내용
            }
        }
        
        currentDraggedStuff = null; // 드래그 중인 물건 초기화
    }
}
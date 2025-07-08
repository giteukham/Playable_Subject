using UnityEngine;

public class DragAndDropManager : MonoBehaviour
{
	private Stuff currentDraggedStuff;

	private Vector3 originalStuffPosition;

	private Slot originalStuffParentSlot;

	private float currentDragDepth;

	private Vector3 dragOffsetFromCenter;

	[Header("드래그 설정")]
	[SerializeField]
	private float dragZOffset = -1f;

	[SerializeField]
	private LayerMask slotLayer;

	public static DragAndDropManager Instance { get; private set; }

	private void Awake()
	{
		if (Instance != null && Instance != this)
		{
			Object.Destroy(base.gameObject);
		}
		else
		{
			Instance = this;
		}
	}

	public void StartDrag(Stuff stuff)
	{
		if (!(currentDraggedStuff != null))
		{
			if (GameManager.Instance != null)
			{
				GameManager.Instance.OnPlayerInteraction();
			}
			currentDraggedStuff = stuff;
			originalStuffPosition = stuff.transform.position;
			originalStuffParentSlot = stuff.GetComponentInParent<Slot>();
			if (originalStuffParentSlot != null && originalStuffParentSlot.placedStuff == stuff)
			{
				originalStuffParentSlot.placedStuff = null;
				originalStuffParentSlot.isCorrectlyFilled = false;
			}
			currentDragDepth = Camera.main.WorldToScreenPoint(currentDraggedStuff.transform.position).z;
			Vector3 mouseWorldPosition = Camera.main.ScreenToWorldPoint(new Vector3(Input.mousePosition.x, Input.mousePosition.y, currentDragDepth));
			dragOffsetFromCenter = currentDraggedStuff.transform.position - mouseWorldPosition;
			Vector3 currentWorldPos = currentDraggedStuff.transform.position;
			currentDraggedStuff.transform.position = new Vector3(currentWorldPos.x, currentWorldPos.y, currentWorldPos.z + dragZOffset);
			currentDraggedStuff.transform.SetParent(null);
		}
	}

	public void Drag(Stuff stuff)
	{
		if (!(currentDraggedStuff != stuff))
		{
			Vector3 mousePosition = Input.mousePosition;
			mousePosition.z = Camera.main.WorldToScreenPoint(currentDraggedStuff.transform.position).z;
			Vector3 newWorldPosition = Camera.main.ScreenToWorldPoint(mousePosition);
			currentDraggedStuff.transform.position = newWorldPosition + dragOffsetFromCenter;
		}
	}

	public void EndDrag(Stuff stuff)
	{
		if (currentDraggedStuff != stuff)
		{
			return;
		}
		Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);
		Slot targetSlot = null;
		if (Physics.Raycast(ray, out var hit, float.PositiveInfinity, slotLayer))
		{
			targetSlot = hit.collider.GetComponent<Slot>();
		}
		if (targetSlot != null && targetSlot.placedStuff == null)
		{
			targetSlot.PlaceStuff(currentDraggedStuff);
			if (GridManager.Instance != null)
			{
				GridManager.Instance.CheckRowClearance(targetSlot.rowIndex);
			}
		}
		else
		{
			currentDraggedStuff.transform.position = originalStuffPosition;
			if (originalStuffParentSlot != null)
			{
				originalStuffParentSlot.PlaceStuff(currentDraggedStuff);
			}
		}
		currentDraggedStuff = null;
	}
}

using UnityEngine;

public class Stuff : MonoBehaviour
{
    private DragAndDropManager dragManager;
    public int rowIndex { get; private set; }
    private Renderer rendererr;

    public void Initialize(int rowIndex, Material material)
    {
        this.rowIndex = rowIndex;
        if (rendererr == null) rendererr = GetComponent<Renderer>();
        rendererr.material = material;

        if (dragManager == null)
        {
            dragManager = FindObjectOfType<DragAndDropManager>();
            if (dragManager == null)
            {
                Debug.LogError("DragAndDropManager가 씬에 없습니다.");
            }
        }
    }

     private void OnMouseDown()
    {
        if (dragManager != null)
        {
            dragManager.StartDrag(this);
        }
    }

    private void OnMouseDrag()
    {
        if (dragManager != null)
        {
            dragManager.Drag(this);
        }
    }

    private void OnMouseUp()
    {
        if (dragManager != null)
        {
            dragManager.EndDrag(this);
        }
    }
}
using UnityEngine;

public class Slot : MonoBehaviour
{
    public Stuff placedStuff;
    public int rowIndex { get; private set; }
    private Renderer rendererr;
    public bool isCorrectlyFilled { get; set; } = false;
    public void Initialize(int rowIndex, Material material)
    {
        this.rowIndex = rowIndex;
        if (rendererr == null) rendererr = GetComponent<Renderer>();
        rendererr.material = material;
        isCorrectlyFilled = false;
    }

    public void PlaceStuff(Stuff stuff)
    {
        placedStuff = stuff;
        stuff.transform.SetParent(this.transform);
        stuff.transform.localPosition = new Vector3(-1f, -1f, -4.5f);
        stuff.transform.localScale = Vector3.one; 
        isCorrectlyFilled = stuff.rowIndex == this.rowIndex;
    }
    public void ClearStuff()
    {
        if (placedStuff != null)
        {
            placedStuff.gameObject.SetActive(false);
            placedStuff = null; 
        }
        isCorrectlyFilled = false;
    }
} 
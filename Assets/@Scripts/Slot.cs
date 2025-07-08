using UnityEngine;

public class Slot : MonoBehaviour
{
    public Stuff placedStuff;
    public int rowIndex { get; private set; }
    private Renderer _renderer;
    public bool isCorrectlyFilled;
    public void Initialize(int rowIndex, Material material)
    {
        this.rowIndex = rowIndex;
        if (_renderer == null) _renderer = GetComponent<Renderer>();
        _renderer.material = material;
        isCorrectlyFilled = false;
    }

    public void PlaceStuff(Stuff stuff)
    {
        placedStuff = stuff;
        stuff.transform.SetParent(this.transform);
        stuff.transform.localPosition = new Vector3(-1f, -1f, -4.5f);
        stuff.transform.localScale = Vector3.one; 
        isCorrectlyFilled = stuff.rowIndex == rowIndex; //stuff._renderer.material == _renderer.material; 머터리얼로 하면 동작 안됨
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
using UnityEngine;

public class Slot : MonoBehaviour
{
    public Stuff placedStuff;
    public int rowIndex { get; private set; }
    public void Initialize(int rowIndex, Material material)
    {
        this.rowIndex = rowIndex;
        GetComponent<Renderer>().material = material;
    }
} 
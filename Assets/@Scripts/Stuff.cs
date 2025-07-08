using UnityEngine;

public class Stuff : MonoBehaviour
{
    public int rowIndex { get; private set; }

    public void Initialize(int rowIndex, Material material)
    {
        this.rowIndex = rowIndex;
        GetComponent<Renderer>().material = material;
    }
}
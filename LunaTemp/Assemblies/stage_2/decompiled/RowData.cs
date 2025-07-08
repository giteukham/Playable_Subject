using System;
using UnityEngine;

[Serializable]
public class RowData
{
	public Material material;

	[Range(0f, 9f)]
	public int wrongStuffCount;
}

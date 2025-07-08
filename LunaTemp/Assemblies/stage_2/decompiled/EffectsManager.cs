using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;

public class EffectsManager : MonoBehaviour
{
	[Header("이펙트 프리팹")]
	[SerializeField]
	private GameObject rowClearParticlePrefab;

	[SerializeField]
	private GameObject goodTextPrefab;

	[Header("오브젝트 풀 설정")]
	[SerializeField]
	private int poolSize = 5;

	private Queue<GameObject> rowClearParticlePool;

	private Queue<GameObject> goodTextPool;

	public static EffectsManager Instance { get; private set; }

	private void Awake()
	{
		if (Instance == null)
		{
			Instance = this;
		}
		else
		{
			Object.Destroy(base.gameObject);
		}
		InitializePools();
	}

	private void InitializePools()
	{
		rowClearParticlePool = new Queue<GameObject>();
		goodTextPool = new Queue<GameObject>();
		for (int i = 0; i < poolSize; i++)
		{
			GameObject clearParticle = Object.Instantiate(rowClearParticlePrefab, base.transform);
			clearParticle.SetActive(false);
			rowClearParticlePool.Enqueue(clearParticle);
			GameObject gootText = Object.Instantiate(goodTextPrefab, base.transform);
			if (gootText.GetComponent<SpriteRenderer>() == null)
			{
				Debug.LogError("goodTextPrefab에 SpriteRenderer 컴포넌트가 없습니다");
			}
			gootText.SetActive(false);
			goodTextPool.Enqueue(gootText);
		}
	}

	public void PlayRowClearEffect(Vector3 position)
	{
		GameObject particle = GetFromPool(rowClearParticlePool, rowClearParticlePrefab);
		if (!(particle == null))
		{
			particle.transform.position = new Vector3(position.x, position.y, 5f);
			particle.SetActive(true);
			StartCoroutine(ReturnToPoolAfterDuration(particle, rowClearParticlePool, 1f));
		}
	}

	public void PlayGoodTextEffect(Vector3 position)
	{
		GameObject goodTextObject = GetFromPool(goodTextPool, goodTextPrefab);
		if (goodTextObject == null)
		{
			return;
		}
		SpriteRenderer spriteRenderer = goodTextObject.GetComponent<SpriteRenderer>();
		if (!(spriteRenderer == null))
		{
			goodTextObject.transform.position = new Vector3(position.x, position.y, 5f);
			goodTextObject.SetActive(true);
			Color startColor = spriteRenderer.color;
			startColor.a = 0f;
			spriteRenderer.color = startColor;
			Sequence sequence = DOTween.Sequence();
			sequence.Append(spriteRenderer.DOFade(1f, 0.2f));
			sequence.AppendInterval(0.4f);
			sequence.Append(spriteRenderer.DOFade(0f, 0.2f));
			sequence.OnComplete(delegate
			{
				goodTextObject.SetActive(false);
				goodTextPool.Enqueue(goodTextObject);
			});
		}
	}

	private GameObject GetFromPool(Queue<GameObject> pool, GameObject prefab)
	{
		if (pool.Count > 0)
		{
			return pool.Dequeue();
		}
		return Object.Instantiate(prefab, base.transform);
	}

	private IEnumerator ReturnToPoolAfterDuration(GameObject obj, Queue<GameObject> pool, float delay)
	{
		yield return new WaitForSeconds(delay);
		obj.SetActive(false);
		pool.Enqueue(obj);
	}
}

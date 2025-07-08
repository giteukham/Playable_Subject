using UnityEngine;
using System.Collections.Generic;
using DG.Tweening; // DOTween 사용

public class EffectsManager : MonoBehaviour
{
    public static EffectsManager Instance { get; private set; }

    [Header("이펙트 프리팹")]
    [SerializeField] private GameObject rowClearParticlePrefab;
    [SerializeField] private GameObject goodTextPrefab;

    [Header("오브젝트 풀 설정")]
    [SerializeField] private int poolSize = 5;

    // 이펙트 오브젝트 풀
    private Queue<GameObject> rowClearParticlePool;
    private Queue<GameObject> goodTextPool;

    void Awake()
    {
        if (Instance == null) Instance = this;
        else Destroy(gameObject);
        InitializePools();
    }

    private void InitializePools()
    {
        rowClearParticlePool = new Queue<GameObject>();
        goodTextPool = new Queue<GameObject>();

        for (int i = 0; i < poolSize; i++)
        {
            // 클리어 파티클 생성
            GameObject clearParticle = Instantiate(rowClearParticlePrefab, transform);
            clearParticle.SetActive(false);
            rowClearParticlePool.Enqueue(clearParticle);

            // Good 텍스트 오브젝트 생성
            GameObject gootText = Instantiate(goodTextPrefab, transform);
            if (gootText.GetComponent<SpriteRenderer>() == null)
                Debug.LogError("goodTextPrefab에 SpriteRenderer 컴포넌트가 없습니다");
            gootText.SetActive(false);
            goodTextPool.Enqueue(gootText);
        }
    }

    public void PlayRowClearEffect(Vector3 position)
    {
        GameObject particle = GetFromPool(rowClearParticlePool, rowClearParticlePrefab);
        if (particle == null) return;

        particle.transform.position = new Vector3(position.x, position.y, 5f);
        particle.SetActive(true);
        
        StartCoroutine(ReturnToPoolAfterDuration(particle, rowClearParticlePool, 1f)); 
    }

    public void PlayGoodTextEffect(Vector3 position)
    {
        GameObject goodTextObject = GetFromPool(goodTextPool, goodTextPrefab);
        if (goodTextObject == null) return;

        SpriteRenderer spriteRenderer = goodTextObject.GetComponent<SpriteRenderer>();
        if (spriteRenderer == null) return;

        goodTextObject.transform.position = new Vector3(position.x, position.y, 5f);
        goodTextObject.SetActive(true);

        Color startColor = spriteRenderer.color;
        startColor.a = 0;
        spriteRenderer.color = startColor;

        Sequence sequence = DOTween.Sequence();
        sequence.Append(spriteRenderer.DOFade(1f, 0.2f));
        sequence.AppendInterval(0.4f);
        sequence.Append(spriteRenderer.DOFade(0f, 0.2f));
        sequence.OnComplete(() => {
            // 애니메이션이 끝나면 비활성화하고 풀로 되돌림
            goodTextObject.SetActive(false);
            goodTextPool.Enqueue(goodTextObject);
        });
    }

    // 풀에서 오브젝트를 꺼내오는 함수
    private GameObject GetFromPool(Queue<GameObject> pool, GameObject prefab)
    {
        if (pool.Count > 0)
            return pool.Dequeue();
        // 풀이 비었다면 새로 생성
        return Instantiate(prefab, transform);
    }
    
    // 일정 시간 뒤에 풀로 되돌리는 코루틴
    private System.Collections.IEnumerator ReturnToPoolAfterDuration(GameObject obj, Queue<GameObject> pool, float delay)
    {
        yield return new WaitForSeconds(delay);
        obj.SetActive(false);
        pool.Enqueue(obj);
    }
}
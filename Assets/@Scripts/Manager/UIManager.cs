using UnityEngine;
using TMPro;
using DG.Tweening;

public class UIManager : MonoBehaviour
{
    public static UIManager Instance { get; private set; }

    [Header("UI 요소")]
    [SerializeField] private GameObject textBackGroundObject;
    [SerializeField] private TextMeshProUGUI idlePromptText;

    [Header("애니메이션 설정")]
    [Tooltip("움직임이 시작될 Y 위치")]
    [SerializeField] private float startY = 150f;
    [Tooltip("움직임이 도달할 Y 위치")]
    [SerializeField] private float endY = 160f;
    [Tooltip("시작점에서 끝점까지 가는 데 걸리는 시간")]
    [SerializeField] private float moveDuration = 1.0f;
    private Tween idlePromptTween;
    private bool isIdleAnimationPlaying = false; 
    
    void Awake()
    {
        if (Instance == null) Instance = this;
        else Destroy(gameObject);
    }

    void Start()
    {
        if (idlePromptText != null)
            idlePromptText.gameObject.SetActive(false);
        if (textBackGroundObject != null)
            textBackGroundObject.SetActive(false);
    }

    public void SetIdlePromptActive(bool isActive)
    {
        if (idlePromptText == null) return;

        if (isActive)
        {
            // 애니메이션이 이미 실행 중이라면 실행하지 않고 바로 종료
            if (isIdleAnimationPlaying) return;
            isIdleAnimationPlaying = true; // 이제 애니메이션이 실행될 것이라고 기록

            textBackGroundObject.SetActive(true);
            idlePromptText.gameObject.SetActive(true);
            idlePromptTween?.Kill();

            var rectTransform = idlePromptText.rectTransform;
            var startPos = rectTransform.anchoredPosition;
            startPos.y = startY;
            rectTransform.anchoredPosition = startPos;

            idlePromptTween = DOTween.Sequence()
                .Append(rectTransform.DOAnchorPosY(endY, moveDuration))
                .Append(rectTransform.DOAnchorPosY(startY, moveDuration))
                .SetEase(Ease.Linear)
                .SetLoops(-1);
        }
        else
        {
            isIdleAnimationPlaying = false;
            
            idlePromptTween?.Kill();
            textBackGroundObject.SetActive(false);
            idlePromptText.gameObject.SetActive(false);
        }
    }
}
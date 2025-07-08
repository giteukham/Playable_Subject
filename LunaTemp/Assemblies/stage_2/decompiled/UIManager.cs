using DG.Tweening;
using TMPro;
using UnityEngine;

public class UIManager : MonoBehaviour
{
	[Header("UI 요소")]
	[SerializeField]
	private GameObject textBackGroundObject;

	[SerializeField]
	private TextMeshProUGUI idlePromptText;

	[Header("애니메이션 설정")]
	[Tooltip("움직임이 시작될 Y 위치")]
	[SerializeField]
	private float startY = 150f;

	[Tooltip("움직임이 도달할 Y 위치")]
	[SerializeField]
	private float endY = 160f;

	[Tooltip("시작점에서 끝점까지 가는 데 걸리는 시간")]
	[SerializeField]
	private float moveDuration = 1f;

	private Tween idlePromptTween;

	private bool isIdleAnimationPlaying = false;

	[Header("엔드 카드")]
	[SerializeField]
	private GameObject endCardPanel;

	[Tooltip("애니메이션을 적용할 'Play Now' 버튼")]
	[SerializeField]
	private RectTransform playNowButton;

	private Tween buttonPulseTween;

	public static UIManager Instance { get; private set; }

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
	}

	private void Start()
	{
		if (idlePromptText != null)
		{
			idlePromptText.gameObject.SetActive(false);
		}
		if (textBackGroundObject != null)
		{
			textBackGroundObject.SetActive(false);
		}
		if (endCardPanel != null)
		{
			endCardPanel.SetActive(false);
		}
	}

	public void SetIdlePromptActive(bool isActive)
	{
		if (idlePromptText == null || endCardPanel.activeSelf)
		{
			return;
		}
		if (isActive)
		{
			if (!isIdleAnimationPlaying)
			{
				isIdleAnimationPlaying = true;
				textBackGroundObject.SetActive(true);
				idlePromptText.gameObject.SetActive(true);
				idlePromptTween?.Kill();
				RectTransform rectTransform = idlePromptText.rectTransform;
				Vector2 startPos = rectTransform.anchoredPosition;
				startPos.y = startY;
				rectTransform.anchoredPosition = startPos;
				idlePromptTween = DOTween.Sequence().Append(rectTransform.DOAnchorPosY(endY, moveDuration)).Append(rectTransform.DOAnchorPosY(startY, moveDuration))
					.SetEase(Ease.Linear)
					.SetLoops(-1);
			}
		}
		else
		{
			isIdleAnimationPlaying = false;
			idlePromptTween?.Kill();
			textBackGroundObject.SetActive(false);
			idlePromptText.gameObject.SetActive(false);
		}
	}

	public void ShowEndCard(bool show)
	{
		if (!(endCardPanel == null))
		{
			buttonPulseTween?.Kill();
			endCardPanel.SetActive(show);
			if (show && playNowButton != null)
			{
				playNowButton.localScale = Vector3.one * 0.9f;
				buttonPulseTween = DOTween.Sequence().Append(playNowButton.DOScale(1.1f, 0.6f)).Append(playNowButton.DOScale(0.9f, 0.6f))
					.SetEase(Ease.Linear)
					.SetLoops(-1);
			}
		}
	}
}

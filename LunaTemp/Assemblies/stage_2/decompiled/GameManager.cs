using Luna.Unity;
using UnityEngine;

public class GameManager : MonoBehaviour
{
	[Header("게임 플레이 설정")]
	[Tooltip("이 시간(초) 동안 조작이 없으면 안내 문구를 표시합니다.")]
	[SerializeField]
	private float idleTimeThreshold = 3f;

	private float idleTimer = 0f;

	[Tooltip("이 횟수만큼 드래그하면 엔드 카드를 표시합니다.")]
	[SerializeField]
	private int dragCountForEndCard = 20;

	[Tooltip("이 횟수만큼 드래그하면 스토어로 이동합니다.")]
	[SerializeField]
	private int dragCountForStoreOpen = 8;

	private int currentDragCount = 0;

	public static GameManager Instance { get; private set; }

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

	private void Update()
	{
		idleTimer += Time.deltaTime;
		if (idleTimer >= idleTimeThreshold && UIManager.Instance != null)
		{
			UIManager.Instance.SetIdlePromptActive(true);
		}
	}

	public void OnPlayerInteraction()
	{
		idleTimer = 0f;
		if (UIManager.Instance != null)
		{
			UIManager.Instance.SetIdlePromptActive(false);
		}
	}

	public void TriggerAppStoreOpen()
	{
		Playable.InstallFullGame();
	}

	public void OnStuffDragged()
	{
		currentDragCount++;
		if (currentDragCount == dragCountForStoreOpen)
		{
			TriggerAppStoreOpen();
		}
		if (currentDragCount >= dragCountForEndCard)
		{
			UIManager.Instance.ShowEndCard(true);
		}
	}
}

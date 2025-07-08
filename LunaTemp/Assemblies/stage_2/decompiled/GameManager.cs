using UnityEngine;

public class GameManager : MonoBehaviour
{
	[Header("게임 플레이 설정")]
	[Tooltip("이 시간(초) 동안 조작이 없으면 안내 문구를 표시합니다.")]
	[SerializeField]
	private float idleTimeThreshold = 3f;

	private float idleTimer = 0f;

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
}

using UnityEngine;
using Luna.Unity;
using System.Collections.Generic;

public class GameManager : MonoBehaviour
{
    public static GameManager Instance { get; private set; }

    [Header("게임 플레이 설정")]
    [Tooltip("이 시간(초) 동안 조작이 없으면 안내 문구를 표시합니다.")]
    [SerializeField] private float idleTimeThreshold = 3f;

    private float idleTimer = 0f;

    [Tooltip("이 횟수만큼 드래그하면 엔드 카드를 표시합니다.")]
    [SerializeField] private int dragCountForEndCard = 20;

    [Tooltip("이 횟수만큼 드래그하면 스토어로 이동합니다.")]
    [SerializeField] private int dragCountForStoreOpen = 8;
    private int currentDragCount = 0;

    void Awake()
    {
        if (Instance == null) Instance = this;
        else Destroy(gameObject);
    }

    void Update()
    {
        // 조작 없는 시간을 계속 잼
        idleTimer += Time.deltaTime;

        // 정해진 시간 넘어가면
        if (idleTimer >= idleTimeThreshold)
        {
            // UIManager에게 문구 켜달라고 요청
            if (UIManager.Instance != null)
                UIManager.Instance.SetIdlePromptActive(true);
        }
    }

    public void OnPlayerInteraction()
    {
        // 조작 없는 시간을 0으로 리셋
        idleTimer = 0f;
        
        // UIManager에게 문구를 꺼달라고 요청
        if (UIManager.Instance != null)
            UIManager.Instance.SetIdlePromptActive(false);
    }

    public void TriggerAppStoreOpen()
    {
        Playable.InstallFullGame();
    }

    public void OnStuffDragged()
    {
        currentDragCount++;
        // 드래그 횟수에 따라 스토어 오픈
        if (currentDragCount == dragCountForStoreOpen)
            TriggerAppStoreOpen();
        // 정해진 횟수에 도달하면 엔드 카드 표시
        if (currentDragCount >= dragCountForEndCard)
            UIManager.Instance.ShowEndCard(true);
    }

}
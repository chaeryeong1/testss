window.addEventListener('DOMContentLoaded', () => {
  // 최소화 버튼 클릭 시
  document.getElementById('minimize-btn').addEventListener('click', () => {
    remote.getCurrentWindow().minimize();
  });

  // 최대화 버튼 클릭 시
  document.getElementById('maximize-btn').addEventListener('click', () => {
    const currentWindow = remote.getCurrentWindow();
    if (currentWindow.isMaximized()) {
      currentWindow.unmaximize();
    } else {
      currentWindow.maximize();
    }
  });

  // 창 닫기 버튼 클릭 시
  document.getElementById('close-btn').addEventListener('click', () => {
    remote.getCurrentWindow().close();
  });
});

const { ipcRenderer } = require('electron');

// 최소화 버튼 클릭 이벤트
document.getElementById('minimize-btn').addEventListener('click', () => {
  ipcRenderer.send('minimizeApp');
});

// 최대화 버튼 클릭 이벤트
document.getElementById('maximize-btn').addEventListener('click', () => {
  ipcRenderer.send('maximizeApp');
});

// 복원 버튼 클릭 이벤트
document.getElementById('restore-btn').addEventListener('click', () => {
  ipcRenderer.send('restoreApp');
});

// 닫기 버튼 클릭 이벤트
document.getElementById('close-btn').addEventListener('click', () => {
  ipcRenderer.send('closeApp');
});

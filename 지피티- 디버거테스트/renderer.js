const { ipcRenderer } = require('electron');

// 최소화 버튼 클릭 이벤트
const minButton = document.getElementById('min-btn');
minButton.addEventListener('click', function() {
  ipcRenderer.send('window-minimize');
});

// 최대화 버튼 클릭 이벤트
const maxButton = document.getElementById('max-btn');
maxButton.addEventListener('click', function() {
  ipcRenderer.send('window-maximize');
});

// 종료 버튼 클릭 이벤트
const closeButton = document.getElementById('close-btn');
closeButton.addEventListener('click', function() {
  ipcRenderer.send('window-close');
});

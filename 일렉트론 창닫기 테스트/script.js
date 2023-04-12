const { remote } = require('electron');

const minimizeButton = document.getElementById('minimizeButton');
const maximizeButton = document.getElementById('maximizeButton');
const closeButton = document.getElementById('closeButton');

minimizeButton.addEventListener('click', function() {
  const window = remote.getCurrentWindow();
  window.minimize();
});

maximizeButton.addEventListener('click', function() {
  const window = remote.getCurrentWindow();
  if (!window.isMaximized()) {
    window.maximize();
  } else {
    window.unmaximize();
  }
});

closeButton.addEventListener('click', function() {
  const window = remote.getCurrentWindow();
  window.close();
});

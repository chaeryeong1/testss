const { remote } = require('electron');

document.getElementById('closeButton').addEventListener('click', () => {
  const window = remote.getCurrentWindow();
  window.close();
});
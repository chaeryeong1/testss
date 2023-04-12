const { remote } = require('electron');
const currentWindow = remote.getCurrentWindow();

const closeButton = document.getElementById('closeButton');
closeButton.addEventListener('click', function() {
  currentWindow.close();
});

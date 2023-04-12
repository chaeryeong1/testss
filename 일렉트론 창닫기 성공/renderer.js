const { ipcRenderer } = require('electron');

const closeButton = document.getElementById('closeButton');
closeButton.addEventListener('click', function () {
    ipcRenderer.send('close-window');
});

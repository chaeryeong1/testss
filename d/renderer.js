const remote = require('electron').remote;
const closeButton = document.getElementById('closeButton');

closeButton.addEventListener('click', function(){
    var window = remote.getCurrentWindow();
    window.close();
})
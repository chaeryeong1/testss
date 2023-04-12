function closeWindow() {
  const { remote } = require('electron')
  let win = remote.getCurrentWindow()
  win.close()
}
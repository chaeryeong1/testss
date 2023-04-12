const { app, BrowserWindow, ipcMain, Menu } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1130,
    height: 750,
    backgroundColor: '#ffffff',
    frame: false,
    resizable: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false
    }
  });

  mainWindow.loadFile('index.html');

  // 창이 닫힐 때 발생하는 이벤트
  mainWindow.on('closed', function() {
    mainWindow = null;
  });

  // 렌더러 프로세스에서 받은 이벤트 처리
  ipcMain.on('window-minimize', function() {
    mainWindow.minimize();
  });

  ipcMain.on('window-maximize', function() {
    if (mainWindow.isMaximized()) {
      mainWindow.restore();
    } else {
      mainWindow.maximize();
    }
  });

  ipcMain.on('window-close', function() {
    mainWindow.close();
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function() {
  if (mainWindow === null) {
    createWindow();
  }
});

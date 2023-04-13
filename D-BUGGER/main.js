const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

function createWindow() {
  const mainWindow = new BrowserWindow({
  width: 1130,
  height: 750,
    frame: false, // 상단바를 숨김
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: false,
      
    },
  });

  mainWindow.loadFile(path.join(__dirname, 'index.html'));
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});
ipcMain.on('minimize-window', (event) => {
  const win = BrowserWindow.getFocusedWindow();
  if (win) win.minimize();
});

ipcMain.on('maximize-window', (event) => {
  const win = BrowserWindow.getFocusedWindow();
  if (win) {
    if (win.isMaximized()) {
      win.unmaximize();
    } else {
      win.maximize();
    }
  }
});

ipcMain.on('close-window', (event) => {
  const win = BrowserWindow.getFocusedWindow();
  if (win) win.close();
});

function setWindowShape() {
  const rect = mainWindow.getBounds();
  const path = new Path2D();
  path.moveTo(0, 10);
  path.arcTo(0, 0, 10, 0, 10);
  path.lineTo(rect.width - 10, 0);
  path.arcTo(rect.width, 0, rect.width, 10, 10);
  path.lineTo(rect.width, rect.height - 10);
  path.arcTo(rect.width, rect.height, rect.width - 10, rect.height, 10);
  path.lineTo(10, rect.height);
  path.arcTo(0, rect.height, 0, rect.height - 10, 10);
  path.closePath();
  return path;
}

// 둥근 모서리를 적용합니다.
mainWindow.on('ready-to-show', () => {
  mainWindow.setShape(setWindowShape());
});

// 윈도우의 크기가 변경될 때마다 둥근 모서리를 업데이트합니다.
mainWindow.on('resize', () => {
  mainWindow.setShape(setWindowShape());
});
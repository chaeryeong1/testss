const { app, BrowserWindow, Menu } = require('electron')

// 창이 닫히면 앱 종료
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// 앱이 준비되면 창 생성
app.on('ready', () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    // 기본 상단바 숨기기
    frame: false,
    // 창이 준비되면 렌더러 프로세스의 index.html 파일 로드
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    }
  })

  // 메뉴 생성
  const menu = Menu.buildFromTemplate([
    {
      label: 'File',
      submenu: [
        {
          label: 'Exit',
          accelerator: 'CmdOrCtrl+Q',
          click: () => {
            app.quit()
          }
        }
      ]
    }
  ])
  // 메뉴 적용
  Menu.setApplicationMenu(menu)

  // index.html 파일 로드
  win.loadFile('index.html')

  // 창이 닫힐 때 발생하는 이벤트 리스너 등록
  win.on('closed', () => {
    // 창이 닫히면 메모리에서 삭제
    win = null
  })
})

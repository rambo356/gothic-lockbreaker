const { app, BrowserWindow, Menu, shell, screen } = require('electron');
const path = require('path');

function createWindow() {
  const display = screen.getPrimaryDisplay();
  const workArea = display.workArea;

  const preferredWidth = 1280;
  const windowWidth = Math.min(preferredWidth, workArea.width);
  const windowHeight = workArea.height;

  const win = new BrowserWindow({
    x: workArea.x + Math.max(0, Math.round((workArea.width - windowWidth) / 2)),
    y: workArea.y,
    width: windowWidth,
    height: windowHeight,
    minWidth: 1024,
    minHeight: Math.min(720, windowHeight),
    backgroundColor: '#050505',
    icon: path.join(__dirname, 'favicon.ico'),
    title: 'Gothic Lockbreaker',
    autoHideMenuBar: true,
    show: false,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true
    }
  });

  Menu.setApplicationMenu(null);

  win.once('ready-to-show', () => {
    win.show();
  });

  win.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: 'deny' };
  });

  win.loadFile(path.join(__dirname, 'index.html'));
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

const { app, BrowserWindow, ipcMain } = require('electron');


const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  }
  
  );

  win.loadFile('index.html');
};

app.whenReady().then(() => {
  createWindow();
  
  const currentWindow = BrowserWindow.getFocusedWindow();

  // Expand the window to fullscreen mode
  currentWindow.setFullScreen(true);
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
      
      preload: path.join(__dirname, 'preload.js')
      
      nodeIntegration: true
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
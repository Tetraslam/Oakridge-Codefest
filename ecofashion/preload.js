const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  createNewWindow: (filepath) => ipcRenderer.send('create-new-window', filepath)
})
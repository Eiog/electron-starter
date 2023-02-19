import type {
  App,
  BrowserWindow,
  Tray,
} from 'electron'
import {
  ipcMain,
} from 'electron'
const windowIpc = (mainWindow: BrowserWindow) => {
  ipcMain.on('window-hide', () => {
    mainWindow.hide()
  })
  ipcMain.on('window-screen-min', () => {
    mainWindow.minimize()
  })
  ipcMain.on('window-screen-full', () => {
    mainWindow.setFullScreen(true)
  })
  ipcMain.on('window-screen-exitfull', () => {
    mainWindow.setFullScreen(true)
  })
  ipcMain.on('window-screen-toggle', () => {
    mainWindow.setFullScreen(!mainWindow.fullScreen)
  })
  // New window example arg: new windows url
  ipcMain.handle('open-win', (_, arg) => {
    // const childWindow = new BrowserWindow({
    //   webPreferences: {
    //     preload,
    //     nodeIntegration: true,
    //     contextIsolation: false,
    //   },
    // })

    // if (process.env.VITE_DEV_SERVER_URL)
    //   childWindow.loadURL(`${url}#${arg}`)
    // else
    //   childWindow.loadFile(indexHtml, { hash: arg })
  })
}
const appIpc = (app: App) => {
  ipcMain.on('app-quit', () => {
    app.quit()
  })
}
const trayIpc = (tray: Tray) => {}
const useIpcMain = (app: App, mainWindow: BrowserWindow, tray: Tray) => {
  windowIpc(mainWindow)
  appIpc(app)
  trayIpc(tray)
}
export default useIpcMain

import { useApp, useIpcMain, useStore, useTray } from './hooks'

const init = async () => {
  const { app, mainWindow } = await useApp()
  const tray = useTray(app, mainWindow)
  // useVueDevTools(app, mainWindow)
  useIpcMain(app, mainWindow, tray)
  useStore()
}
init()

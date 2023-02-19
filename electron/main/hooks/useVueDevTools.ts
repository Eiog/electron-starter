import type { App, BrowserWindow } from 'electron'
import { session } from 'electron'
const useVueDevTools = async (app: App, mainWindow: BrowserWindow) => {
  const extensionPath = 'C:/Users/caobo/AppData/Local/Microsoft/Edge/User Data/Default/Extensions/olofadcdnkkjdfgjcmjaadnlehnnihnl/6.2.1_0'
  const extensionPath1 = 'C:/Users/Administrator/AppData/Local/Microsoft/Edge/User Data/Default/Extensions/olofadcdnkkjdfgjcmjaadnlehnnihnl/6.2.1_0'
  if (app.isPackaged)
    return
  mainWindow.webContents.openDevTools()
  await session.defaultSession.loadExtension(extensionPath)
}
export default useVueDevTools

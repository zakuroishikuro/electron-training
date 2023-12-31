// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge, ipcRenderer } from 'electron';

// Expose protected methods that allow the renderer process to use
contextBridge.exposeInMainWorld('api', {
  async hello() {
    console.log("invoke hello from preload");
    const res = await ipcRenderer.invoke('hello', "goodbye");
    console.log("res: ", res);
  }
});
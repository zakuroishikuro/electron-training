import { contextBridge, ipcRenderer } from 'electron';

const api = {
  async hello() {
    console.log("hello from preload")
    const replyFromMain = await ipcRenderer.invoke('hello', "こんにちわ from preload");
    console.log("reply: " + replyFromMain);
  }
};

contextBridge.exposeInMainWorld('api', api);

export type apiTypes = typeof api;
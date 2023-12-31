// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { ipcRenderer } from "electron";

ipcRenderer.on("ping", (event, message) => {
  window.addEventListener("DOMContentLoaded", () => {
    const h1 = document.querySelector("h1");
    h1.innerText = message;
  });
});

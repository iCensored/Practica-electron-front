const { app, BrowserWindow } = require("electron");

let mainWin;

app.on("ready", () => {
  mainWin = new BrowserWindow({});
  mainWin.loadURL("http://localhost:8080");
});

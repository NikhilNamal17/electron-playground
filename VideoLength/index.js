const electron = require("electron");
const ffmpeg = require("fluent-ffmpeg");
const { app, BrowserWindow, ipcMain } = electron;
const path = require("path");
let mainWindow;

console.log(__dirname);

ffmpeg.setFfmpegPath(path.join(__dirname, "/ffmpeg/bin/ffmpeg.exe"));
ffmpeg.setFfprobePath(path.join(__dirname, "/ffmpeg/bin/ffprobe.exe"));
app.on("ready", () => {
    mainWindow = new BrowserWindow({});
    mainWindow.loadURL(`file://${__dirname}/index.html`);
});

ipcMain.on("video:submit", (event, path) => {
    ffmpeg.ffprobe(path, (err, metadata) => {
        if (err) {
            console.log(err);
        } else {
            mainWindow.webContents.send(
                "video:metadata",
                metadata.format.duration
            );
        }
    });
});

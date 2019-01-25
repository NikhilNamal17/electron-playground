const electron = require("electron");
const { app, ipcMain } = electron;
const path = require("path");
const TimerTray = require("./timer_tray");
const MainWindow = require("./browser_window");
let mainWindow;
let tray;

app.on("ready", () => {
    //app.dock.hide(); //not working in win
    mainWindow = new MainWindow();
    mainWindow.loadURL(`file://${__dirname}/src/index.html`);

    const loadIcon =
        process.platform === "win32" ? "windows-icon.png" : "iconTemplate.png";
    const loadPath = path.join(__dirname, `./src/assets/${loadIcon}`);

    tray = new TimerTray(loadPath, mainWindow);
});

app.on("closed", () => {
    app.quit();
});

ipcMain.on("update-timer", (event, timeLeft) => {
    tray.setTitle(timeLeft);
});

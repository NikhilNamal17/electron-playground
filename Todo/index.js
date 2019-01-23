const electron = require("electron");
const { app, BrowserWindow, Menu, ipcMain } = electron;

let mainWindow;
let addWindow;

app.on("ready", () => {
    mainWindow = new BrowserWindow({});
    mainWindow.loadURL(`file://${__dirname}/main.html`);
    mainWindow.on("closed", () => app.quit());
    const mainMenu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(mainMenu);
});

function addTodo() {
    addWindow = new BrowserWindow({
        width: 300,
        height: 200,
        title: "Add a New Todo"
    });
    addWindow.loadURL(`file://${__dirname}/addTodo.html`);
    addWindow.on("closed", () => (addWindow = null));
}

function clearTodo() {
    mainWindow.webContents.send("clear:todo");
}

ipcMain.on("newtodo", (event, todo) => {
    mainWindow.webContents.send("newtodo", todo);
    addWindow.close();
});

const menuTemplate = [
    {
        label: "File",
        submenu: [
            {
                label: "Add Todo",
                click() {
                    addTodo();
                }
            },
            {
                label: "Clear todo",
                accelerator:
                    process.platform === "darwin" ? "Command+C" : "Ctrl+C",
                click() {
                    clearTodo();
                }
            },
            {
                label: "Quit",
                click() {
                    app.quit();
                },
                accelerator:
                    process.platform === "darwin" ? "Command+Q" : "Ctrl+Q"
            }
        ]
    }
];

if (process.platform === "darwin") {
    menuTemplate.unshift({});
}

if (process.env.NODE_ENV !== "production") {
    menuTemplate.push({
        label: "View",
        submenu: [
            {
                label: "Toggle Dev Tools",
                click(item, focusedWindow) {
                    focusedWindow.toggleDevTools();
                },
                accelerator:
                    process.platform === "darwin"
                        ? "Command+Alt+i"
                        : "Ctrl+Shift+i"
            },
            { role: "reload" }
        ]
    });
}

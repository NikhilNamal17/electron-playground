const electron = require("electron");
const { Tray, app, Menu } = electron;

class TimerTray extends Tray {
    constructor(loadPath, mainWindow) {
        super(loadPath);
        this.setToolTip("Timer App");
        this.mainWindow = mainWindow;
        this.on("click", this.onClick.bind(this));
        this.on("right-click", this.onRightClick.bind(this));
    }
    onClick(event, bounds) {
        const { x, y } = bounds;
        const { height, width } = this.mainWindow.getBounds();
        const yPos = process.platform === "darwin" ? y : y - height;

        if (this.mainWindow.isVisible()) {
            this.mainWindow.hide();
        } else {
            this.mainWindow.setBounds({
                x: x - width / 2,
                y: yPos,
                height,
                width
            });
            this.mainWindow.show();
        }
    }

    onRightClick() {
        const menuConfig = Menu.buildFromTemplate([
            {
                label: "Quit",
                click() {
                    app.quit();
                }
            }
        ]);
        this.popUpContextMenu(menuConfig);
    }
}

module.exports = TimerTray;

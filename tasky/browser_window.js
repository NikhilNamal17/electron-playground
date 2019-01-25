const electron = require("electron");
const { BrowserWindow } = electron;

class MainWindow extends BrowserWindow {
    constructor() {
        super({
            height: 500,
            width: 300,
            frame: false,
            resizable: false,
            show: false,
            webPrefrences: { backgroundThrottling: false } //background stuck of app after blur
        });
        this.on("blur", this.onBlur.bind(this));
    }
    onBlur() {
        this.hide();
    }
}

module.exports = MainWindow;

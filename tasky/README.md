# Task Timer

Desktop tray application which keeps track of your current tasks. You can set a countdown timer on an active tasks and on macOS render the remaining time in the tray.

What I've learned:
- To make a tray application, `BrowserWindow` and `Tray` are used in sync
- `BrowserWindow` takes a configuration object to customize appearance and interactability
- Position `BrowserWindow` via positioning bounds system
  - You can find the x, y coordinates of an onClick event via `bounds`
  - Set `BrowserWindow` position via `setBounds()` method on `BrowserWindow`. Takes a rectangular config object `{x, y, height, width}`
- With ES6 classes, you can create custom objects which extend electron components

### Installation Guide:

`npm install`

Start webpack-dev server (React):

`npm start`

In a new terminal window:

`npm run electron`

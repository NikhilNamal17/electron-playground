# Todo List

Current functionality:
- Add todo
- Clear all todos

Things learnt while creating (in addition to things already learned from the videoInfo app):
* Creating a custom menu bar removes/unbinds all default/core menu actions such as File, Edit, View, Window, Help
* Electron uses a nested menu template configuration which takes an array of objects

Example:
```
const menuTemplate = [
  {
    label: MENU_LABEL,
    submenu: {
      label: SUBMENU_LABEL,
      accelerator: HOTKEYS_GO_HERE,
      click() { ON_CLICK_INSTRUCTION }
    }
  }
]
```

* Methods of Menu API:
  * `const menuWithTemplate = Menu.buildFromTemplate(menuTemplate)`
  * `Menu.setApplicationMenu(menuWithTemplate)`
* Accelerator hotkeys can be used, but should accommodate for both Windows and macOS, or any other platform for x-compatibility

###  Installation Guide:

`npm install`

`npm run electron`

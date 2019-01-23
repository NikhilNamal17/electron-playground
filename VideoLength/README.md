# Video Info

Trying out Electron. Created a small little app which tells you the duration of a video on your hard drive.

Things learnt while making the app:

-   Electron BrowserWindow combines the utility of both Node and Chromium
-   Communication between BrowserWindow and Electron app (ran on Node) is through Inter-process Communication (IPC)
-   Communication is event-based
-   Electron provides API methods to bridge the communication via IPC
-   In BrowserWindow,
    -   Sending an event to app/Node uses `ipcRenderer.send(EVENT_NAME, DATA_TO_SEND)`
    -   Receiving an event from app/Node uses `ipcRenderer.on(EVENT_NAME, DATA_TO_RECEIVE)`
-   In contrast, Electron app (running in Node),
    -   Send events via `ipcMain.send(EVENT_NAME, DATA_TO_SEND)`
    -   Receiving events via `ipcMain.on(EVENT_NAME, DATA_TO_RECEIVE)`

### Installation Guide:

`npm install`

`npm run electron`

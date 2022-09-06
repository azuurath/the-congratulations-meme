const { app, BrowserWindow } = require('electron')

let win = null;

const createWindow = () => {
    win = new BrowserWindow({
        width: 500,
        height:500,
        resizable:false,
        webPreferences: {
            nodeIntegration: true
        }

        
    })

    win.loadFile('index.html')
}

app.whenReady().then(createWindow)
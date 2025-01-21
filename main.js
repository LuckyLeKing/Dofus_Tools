const { app, BrowserWindow } = require('electron');

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 260,
        height: 600,
        webPreferences: {
            nodeIntegration: true, // Permet d'utiliser Node.js dans le front-end
        },
        autoHideMenuBar: true, // Masque la barre d'outils par défaut
    });

    mainWindow.loadFile('index.html'); // Charge la page principale
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

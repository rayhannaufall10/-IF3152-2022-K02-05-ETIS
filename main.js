const electron = require("electron");
const url = require("url");
const path = require("path");
const { app, BrowserWindow, Menu } = electron;
const ipc = electron.ipcMain
const dialog = electron.dialog
require("electron-reload")(__dirname);
let mainWindow;

// Listen for app to be ready
app.on("ready", function () {
  // Create new window
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    },
  });
  // Load HTML into window
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "FE/index.html"),
      protocol: "file:",
      slashes: true,
    })
  );
  mainWindow.maximize();
  // Quit app when closed
  mainWindow.on("closed", function () {
    app.quit();
  });

  // Build menu from template
  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  // Insert menu
  Menu.setApplicationMenu(mainMenu);
});

// Create menu template
const mainMenuTemplate = [
  {
    label: "File",
    submenu: [
      {
        label: "Quit",
        // darwin for Mac,
        aaccelerator: process.platform == "darwin" ? "Command+Q" : "Ctrl+Q",
        click() {
          app.quit();
        },
      },
    ],
  },
  {
    label: "Developer Tools",
    submenu: [
      {
        label: "Toggle DevTools",
        aaccelerator: "Ctrl+Shift+I",
        click(item, focusedWindow) {
          focusedWindow.toggleDevTools();
        },
      },
    ],
  },
];

// If mac, add empty object for remove electron in menu
if (process.platform == "darwin") {
  mainMenuTemplate.unshift({});
}

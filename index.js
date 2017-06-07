'use strict';
import electron from 'electron';
import path from 'path';

const app = electron.app;

require('electron-reload')(__dirname, {
	electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
});

// adds debug features like hotkeys for triggering dev tools and reload
require('electron-debug')();

// prevent window being garbage collected
let mainWindow;

function onClosed() {
	// dereference the window
	// for multiple windows store them in an array
	mainWindow = null;
}

function createMainWindow() {

	electron.BrowserWindow.addDevToolsExtension(
		'/home/m/.config/google-chrome-unstable/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/2.3.1_0/'
	);

	const win = new electron.BrowserWindow({
		width: 340,
		height: 400
	});


	win.loadURL(`file://${__dirname}/index.html`);
	win.on('closed', onClosed);

	return win;
}

app.on('browser-window-created',function(e,window) {
	window.setMenu(null);
});

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (!mainWindow) {
		mainWindow = createMainWindow();
	}
});

app.on('ready', () => {
	mainWindow = createMainWindow();
});

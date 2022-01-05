const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path');
const { calculateFanSpeed } = require('./lib/functions');
const SerialPort = require('serialport');
const Ready = require('@serialport/parser-ready');
const port = new SerialPort('COM6', { baudRate: 9600, autoOpen: false });
const parser = port.pipe(new Ready({ delimiter: 'READY' }))
const nodeIrsdk = require('node-irsdk');

nodeIrsdk.init({
  telemetryUpdateInterval: 200,
  sessionInfoUpdateInterval: 200
})


let isSerialReady = false;
let mainWindow = null;

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload', 'preload.js')

    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'ui', 'index.html'))

  // Open the DevTools.
  mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  let iracing = nodeIrsdk.getInstance();

  iracing.on('Connected', evt => {
    console.log('Connected')
    mainWindow.webContents.send('iracing-connected-message', 'iRacing Connected')

    iracing.on('Telemetry', data => {
      if (isSerialReady) {
        console.log(data.values.Speed, calculateFanSpeed(data.values.Speed, "x^.8"))
        port.write(`${calculateFanSpeed(data.values.Speed, "x^.8")}\n`)
      }
    })


  })

  iracing.on('Disconnected', evt => {
    mainWindow.webContents.send('iracing-disconnected-message', 'ready')
  })

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

port.open(err => {
  if (err) {
    mainWindow.webContents.send('error-message', { message: `Error opening port: ${err.message}` })
    return console.log('Error opening port: ', err.message)
  }
})

parser.on('ready', () => {
  isSerialReady = true;
  mainWindow.webContents.send('serial-ready-message', 'ready')
})

ipcMain.handle('get-ports-message', async (event) => {
  console.log('Getting ports.')
  let ports = await SerialPort.list();
  console.log(ports)
  return ports;
})


ipcMain.handle('set-speed-message', async (event, args) => {
  let speed = args.speed || 0.01; //default to a low speed just in case.
  return port.write(`${calculateFanSpeed(speed)}\n`);
})
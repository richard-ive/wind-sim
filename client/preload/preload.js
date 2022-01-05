const {
    contextBridge,
    ipcRenderer
} = require("electron");

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld(
    "api", {
        getPorts: async (channel, data) => {
            console.log('Fetching ports')
            let ports = await ipcRenderer.invoke('get-ports-message');
            ports.forEach(port => document.querySelector("#portsTable tbody").innerHTML += `<td>${port.manufacturer}</td><td>${port.path}</td>`)
        },
        getSavesPort(){
            ipcRenderer.invoke('get-port-message', {})
        },
        getSavedScaleFunction(){
            ipcRenderer.invoke('get-scale-message', {})
        },
        setSpeed: async (speed) => {
            await ipcRenderer.invoke('set-speed-message', {"speed" : speed }) 
        },
        setPort(){
            ipcRenderer.invoke('set-port-message', {})
        },
        setScaleFunction(scale){
            ipcRenderer.invoke('set-scale-message', {"scale" : scale })
        }
    }
);

// Handle error message from the main process.
ipcRenderer.on('error-message', (event, args) => {
   let errorMessage = args.message
   document.querySelector('body').innerHTML += errorMessage;
})

// Serial ready for comms announcement.
ipcRenderer.on('serial-ready-message', (event, args) => {
    document.querySelector('body').innerHTML += args;
})

// iRacing ready, expect speed to send soon.
ipcRenderer.on('iracing-connected-message', (event, args) => {
    document.querySelector('body').innerHTML += args;
})
var serverIp;
var serverPort;
var title;
var favicon;
var maxPageWidth;
var pageFont;
var pageBackgroundColor;
document.title = (title);
function initServerData(serverIp,serverPort){
    fetch('https://mcapi.us/server/status?ip='+serverIp+'&port='+serverPort)
    .then(response => response.json())
    .then(data => handleServerStatus(data));

function handleServerStatus(data){
    if(data.status=='error'){
        console.log(data.error);
        return false;
    }
    const playerCounter = document.getElementById("player-count");
    playerCounter.innerHTML += data.players.now;
    const status = document.getElementById("status");
    status.innerHTML = data.players.max;
    } 
}
initServerData(serverIp, serverPort);
let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = (favicon);
    document.getElementsByTagName('head')[0].appendChild(link);
let styleOptions = document.querySelector(':root');
    styleOptions.style.setProperty('--MaxPageWidth', maxPageWidth)
    styleOptions.style.setProperty('--PageFont', pageFont)
    styleOptions.style.setProperty('--PageBackgroundColor', pageBackgroundColor)
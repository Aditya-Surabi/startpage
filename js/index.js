function getTime(){
    var time = new Date();
h = time.getHours();
if (h > 12){h = h-12};
m = time.getMinutes();
if (m < 10){m = '0'+m};
document.getElementById('time').innerHTML = h + ':' + m;

// setTimeout(10000);
}
setInterval(getTime,1000);
getTime();
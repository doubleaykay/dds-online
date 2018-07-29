// Get current 24 hour time
var d = new Date();
var time = (d.getHours() * 100) + d.getMinutes();

document.getElementById("test").innerHTML = time;

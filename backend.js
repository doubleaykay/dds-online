// Get current 24 hour time
var d = new Date();
var time = (d.getHours() * 60) + d.getMinutes();

// Take int args and convert to time format
function toTime(h, m) {
  return (h * 60) + m; //return time as int
}

// Check if int is within given range
function between(i, min, max) {//check if int provided is within provided range. https://alvinalexander.com/java/java-method-integer-is-between-a-range
  if (i >= min && i <= max) {
    return true;
  } else {
    return false;
  }
}

// Determine current meal swipe period
if (between(time, toTime(7, 0), toTime(10,59))) {
  document.getElementById("swipePeriod").innerHTML = "Breakfast Swipe ($5.25)";
} else if (between(time, toTime(21, 00), toTime(24,00))) {
  document.getElementById("swipePeriod").innerHTML = "Late Night Swipe ($5.25)";
} else if (between(time, toTime(0, 0), toTime(7, 0))) {
  document.getElementById("swipePeriod").innerHTML = "Late Night Swipe ($5.25)";
} else if (between(time, toTime(11,00),toTime(15,59))) {
  document.getElementById("swipePeriod").innerHTML = "Lunch Swipe ($7.75)";
} else if (between(time, toTime(16,00), toTime(20,59))) {
  document.getElementById("swipePeriod").innerHTML = "Dinner Swipe ($10.00)";
}

// Get day of the week
var weekday = new Array(7);
weekday[0] =  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var day = weekday[d.getDay()];

// Open and Close helper functions
function focoOpen() {
  document.getElementById("focoBadge").innerHTML = "Open";
  document.getElementById("focoBadge").classList.add("badge-success");
  document.getElementById("focoHeading").classList.add("open");
}

function focoClose() {
  document.getElementById("focoBadge").innerHTML = "Closed";
  document.getElementById("focoBadge").classList.add("badge-dark");
  document.getElementById("focoHeading").classList.add("closed");
}

function collisOpen() {
  document.getElementById("collisBadge").innerHTML = "Open";
  document.getElementById("collisBadge").classList.add("badge-success");
  document.getElementById("collisHeading").classList.add("open");
}

function collisClose() {
  document.getElementById("collisBadge").innerHTML = "Closed";
  document.getElementById("collisBadge").classList.add("badge-dark");
  document.getElementById("collisHeading").classList.add("closed");
}

function hopOpen() {
  document.getElementById("hopBadge").innerHTML = "Open";
  document.getElementById("hopBadge").classList.add("badge-success");
  document.getElementById("hopHeading").classList.add("open");
}

function hopClose() {
  document.getElementById("hopBadge").innerHTML = "Closed";
  document.getElementById("hopBadge").classList.add("badge-dark");
  document.getElementById("hopHeading").classList.add("closed");
}

function kafOpen() {
  document.getElementById("kafBadge").innerHTML = "Open";
  document.getElementById("kafBadge").classList.add("badge-success");
  document.getElementById("kafHeading").classList.add("open");
}

function kafClose() {
  document.getElementById("kafBadge").innerHTML = "Closed";
  document.getElementById("kafBadge").classList.add("badge-dark");
  document.getElementById("kafHeading").classList.add("closed");
}

function novackOpen() {
  document.getElementById("novackBadge").innerHTML = "Open";
  document.getElementById("novackBadge").classList.add("badge-success");
  document.getElementById("novackHeading").classList.add("open");
}

function novackClose() {
  document.getElementById("novackBadge").innerHTML = "Closed";
  document.getElementById("novackBadge").classList.add("badge-dark");
  document.getElementById("novackHeading").classList.add("closed");
}

// Is Foco open?
if(day == "Saturday" || day == "Sunday"){
  if (between(time, toTime(8, 00), toTime(14,30))){
    focoOpen();
  } else if (between(time, toTime(17, 00), toTime(20,30))){
    focoOpen();
  } else {
    focoClose();
  }
} else {
  if (between(time, toTime(7, 30), toTime(10,30))){
    focoOpen();
  } else if (between(time, toTime(11, 00), toTime(15,00))){
    focoOpen();
  } else if (between(time, toTime(17, 00), toTime(20,30))){
    focoOpen();
  } else {
    focoClose();
  }
}

// Is Collis open?
if(day == "Saturday" || day == "Sunday"){
  collisClose();
} else {
  if (between(time, toTime(7, 00), toTime(20,00))){
    collisOpen();
  } else {
    collisClose();
  }
}

// Is The Hop open?
if(day == "Saturday" || day == "Sunday") {
    if (between(time, toTime(10, 30), toTime(24, 00))) {
      hopOpen();
    } else {
      hopClose();
    }
} else {
    if (between(time, toTime(8, 00), toTime(24, 00))) {
      hopOpen();
    } else {
      hopClose();
    }
}

// Is KAF open?
if(day == "Saturday" || day == "Sunday"){
  kafClose();
} else {
    if (between(time, toTime(8, 00), toTime(17,00))){
      kafOpen();
    } else {
      kafClose();
    }
}

// Is Novack open?
if (between(time, toTime(00, 00), toTime(2, 00))) {
  novackOpen();
}
else if(day == "Saturday") {
    if (between(time, toTime(13, 00), toTime(24, 00))) {
      novackOpen();
    } else {
      novackClose();
    }
} else if (day == "Sunday") {
    if (between(time, toTime(11, 00), toTime(24, 00))) {
      novackOpen();
    } else {
      novackClose();
    }
} else {
    if (between(time, toTime(7, 30), toTime(24, 00))) {
      novackOpen();
    } else {
      novackClose();
    }
}

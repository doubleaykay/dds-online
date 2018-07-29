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

// Is Foco open?
if(day == "Saturday" || day == "Sunday"){
  if (between(time, toTime(8, 00), toTime(14,30))){
    document.getElementById("focoBadge").innerHTML = "Open";
    document.getElementById("focoBadge").classList.add("badge-success");
    document.getElementById("focoList").classList.add("list-group-item-success");
  } else if (between(time, toTime(17, 00), toTime(20,30))){
    document.getElementById("focoBadge").innerHTML = "Open";
    document.getElementById("focoBadge").classList.add("badge-success");
    document.getElementById("focoList").classList.add("list-group-item-success");
  } else {
    document.getElementById("focoBadge").innerHTML = "Closed";
    document.getElementById("focoBadge").classList.add("badge-dark");
    document.getElementById("focoList").classList.add("list-group-item-dark");
  }
} else {
  if (between(time, toTime(7, 30), toTime(10,30))){
    document.getElementById("focoBadge").innerHTML = "Open";
    document.getElementById("focoBadge").classList.add("badge-success");
    document.getElementById("focoList").classList.add("list-group-item-success");
  } else if (between(time, toTime(11, 00), toTime(15,00))){
    document.getElementById("focoBadge").innerHTML = "Open";
    document.getElementById("focoBadge").classList.add("badge-success");
    document.getElementById("focoList").classList.add("list-group-item-success");
  } else if (between(time, toTime(17, 00), toTime(20,30))){
    document.getElementById("focoBadge").innerHTML = "Open";
    document.getElementById("focoBadge").classList.add("badge-success");
    document.getElementById("focoList").classList.add("list-group-item-success");
  } else {
    document.getElementById("focoBadge").innerHTML = "Closed";
    document.getElementById("focoBadge").classList.add("badge-dark");
    document.getElementById("focoList").classList.add("list-group-item-dark");
  }
}

// Is Collis open?
if(day == "Saturday" || day == "Sunday"){
  document.getElementById("collisBadge").innerHTML = "Closed";
  document.getElementById("collisBadge").classList.add("badge-dark");
  document.getElementById("collisList").classList.add("list-group-item-dark");
} else {
  if (between(time, toTime(7, 00), toTime(20,00))){
    document.getElementById("collisBadge").innerHTML = "Open";
    document.getElementById("collisBadge").classList.add("badge-success");
    document.getElementById("collisList").classList.add("list-group-item-success");
  } else {
    document.getElementById("collisBadge").innerHTML = "Closed";
    document.getElementById("collisBadge").classList.add("badge-dark");
    document.getElementById("collisList").classList.add("list-group-item-dark");
  }
}

// Is The Hop open?
if(day == "Saturday" || day == "Sunday") {
    if (between(time, toTime(10, 30), toTime(24, 00))) {
      document.getElementById("hopBadge").innerHTML = "Open";
      document.getElementById("hopBadge").classList.add("badge-success");
      document.getElementById("hopList").classList.add("list-group-item-success");
    } else {
      document.getElementById("hopBadge").innerHTML = "Closed";
      document.getElementById("hopBadge").classList.add("badge-dark");
      document.getElementById("hopList").classList.add("list-group-item-dark");
    }
} else {
    if (between(time, toTime(8, 00), toTime(24, 00))) {
      document.getElementById("hopBadge").innerHTML = "Open";
      document.getElementById("hopBadge").classList.add("badge-success");
      document.getElementById("hopList").classList.add("list-group-item-success");
    } else {
      document.getElementById("hopBadge").innerHTML = "Closed";
      document.getElementById("hopBadge").classList.add("badge-dark");
      document.getElementById("hopList").classList.add("list-group-item-dark");
    }
}

// Is KAF open?
if(day == "Saturday" || day == "Sunday"){
  document.getElementById("kafBadge").innerHTML = "Closed";
  document.getElementById("kafBadge").classList.add("badge-dark");
  document.getElementById("kafList").classList.add("list-group-item-dark");
} else {
    if (between(time, toTime(8, 00), toTime(17,00))){
      document.getElementById("kafBadge").innerHTML = "Open";
      document.getElementById("kafBadge").classList.add("badge-success");
      document.getElementById("kafList").classList.add("list-group-item-success");
    } else {
      document.getElementById("kafBadge").innerHTML = "Closed";
      document.getElementById("kafBadge").classList.add("badge-dark");
      document.getElementById("kafList").classList.add("list-group-item-dark");
    }
}

// Is Novack open?
if (between(time, toTime(00, 00), toTime(2, 00))) {
  document.getElementById("novackBadge").innerHTML = "Open";
  document.getElementById("novackBadge").classList.add("badge-success");
  document.getElementById("novackList").classList.add("list-group-item-success");
}
else if(day == "Saturday") {
    if (between(time, toTime(13, 00), toTime(24, 00))) {
      document.getElementById("novackBadge").innerHTML = "Open";
      document.getElementById("novackBadge").classList.add("badge-success");
      document.getElementById("novackList").classList.add("list-group-item-success");
    } else {
      document.getElementById("novackBadge").innerHTML = "Closed";
      document.getElementById("novackBadge").classList.add("badge-dark");
      document.getElementById("novackList").classList.add("list-group-item-dark");
    }
} else if (day == "Sunday") {
    if (between(time, toTime(11, 00), toTime(24, 00))) {
      document.getElementById("novackBadge").innerHTML = "Open";
      document.getElementById("novackBadge").classList.add("badge-success");
      document.getElementById("novackList").classList.add("list-group-item-success");
    } else {
      document.getElementById("novackBadge").innerHTML = "Closed";
      document.getElementById("novackBadge").classList.add("badge-dark");
      document.getElementById("novackList").classList.add("list-group-item-dark");
    }
} else {
    if (between(time, toTime(7, 30), toTime(24, 00))) {
      document.getElementById("novackBadge").innerHTML = "Open";
      document.getElementById("novackBadge").classList.add("badge-success");
      document.getElementById("novackList").classList.add("list-group-item-success");
    } else {
      document.getElementById("novackBadge").innerHTML = "Closed";
      document.getElementById("kafBadge").classList.add("badge-dark");
      document.getElementById("novackList").classList.add("list-group-item-dark");
    }
}

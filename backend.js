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

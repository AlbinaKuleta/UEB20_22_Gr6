const time = document.getElementById('time'),
  greeting = document.getElementById('greeting')


// Options
const showAmPm = true;

// Show Time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

     // Set AM or PM
  const amPm = hour >= 12 ? 'PM' : 'AM';

  // Output Time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )} ${showAmPm ? amPm : ''}`;

  setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Background and Greeting
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    // Morning
    greeting.textContent = 'Good morning from OUR TEAM ! Scroll down so you can learn more about us...  ';
    document.ferdeza.style.color = 'black';
  } else if (hour < 18) {
    // Afternoon
    greeting.textContent = 'Good Afternoon from OUR TEAM ! Scroll down so you can learn more about us...';
    document.ferdeza.style.color = 'black';
  } else {
    // Evening
    greeting.textContent = 'Good Evening from OUR TEAM ! Scroll down so you can learn more about us...';
    document.ferdeza.style.color = 'black';
  }
}

// Run
showTime();
setBgGreet();

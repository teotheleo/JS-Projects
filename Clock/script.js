setInterval(setClock, 1000) // Every 1000 miliseconds = 1 second calls setClock

// Get html elements in variables
const hourHand = document.querySelector('[data-hour-hand]'); // set values for the rotation of the hands
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

function setClock() {
    const currentDate = new Date(); //gives us current date
    const secondsRatio = currentDate.getSeconds() / 60; // percentage
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60; // seconds added to minutes
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12; // minutes added to hours
    
    setRotation(secondHand, secondsRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360);
}

setClock()
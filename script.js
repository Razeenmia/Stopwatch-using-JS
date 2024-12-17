let isRunning = false;
let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;

const display = document.getElementById("display");
const startStopBtn = document.getElementById("startStopBtn");
const resetBtn = document.getElementById("resetBtn");

function updateDisplay() {
    const formattedHours = String(hours).padStart(2, "0");
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");
    display.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

function startStopwatch() {
    isRunning = true;
    startStopBtn.textContent = "Stop";
    timer = setInterval(() => {
        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
        }
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
        updateDisplay();
    }, 1000);
}

function stopStopwatch() {
    isRunning = false;
    startStopBtn.textContent = "Start";
    clearInterval(timer);
}

function resetStopwatch() {
    if (!isRunning) {
        seconds = 0;
        minutes = 0;
        hours = 0;
        updateDisplay();
    }
}

startStopBtn.addEventListener("click", () => {
    if (isRunning) {
        stopStopwatch();
    } else {
        startStopwatch();
    }
});

resetBtn.addEventListener("click", resetStopwatch);

updateDisplay(); // Initial display setup

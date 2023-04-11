import { indicators } from "../js/refs.js";
import { convertMs, updateClockface } from "./helpers/timeConverter.js";

// initial state
let intervalId = null;
let startTime = 0;
let currentTime = 0;
let pauseTime = 0;
export let stopwatchTime = 0;

// flags
let firstStart = true;

// start timer
export function timerStart() {
  startTime = Date.now();
  pauseTime = Date.now() - stopwatchTime;

  intervalId = setInterval(() => {
    if (!firstStart) {
      startTime = pauseTime;
    }

    currentTime = Date.now();
    stopwatchTime = currentTime - startTime;

    updateClockface(convertMs(stopwatchTime));
  }, 10);
}

// pause timer
export function timerPause() {
  clearInterval(intervalId);
  firstStart = false;
}

// reset timer
function timerReset() {
  indicators.hoursGone.textContent = "00";
  indicators.minutesGone.textContent = "00";
  indicators.secondsGone.textContent = "00";
  indicators.millisecondsGone.textContent = "00";

  clearInterval(intervalId);
  firstStart = true;
}

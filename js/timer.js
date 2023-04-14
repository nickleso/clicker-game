import { load, save } from "./helpers/localStorage.js";
import { convertMs } from "./helpers/timeConverter.js";
import { updateBestClockface, updateClockface } from "./updateInterface.js";

// initial state
let intervalId = null;
let startTime = 0;
let currentTime = 0;
let pauseTime = 0;
let recordTime = 0;
export let stopwatchTime = 0;

// flags
let firstStart = true;
let firstLocalTry = true;
const isRecordExists = load("record");

// load records from local storage
localRecordChecker();
export function localRecordChecker() {
  if (isRecordExists) {
    recordTime = isRecordExists.recordTime;
    updateBestClockface(convertMs(recordTime));
  }
}

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
export function timerReset() {
  clearInterval(intervalId);

  if (firstLocalTry && !isRecordExists) {
    recordTime = stopwatchTime;
    save("record", { recordTime });
    updateBestClockface(convertMs(stopwatchTime));
  }

  if (stopwatchTime < recordTime) {
    recordTime = stopwatchTime;
    save("record", { recordTime });
    updateBestClockface(convertMs(recordTime));
  }

  firstStart = true;
  firstLocalTry = false;
}

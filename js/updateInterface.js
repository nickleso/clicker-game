import { indicators } from "./refs.js";

// update timer interface
export function updateClockface({ minutes, seconds, trimedMsec }) {
  indicators.minutesGone.textContent = minutes;
  indicators.secondsGone.textContent = seconds;
  indicators.millisecondsGone.textContent = trimedMsec;
}

export function updateMessageClockface({ minutes, seconds, trimedMsec }) {
  const messageMinutesGone = document.querySelector("[data-mes-minutes]");
  const messageSecondsGone = document.querySelector("[data-mes-seconds]");
  const messageMillisecondsGone = document.querySelector(
    "[data-mes-milliseconds]"
  );

  messageMinutesGone.textContent = minutes;
  messageSecondsGone.textContent = seconds;
  messageMillisecondsGone.textContent = trimedMsec;
}

export function updateBestClockface({ minutes, seconds, trimedMsec }) {
  indicators.bestMinutesGone.textContent = minutes;
  indicators.bestSecondsGone.textContent = seconds;
  indicators.bestMillisecondsGone.textContent = trimedMsec;
}

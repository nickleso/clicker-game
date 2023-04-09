import { appendTimePoints } from "./addPointMarkup.js";
import { indicators } from "./refs.js";

export const convertMs = (ms) => {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );
  const milliseconds = addLeadingZero(
    Math.floor(((((ms % day) % hour) % minute) % second) / 1)
  );

  // milliseconds converter
  let str = milliseconds.toString();
  let trimedMsec = str.substring(0, 2);
  trimedMsec = parseInt(trimedMsec);

  return { days, hours, minutes, seconds, trimedMsec, ms };
};

function addLeadingZero(value) {
  return String(value).padStart(2, "0");
}

// update interface
export function updateClockface({ days, hours, minutes, seconds, trimedMsec }) {
  // indicators.daysGone.textContent = days;
  indicators.hoursGone.textContent = hours;
  indicators.minutesGone.textContent = minutes;
  indicators.secondsGone.textContent = seconds;
  indicators.millisecondsGone.textContent = trimedMsec;
}

export function updatePointface({
  days,
  hours,
  minutes,
  seconds,
  trimedMsec,
  ms,
}) {
  appendTimePoints({ days, hours, minutes, seconds, trimedMsec, ms });
}

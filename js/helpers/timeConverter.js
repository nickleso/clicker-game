import { addLeadingZero } from "./addLeadingZero.js";

// time converter
export const convertMs = (ms) => {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

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

  return { minutes, seconds, trimedMsec, ms };
};

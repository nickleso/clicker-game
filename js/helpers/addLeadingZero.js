// add zero to timer if number less than 10
export function addLeadingZero(value) {
  return String(value).padStart(2, "0");
}

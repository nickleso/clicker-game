// container refs
export const registrationContainer = document.getElementById("container");
export const gameSection = document.getElementById("game");
export const gameField = document.getElementById("game-field");

// header game stats refs
export const gameInfo = {
  playerName: document.getElementById("player-name"),
  hits: document.getElementById("clicks"),
  currentLevel: document.getElementById("current-level"),
  currentEnemyHp: document.getElementById("current-hp"),
};

// timer refs
export const indicators = {
  minutesGone: document.querySelector("[data-minutes]"),
  secondsGone: document.querySelector("[data-seconds]"),
  millisecondsGone: document.querySelector("[data-milliseconds]"),

  bestMinutesGone: document.querySelector("[data-best-minutes]"),
  bestSecondsGone: document.querySelector("[data-best-seconds]"),
  bestMillisecondsGone: document.querySelector("[data-best-milliseconds]"),
};

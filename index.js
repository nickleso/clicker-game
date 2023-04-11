import { load } from "./js/helpers/localStorage.js";
import { stats } from "./js/gameLevelStats.js";
import { onRegisterFormSubmit } from "./js/userRegistration.js";
import { registrationMarkup } from "./js/markups/registrationMarkup.js";

import {
  markupLevel1,
  markupLevel2,
  markupLevel3,
  markupLevel4,
} from "./js/markups/gameMarkup.js";

import {
  registrationContainer,
  gameField,
  gameInfo,
  gameSection,
} from "./js/refs.js";
import { messagesMarkup } from "./js/markups/messagesMarkup.js";
import { stopwatchTime, timerPause, timerStart } from "./js/timer.js";
import {
  convertMs,
  updateMessageClockface,
} from "./js/helpers/timeConverter.js";

// total clicks and current level
let hits = 0;
let currentLevel = 0;

// game fields
const gameField1 = markupLevel1();
const gameField2 = markupLevel2();
const gameField3 = markupLevel3();
const gameField4 = markupLevel4();

// check user registration
userRegistrationChecker();

export function userRegistrationChecker() {
  const isUserExists = load("user");

  if (isUserExists) {
    gameSection.style.display = "block";
    gameInfo.playerName.textContent = isUserExists.name;

    // if user registred start the game
    appendGameField(gameField1);
    timerStart();
    return;
  }

  // else - register user
  registrationContainer.insertAdjacentHTML("beforeend", registrationMarkup());

  const register = document.getElementById("register-form");
  register.addEventListener("submit", onRegisterFormSubmit);
}

// game field render
function appendGameField(markup) {
  // level 1
  gameField.insertAdjacentHTML("beforeend", markup);
  const buttonClicker = document.querySelectorAll("[data-clicker]");

  buttonClicker.forEach((button) => {
    button.addEventListener("click", onButtonClickerClick);
  });
}

// button click counter
function onButtonClickerClick(event) {
  event.target.className = "clicker-button-clicked";

  hits += 1;
  gameInfo.hits.textContent = hits;
  gameConditionsChecker();
}

// messages between levels and start of a new level
function appendGameMessageAndStartNextLevel(prevLevel, hits, stopwatchTime) {
  timerPause();
  gameField.insertAdjacentHTML(
    "beforeend",
    messagesMarkup(prevLevel, hits, stopwatchTime)
  );
  updateMessageClockface(convertMs(stopwatchTime));

  const messageButton = document.getElementById("message-button");
  messageButton.addEventListener("click", onGoNextMessageButtonClick);
}

//  render game field of the next level
function onGoNextMessageButtonClick() {
  gameField.innerHTML = "";
  timerStart();

  if (currentLevel === 2) {
    appendGameField(gameField1);
    appendGameField(gameField2);
    return;
  }

  if (currentLevel === 3) {
    return appendGameField(gameField3);
  }

  if (currentLevel === 4) {
    appendGameField(gameField1);
    appendGameField(gameField2);
    appendGameField(gameField4);
    return;
  }

  if (currentLevel === 5) {
    appendGameField(gameField1);
    appendGameField(gameField2);
    appendGameField(gameField3);
    return;
  }
}

// game conditions
function gameConditionsChecker() {
  // level 2
  if (hits === stats[1].health) {
    gameInfo.currentLevel.textContent = stats[2].level;
    gameInfo.currentEnemyHp.textContent = stats[2].health;

    currentLevel = stats[2].level;
    gameField.innerHTML = "";
    appendGameMessageAndStartNextLevel(stats[1].level, hits, stopwatchTime);
    return;
  }

  // level 3
  if (hits - stats[2].difference === stats[2].health) {
    gameInfo.currentLevel.textContent = stats[3].level;
    gameInfo.currentEnemyHp.textContent = stats[3].health;

    currentLevel = stats[3].level;
    gameField.innerHTML = "";
    appendGameMessageAndStartNextLevel(stats[2].level, hits, stopwatchTime);
    return;
  }

  // level 4
  if (hits - stats[3].difference === stats[3].health) {
    alert("Level 3 completed!");
    gameInfo.currentLevel.textContent = stats[4].level;
    gameInfo.currentEnemyHp.textContent = stats[4].health;

    currentLevel = stats[4].level;
    gameField.innerHTML = "";
    appendGameMessageAndStartNextLevel(stats[3].level, hits, stopwatchTime);
    return;
  }

  // level 5
  if (hits - stats[4].difference === stats[4].health) {
    gameInfo.currentLevel.textContent = stats[5].level;
    gameInfo.currentEnemyHp.textContent = stats[5].health;

    currentLevel = stats[5].level;
    gameField.innerHTML = "";
    appendGameMessageAndStartNextLevel(stats[4].level, hits, stopwatchTime);
    return;
  }

  // game over
  if (hits - stats[5].difference === stats[5].health) {
    alert("Level 5 completed! Game finished!");
    return;
  }
}

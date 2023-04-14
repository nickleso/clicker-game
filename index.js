import {
  registrationContainer,
  gameField,
  gameInfo,
  gameSection,
} from "./js/refs.js";

import { load } from "./js/helpers/localStorage.js";
import { stats } from "./js/gameLevelStats.js";
import { onRegisterFormSubmit } from "./js/userRegistration.js";

import { registrationMarkup } from "./js/markups/registrationMarkup.js";
import { gameLevels } from "./js/markups/gameMarkup.js";
import {
  finalMessagesMarkup,
  messagesMarkup,
} from "./js/markups/messagesMarkup.js";

import {
  stopwatchTime,
  timerPause,
  timerReset,
  timerStart,
} from "./js/timer.js";
import { convertMs } from "./js/helpers/timeConverter.js";
import { updateMessageClockface } from "./js/updateInterface.js";

import { onGoNextMessageButtonClick } from "./js/nextLevelsRender.js";

// total clicks and current level
let hits = 0;
export let currentLevel = 0;

// check user registration
userRegistrationChecker();

export function userRegistrationChecker() {
  const isUserExists = load("user");

  if (isUserExists) {
    gameSection.style.display = "block";
    gameInfo.playerName.textContent = isUserExists.name;

    // if user registred start the game
    appendGameField(gameLevels.gameLevel1);
    timerStart();
    return;
  }

  // else - register user
  registrationContainer.insertAdjacentHTML("beforeend", registrationMarkup());

  const register = document.getElementById("register-form");
  register.addEventListener("submit", onRegisterFormSubmit);
}

// level 1 game field render and watch for clicks
export function appendGameField(markup) {
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
  event.target.disabled = true;

  setTimeout(() => {
    event.target.style.display = "none";
  }, 2000);

  hits += 1;
  gameInfo.hits.textContent = hits;

  const hitBang = new Audio();
  hitBang.src = "./assets/audio/explosion-distant.mp3";
  hitBang.play();

  gameConditionsChecker();
}

// messages between levels and start of a new level
function appendGameMessageAndStartNextLevel(prevLevel, hits) {
  timerPause();
  gameField.insertAdjacentHTML("beforeend", messagesMarkup(prevLevel, hits));
  updateMessageClockface(convertMs(stopwatchTime));

  const messageButton = document.getElementById("message-button");
  messageButton.addEventListener("click", onGoNextMessageButtonClick);
}

// game conditions
function gameConditionsChecker() {
  // level 2
  if (hits === stats[1].health) {
    gameInfo.currentLevel.textContent = stats[2].level;
    gameInfo.currentEnemyHp.textContent = stats[2].health;

    currentLevel = stats[2].level;
    gameField.innerHTML = "";
    appendGameMessageAndStartNextLevel(stats[1].level, hits);
    return;
  }

  // level 3
  if (hits - stats[2].difference === stats[2].health) {
    gameInfo.currentLevel.textContent = stats[3].level;
    gameInfo.currentEnemyHp.textContent = stats[3].health;

    currentLevel = stats[3].level;
    gameField.innerHTML = "";
    appendGameMessageAndStartNextLevel(stats[2].level, hits);
    return;
  }

  // level 4
  if (hits - stats[3].difference === stats[3].health) {
    gameInfo.currentLevel.textContent = stats[4].level;
    gameInfo.currentEnemyHp.textContent = stats[4].health;

    currentLevel = stats[4].level;
    gameField.innerHTML = "";
    appendGameMessageAndStartNextLevel(stats[3].level, hits);
    return;
  }

  // level 5
  if (hits - stats[4].difference === stats[4].health) {
    gameInfo.currentLevel.textContent = stats[5].level;
    gameInfo.currentEnemyHp.textContent = stats[5].health;

    currentLevel = stats[5].level;
    gameField.innerHTML = "";
    appendGameMessageAndStartNextLevel(stats[4].level, hits);
    return;
  }

  // game over
  if (hits - stats[5].difference === stats[5].health) {
    timerPause();
    gameField.insertAdjacentHTML(
      "beforeend",
      finalMessagesMarkup(stats[5].level, hits)
    );
    updateMessageClockface(convertMs(stopwatchTime));

    const finalMessageButton = document.getElementById("final-message-button");
    finalMessageButton.addEventListener(
      "click",
      onFinalMessageButtonClickAndReset
    );
    return;
  }
}

// reset game
function onFinalMessageButtonClickAndReset() {
  gameField.innerHTML = "";
  hits = 0;
  currentLevel = 0;

  gameInfo.hits.textContent = hits;
  gameInfo.currentLevel.textContent = stats[1].level;
  gameInfo.currentEnemyHp.textContent = stats[1].health;

  timerReset();
  userRegistrationChecker();
}

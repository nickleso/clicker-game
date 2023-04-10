import { load } from "./js/localStorage.js";
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

// total clicks
let hits = 0;

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
    return gameStart();
  }

  registrationContainer.insertAdjacentHTML("beforeend", registrationMarkup());

  const register = document.getElementById("register-form");
  register.addEventListener("submit", onRegisterFormSubmit);
}

// game start
function gameStart() {
  appendGameField(gameField1);
}

function appendGameField(markup) {
  // level 1
  gameField.insertAdjacentHTML("beforeend", markup);
  const buttonClicker = document.querySelectorAll("[data-clicker]");

  buttonClicker.forEach((button) => {
    button.addEventListener("click", onButtonClickerClick);
  });
}

// messages between levels and start of a new level
function appendGameMessageAndStartNextLevel(level, hits, levelMarkup) {
  gameField.insertAdjacentHTML(
    "beforeend",
    messagesMarkup(level, hits, "00:20", levelMarkup)
  );
  const messageButton = document.getElementById("message-button");

  messageButton.addEventListener("click", onMessageButtonClick);

  function onMessageButtonClick() {
    gameField.innerHTML = "";
    appendGameField(gameField1);
    appendGameField(gameField2);
  }
}

// button click counter
function onButtonClickerClick(event) {
  event.target.className = "clicker-button-clicked";

  hits += 1;
  gameInfo.hits.textContent = hits;
  gameConditionsChecker();
}

// game logic
function gameConditionsChecker() {
  // level 2
  if (hits === stats[0].health) {
    // alert("Level 1 completed!");
    gameInfo.currentLevel.textContent = stats[1].level;
    gameInfo.currentEnemyHp.textContent = stats[1].health;

    appendGameMessageAndStartNextLevel(stats[1].level, hits, "00:20");

    // appendGameField(gameField1);
    // appendGameField(gameField2);
    return;
  }

  // level 3
  if (hits - stats[1].difference === stats[1].health) {
    alert("Level 2 completed!");
    gameInfo.currentLevel.textContent = stats[2].level;
    gameInfo.currentEnemyHp.textContent = stats[2].health;

    gameField.innerHTML = "";
    appendGameField(gameField3);
    return;
  }

  // level 4
  if (hits - stats[2].difference === stats[2].health) {
    alert("Level 3 completed!");
    gameInfo.currentLevel.textContent = stats[3].level;
    gameInfo.currentEnemyHp.textContent = stats[3].health;

    gameField.innerHTML = "";
    appendGameField(gameField1);
    appendGameField(gameField2);
    appendGameField(gameField4);
    return;
  }

  // level 5
  if (hits - stats[3].difference === stats[3].health) {
    alert("Level 4 completed!");
    gameInfo.currentLevel.textContent = stats[4].level;
    gameInfo.currentEnemyHp.textContent = stats[4].health;

    gameField.innerHTML = "";
    appendGameField(gameField1);
    appendGameField(gameField2);
    appendGameField(gameField3);
    return;
  }

  // game over
  if (hits - stats[4].difference === stats[4].health) {
    alert("Level 5 completed! Game finished!");

    return;
  }
}

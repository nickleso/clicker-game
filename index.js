import { stats } from "./js/gameLevelStats.js";
import { addMarkupLevel1 } from "./js/gameMarkup.js";
import { load } from "./js/localStorage.js";
import { gameField, gameInfo, register } from "./js/refs.js";
import { onRegisterFormSubmit } from "./js/userRegistration.js";

// user registration
register.addEventListener("submit", onRegisterFormSubmit);

// player name
const savedUser = load("user");
const player = savedUser ? savedUser.name : "Player";
gameInfo.playerName.textContent = player;

// total clicks
let hits = 0;

// render game field
const clickers = [0];
// const field1 = addMarkupLevel1();

appendGameField(clickers);

export function appendGameField(clickers) {
  gameField.insertAdjacentHTML("beforeend", addMarkupLevel1(clickers));

  // button click counter
  const buttonClicker = document.querySelectorAll("[data-clicker]");

  buttonClicker.forEach((button) => {
    button.addEventListener("click", onButtonClickerClick);
  });
}

function onButtonClickerClick(event) {
  console.dir(event.target);

  console.log(event.target.className);
  event.target.className = "clicker-button-clicked";

  hits += 1;
  gameInfo.hits.textContent = hits;
  gameConditionsChecker();
}

// game logic
function gameConditionsChecker() {
  console.log(hits);
  // level 1
  if (hits === stats[0].health) {
    alert("Level 1 completed!");
    gameInfo.currentLevel.textContent = stats[1].level;
    gameInfo.currentEnemyHp.textContent = stats[1].health;

    // appendGameField([1, 2]);
  }

  // level 2
  if (hits - stats[1].difference === stats[1].health) {
    alert("Level 2 completed!");
    gameInfo.currentLevel.textContent = stats[2].level;
    gameInfo.currentEnemyHp.textContent = stats[2].health;
  }

  // level 3
  if (hits - stats[2].difference === stats[2].health) {
    alert("Level 3 completed!");
    gameInfo.currentLevel.textContent = stats[3].level;
    gameInfo.currentEnemyHp.textContent = stats[3].health;
  }

  // level 4
  if (hits - stats[3].difference === stats[3].health) {
    alert("Level 4 completed!");
    gameInfo.currentLevel.textContent = stats[4].level;
    gameInfo.currentEnemyHp.textContent = stats[4].health;
  }

  // level 5
  if (hits - stats[4].difference === stats[4].health) {
    alert("Level 5 completed! Game finished!");

    // finish game here
  }
}

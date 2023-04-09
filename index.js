import { load } from "./js/localStorage.js";
import { buttonClicker, gameInfo, register } from "./js/refs.js";
import { onRegisterFormSubmit } from "./js/userRegistration.js";

// game info in header
const savedUser = load("user");
const player = savedUser ? savedUser.name : "Player";
let clicks = 0;
let currentLevel = 1;
let currentHealth = 5;

gameInfo.playerName.textContent = player;

// user registration
register.addEventListener("submit", onRegisterFormSubmit);

// button click counter
buttonClicker.forEach((button) => {
  button.addEventListener("click", onButtonClickerClick);
});

function onButtonClickerClick(event) {
  console.log("click:", event.target.textContent);

  clicks += 1;
  gameInfo.clicks.textContent = clicks;
}

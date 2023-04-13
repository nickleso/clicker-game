import { appendGameField, currentLevel } from "../index.js";
import { timerStart } from "./timer.js";
import { gameField } from "./refs.js";

import { gameLevels } from "./markups/gameMarkup.js";

//  render game field of the next level
export function onGoNextMessageButtonClick() {
  gameField.innerHTML = "";
  timerStart();

  if (currentLevel === 2) {
    appendGameField(gameLevels.gameLevel1);
    appendGameField(gameLevels.gameLevel2);
    return;
  }

  if (currentLevel === 3) {
    return appendGameField(gameLevels.gameLevel3);
  }

  if (currentLevel === 4) {
    appendGameField(gameLevels.gameLevel1);
    appendGameField(gameLevels.gameLevel2);
    appendGameField(gameLevels.gameLevel4);
    return;
  }

  if (currentLevel === 5) {
    appendGameField(gameLevels.gameLevel1);
    appendGameField(gameLevels.gameLevel2);
    appendGameField(gameLevels.gameLevel3);
    return;
  }
}

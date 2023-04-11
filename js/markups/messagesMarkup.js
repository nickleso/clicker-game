export function messagesMarkup(level, hits) {
  return `<div class="message">
          <p>Level ${level} completed!</p>
          <p>Hits: ${hits}</p>
          <ul class="timer">
                <li class="field">
                  <span class="label timer__attributes">Total ime:</span>
                </li>
                <li class="field">
                  <span class="value" data-mes-minutes>00</span>
                  <span class="label timer__attributes">min</span>
                </li>
                <li class="field">
                  <span class="value" data-mes-seconds>00</span>
                  <span class="label timer__attributes">sec</span>
                </li>
                <li class="field">
                  <span class="value" data-mes-milliseconds>00</span>
                  <span class="label timer__attributes">ms</span>
                </li>
              </ul>
          <p>More enemy planes on a horizont!</p>
          <button type="button" id="message-button">Go to the next battle!</button>
        </div>`;
}

export function finalMessagesMarkup(level, hits, totalTime) {
  return `<div class="message">
          <p>Level ${level} completed!</p>
          <p>You succesfully finished the game!</p>
          <p>Total hits: ${hits}</p>
          <p>totla time: ${time}</p>
          <p>More enemy planes on a horizont!</p>
          <button type="button" id="message-button">Great!</button>
        </div>`;
}

export function welcomelMessagesMarkup() {
  return `<div class="message">
          <p>Level ${level} completed!</p>
          <p>You succesfully finished the game!</p>
          <p>Total hits: ${hits}</p>
          <p>totla time: ${time}</p>
          <p>More enemy planes on a horizont!</p>
          <button type="button" id="message-button">Great!</button>
        </div>`;
}

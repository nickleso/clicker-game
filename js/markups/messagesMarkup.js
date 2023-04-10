export function messagesMarkup(level, hits, time) {
  return `<div>
          <p>Level ${level || 0} completed!</p>
          <p>Hits: ${hits || 0}</span></p>
          <p>Time: ${time || 0}</span></p>
          <p>More enemy planes on a horizont!</p>
          <button type="button" id="message-button">Go to the next battle!</button>
        </div>`;
}

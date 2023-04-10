export function registrationMarkup() {
  return `<section class="register" id="register-section">
          <h1 class="title">Wellcome to Anti-Aircraft Gunner The Game!</h1>
           <form class="form" id="register-form">
            <p class="form-title">Create new player to enter the game!</p>
            <label class="label-name"
              >Your name
              <input
                type="text"
                placeholder="nickname"
                class="input-name"
                name="name"
                autofocus
                autocomplete="off"
              />
            </label>
            <label class="label-email"
              >Your email
              <input
                type="email"
                placeholder="email"
                class="input-email"
                name="email"
                autocomplete="off"
              />
            </label>
            <button type="submit" class="form-button">Create player and start the game!</button>
          </form>
        </section>`;
}

// registration form for new user
export function registrationMarkup() {
  return `<div class="register-background">
          <section class="register" id="register-section">
          <h1 class="register-title">Wellcome to </br> AA Gunner The Game!</h1>
           <form class="form" id="register-form">
            <p class="form-title">Create new player to enter the game!</p>
            <label class="form-label"
              >Name
              <input
                type="text"
                placeholder="nickname"
                class="form-input"
                name="name"
                autofocus
                autocomplete="off"
                pattern="[a-zA-Z][a-zA-Z0-9-_.\s]{3,10}"
                title="Only letters (either case), numbers, hyphens, underscores, and periods. The username must start with a letter and must be between 3 and 10 characters long."
            required
              />
            </label>
            <label class="form-label"
              >Email
              <input
                type="email"
                placeholder="email"
                class="form-input"
                name="email"
                autocomplete="off"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                title="example: mymail@mail.com"
                required
              />
            </label>
            <button type="submit" class="button">Create player and start the game!</button>
          </form>
          </div>
        </section>`;
}

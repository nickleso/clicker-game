import { userRegistrationChecker } from "../index.js";
import { save } from "./helpers/localStorage.js";
import { registrationContainer } from "./refs.js";

export function onRegisterFormSubmit(event) {
  event.preventDefault();
  const form = event.target;

  const name = form.elements.name.value.trim();
  const email = form.elements.email.value.trim();

  if (name === "" || email === "") {
    return alert("Please, enter your name and email.");
  }

  save("user", { name, email });

  userRegistrationChecker();

  registrationContainer.innerHTML = "";
}

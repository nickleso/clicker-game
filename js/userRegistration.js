import { save } from "./localStorage.js";
import { gameInfo } from "./refs.js";

export function onRegisterFormSubmit(event) {
  event.preventDefault();
  const form = event.target;

  const name = form.elements.name.value.trim();
  const email = form.elements.email.value.trim();

  if (name === "" || email === "") {
    return alert("Please, enter your name and email.");
  }

  save("user", { name, email });

  // зразу викликати зміну імені в хедері, але якщо хедер буде наступним вікном то не треба
  // gameInfo.playerName.textContent = player;
}

import { loadHome } from "./home";
import { loadMenu } from "./menu";
import { loadContact } from "./contact";

export function createNav() {
  const tabs = ["Home", "Menu", "Contact"];

  const nav = document.createElement("nav");
  const ul = document.createElement("ul");

  for (let tabName of tabs) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = tabName;
    li.appendChild(a);

    li.addEventListener("click", () => navigate(tabName));
    ul.append(li);
  }

  nav.appendChild(ul);

  return nav;
}

function navigate(destination) {
  const navOptions = [loadHome, loadMenu, loadContact];
  for (let option of navOptions) {
    if (option.name === `load${destination}`) {
      option();
      break;
    }
  }
}

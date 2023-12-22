import { loadHome } from "../pages/home";
import { loadMenu } from "../pages/menu";
import { loadContact } from "../pages/contact";

export function createNavTabs() {
  const tabs = ["Home", "Menu", "Contact"];

  const nav = document.createElement("nav");
  const ul = document.createElement("ul");

  for (let tabName of tabs) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = tabName;
    a.addEventListener("click", () => navigate(tabName));
    li.appendChild(a);
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

export function clearAllExceptNavTabs(parent) {
  // Collect all elements except navs
  const elementsToRemove = [];
  for (let child of parent.children) {
    if (child.tagName !== "NAV") {
      elementsToRemove.push(child);
    }
  }

  // Remove them
  for (let element of elementsToRemove) {
    parent.removeChild(element);
  }
}

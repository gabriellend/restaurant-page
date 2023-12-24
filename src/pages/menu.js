import { clearAllExceptNavTabs } from "../components/nav";

export function loadMenu() {
  const contentDiv = document.querySelector("#content");

  clearAllExceptNavTabs(contentDiv);

  // Parent div
  const menuDiv = document.createElement("div");

  // Header
  const menuTitle = document.createElement("h1");
  menuTitle.textContent = "The Greatest Restaurant Menu";

  menuDiv.appendChild(menuTitle);
  contentDiv.appendChild(menuDiv);
}

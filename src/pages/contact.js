import { clearAllExceptNavTabs } from "../components/nav";

export function loadContact() {
  const contentDiv = document.querySelector("#content");

  clearAllExceptNavTabs(contentDiv);

  // Parent div
  const contactDiv = document.createElement("div");

  // Header
  const contactTitle = document.createElement("h1");
  contactTitle.textContent = "Contact the Greatest Restaurant";

  contactDiv.appendChild(contactTitle);
  contentDiv.appendChild(contactDiv);
}

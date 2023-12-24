const { unsplashImageUrl } = require("../assets/img-urls");
import { createNavTabs, clearAllExceptNavTabs } from "../components/nav";

export function loadHome() {
  const contentDiv = document.querySelector("#content");
  if (!contentDiv.querySelector("nav")) {
    // Create nav tabs if they don't already exist
    const nav = createNavTabs();
    contentDiv.appendChild(nav);
  } else {
    clearAllExceptNavTabs(contentDiv);
  }

  // Create image
  const img = new Image();
  img.src = unsplashImageUrl;

  // Create header
  const h1 = document.createElement("h1");
  h1.textContent = "The Restaurant";

  // Create description
  const p = document.createElement("p");
  p.textContent = "This is the absolute best restaurant you will ever eat at.";

  // Add everything to the body
  contentDiv.append(img, h1, p);
}

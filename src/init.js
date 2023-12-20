const { unsplashImageUrl } = require("./assets/img-urls");

export function loadPage() {
  const img = new Image();
  img.src = unsplashImageUrl;

  const h1 = document.createElement("h1");
  h1.textContent = "The Greatest Restaurant";

  const p = document.createElement("p");
  p.textContent = "This is the absolute best restaurant you will ever eat at.";

  document.body.append(img, h1, p);
}

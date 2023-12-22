export function loadContact() {
  const contentDiv = document.querySelector("#content");
  for (let child of contentDiv.childNodes) {
    if (!child.matches("nav")) {
      child.remove();
    }
  }
  const contactDiv = document.createElement("div");

  const contactTitle = document.createElement("h1");
  contactTitle.textContent = "Contact the Greatest Restaurant";

  contactDiv.append();
  contentDiv.appendChild(contactDiv);
}

export function loadMenu() {
  const contentDiv = document.querySelector("#content");
  for (let child of contentDiv.childNodes) {
    if (!child.matches("nav")) {
      child.remove();
    }
  }
  const menuDiv = document.createElement("div");

  const menuTitle = document.createElement("h1");
  menuTitle.textContent = "The Greatest Restaurant Menu";

  menuDiv.append();

  contentDiv.appendChild(menuDiv);
}

import { loadHomePage } from "./home";
import { loadMenu } from "./menu";
import { loadContact } from "./contact";

const initializeWebsite = function () {
  const homeButton = document
    .querySelector(".home")
    .addEventListener("click", loadHomePage);

  const menuButton = document
    .querySelector(".main-menu")
    .addEventListener("click", loadMenu);

  const contactButton = document
    .querySelector(".contact")
    .addEventListener("click", loadContact);

  loadHomePage();
};

export { initializeWebsite };

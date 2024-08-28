import imageSrc from "./image.jpg";

// create homepage via JS

// get the main parent div
const contentdiv = document.querySelector("#content");

const createMain = function () {
  // create a div wrapper
  const main = document.createElement("div");
  main.className = "main";
  contentdiv.appendChild(main);

  // create image
  const GOMimage = document.createElement("img");
  GOMimage.src = imageSrc;
  GOMimage.alt = "grumpy old men characters";

  main.appendChild(writeParagraph("We are a collection of grumpsters"));
  main.appendChild(writeParagraph("But we woudln't have it any other way"));
  main.appendChild(GOMimage);
  main.appendChild(writeParagraph("Although maybe with a side of fries"));
};

const writeParagraph = function (text) {
  // create <p> element
  const paragraph = document.createElement("p");
  paragraph.className = "para";
  paragraph.textContent = text;
  return paragraph;
};

export { createMain };

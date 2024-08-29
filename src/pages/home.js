// create homepage via JS

// create event listener for home button

const contentdiv = document.querySelector("#content");

const createMain = function () {
  // clear page
  contentdiv.textContent = "";
  // create a div wrapper
  const main = document.createElement("div");
  main.className = "main";
  contentdiv.appendChild(main);

  // create image
  const khac = document.createElement("img");
  khac.src = "./food_images/khach.jpg"
  khac.alt = "khachapuri";

  // create text relating to image
  main.appendChild(writeParagraph("We do things Georgian style"));
  main.appendChild(
    writeParagraph("...which means you may or may not get what you ordered")
  );
  main.appendChild(khac);
  main.appendChild(writeParagraph("...but look at that khachapuri"));
  main.appendChild(writeParagraph("ps. we don't serve those..."));

  //   // Create contact us link that links to other page
  //   const contactLink = document.createElement("a");
  //   contactLink.href = "#";
  //   contactLink.textContent = "Contact Us";
  //   contactLink.addEventListener("click", () => {
  //     createContactPage();
  //   });
};

const writeParagraph = function (text) {
  // create <p> element
  const paragraph = document.createElement("p");
  paragraph.className = "para";
  paragraph.textContent = text;
  return paragraph;
};

const loadHomePage = function () {
  createMain();
};

export { loadHomePage };

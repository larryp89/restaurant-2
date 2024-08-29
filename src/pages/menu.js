const createMenu = function () {
  // clear page
  const contentdiv = document.querySelector("#content");
  contentdiv.textContent = "";

  // Create h2
  const heading = document.createElement("h2");
  heading.textContent = "Check out our fabulous menu!";
  heading.classList = "menu-h2";
  contentdiv.appendChild(heading);

  // add menu DIV
  const menuDiv = document.createElement("div");
  menuDiv.className = "menu";
  contentdiv.appendChild(menuDiv);
  // add menu items
  menuDiv.appendChild(
    createMenuItem(
      "Meze (£8.20)",
      "What is this even?", "./food_images/meze.jpg"
    )
  );
  menuDiv.appendChild(
    createMenuItem(
      "Charkhlis (£10.20)",
      "It's really good.",
      "./food_images/charkhlis1020.jpeg"
    )
  );
  menuDiv.appendChild(
    createMenuItem(
      "Mexican Potatoes (£6.20)",
      "Otherwise known as 'chips.'",
      "./food_images/mexicanpotatoes7.jpeg"
    )
  );
  menuDiv.appendChild(
    createMenuItem(
      "Blini (£11.80)",
      "Pretty tasty!",
      "./food_images/blini1180.jpeg"
    )
  );
  menuDiv.appendChild(
    createMenuItem(
      "Khinkali (£20.30",
      "Personally, not a fan.",
      "./food_images/khinkali20.jpeg"
    )
  );
  menuDiv.appendChild(
    createMenuItem(
      "Lavraki (£27.50)",
      "Yep, an expensive fish.",
      "./food_images/lavraki2790.jpeg"
    )
  );
};

const createMenuItem = function (name, description, imageURL) {
  const menuItem = document.createElement("div");
  menuItem.className = "menu-item";

  const food = document.createElement("h3");
  food.textContent = name;

  const itemDescription = document.createElement("p");
  itemDescription.textContent = description;

  const foodImage = document.createElement("img");
  foodImage.src = imageURL;
  foodImage.alt = name;
  foodImage.classList = "menu-item-image";

  menuItem.appendChild(food);
  menuItem.appendChild(itemDescription);
  menuItem.appendChild(foodImage);
  return menuItem;
};

const loadMenu = function () {
  createMenu();
};

export { loadMenu };

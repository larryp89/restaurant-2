
const findUs = function () {
  // Clear page
  const contentdiv = document.querySelector("#content");
  contentdiv.textContent = "";

  // Create h2 and contact form
  const findUS = document.createElement("h2");
  findUS.textContent = "You can find us here:";
  findUS.classList = "findus-h2";
  contentdiv.appendChild(findUS);

  const mapLocation = document.createElement("img");
  mapLocation.classList = "map";
  mapLocation.src = "./map_image/map.png"
  mapLocation.alt = "Georgia on a map";
  contentdiv.appendChild(mapLocation);

  // add form message
  const formMessage = document.createElement("p")
  formMessage.textContent = "Or get in touch (we probably won't reply though...)"
  formMessage.classList = "form-message"
  contentdiv.appendChild(formMessage)

  // Create and append the contact form
  const contactForm = createContactForm();
  contentdiv.appendChild(contactForm);
};

const createContactForm = function () {
  const form = document.createElement("form");
  form.className = "contact-form";

  const nameLabel = document.createElement("label");
  nameLabel.textContent = "Name:";
  nameLabel.setAttribute("for", "name");
  form.appendChild(nameLabel);

  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.id = "name";
  nameInput.name = "name";
  form.appendChild(nameInput);

  const emailLabel = document.createElement("label");
  emailLabel.textContent = "Email:";
  emailLabel.setAttribute("for", "email");
  form.appendChild(emailLabel);

  const emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.id = "email";
  emailInput.name = "email";
  form.appendChild(emailInput);

  const messageLabel = document.createElement("label");
  messageLabel.textContent = "Message:";
  messageLabel.setAttribute("for", "message");
  form.appendChild(messageLabel);

  const messageInput = document.createElement("textarea");
  messageInput.id = "message";
  messageInput.name = "message";
  form.appendChild(messageInput);

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = "Send";
  form.appendChild(submitButton);

  return form;
};

const loadContact = function () {
  findUs();
};

export { loadContact };

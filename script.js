// Content

let aboutMeContent = [
  "I'm Adolfo Castro, from Caracas, Venezuela. I'm doing web development and many other computer related stuff.",
  "Currently i'm studying Electrical Engineering at Universidad Central de Venezuela with focus on telecomunications and getting a TSU (Bachelor sort of degree) on Informatic engineering at UNETI.",
  "I enjoy doing Linux ricing (Desktop enviroment modifications), and automating tasks using linux BASH CLI.",
  "My current focus on my programming career is mainly on backend develpment and data analysis with python but i can also do web development using many technologies like vanilla JS with bootstrap and/or Wordpress, and Nodejs environment techs like React and Express",
  "I'm also aviable to learn any other technologies that might be of use like Golang, Rust, etc.",
];

let contactContent = [
  "Currently i have no personal email service running, any request you can send it tho the following e-mail address",
  "adolfo92dev@gmail.com",
];

let portfolioContent = [
  project(
    "Wild magic public",
    "Vue.js app to assist dungeon and dragons 5e masters on creating absurd scenarios, there's 10.000,00 effects and cures",
    "https://adolfo92.github.io/wild-magic-public/",
    "wildmagic.png"
  ),
  project(
    "Tasa oficial BCV",
    "Una API para obtener del Banco Central de Venezuela el cambio de varias monedas",
    "https://github.com/adolfo92/Tasa_Oficial_BCV/tree/main",
    "tasaBCV.png"
  ),
  project(
    "Sketch pad",
    "Project to practice and test window interactivity",
    "https://adolfo92.github.io/Etch-a-Sketch/",
    "paint.png"
  ),
  project(
    "Library",
    "Book data storage app to test data persistance",
    "https://adolfo92.github.io/libraryTOP/",
    "library.png"
  ),
  project(
    "Calculator",
    "Basic calculator app",
    "https://adolfo92.github.io/Calculadora-TOP/",
    "calculator.png"
  ),
  project(
    "Tic-tac-toe",
    "Tic-tac-toe game",
    "https://adolfo92.github.io/Tic-Tac-Toe/",
    "tictactoe.png"
  ),
];

// Mutable secion functions
let sectionField = document.querySelector("section");

function killChilds() {
  while (sectionField.hasChildNodes()) {
    sectionField.removeChild(sectionField.lastChild);
  }
}

// ------------------------ About me field --------------

function paintAboutMe() {
  killChilds();

  for (i = 0; i < aboutMeContent.length; i++) {
    let paragraph = document.createElement("p");
    paragraph.textContent = aboutMeContent[i];

    sectionField.appendChild(paragraph);
  }
}

// ------------------------ Portfolio field ---------------

// Object factory

function project(name, desc, link, pic) {
  let object = {
    name: name,
    description: desc,
    link: link,
    picture: "pictures/" + pic,
  };

  return object;
}

// Project painter functions

function paintObject(object) {
  let containerDiv = document.createElement("div");

  let name = document.createElement("h3");
  name.textContent = object.name;

  let description = document.createElement("p");
  description.textContent = object.description;

  let link = document.createElement("a");
  link.href = object.link;
  link.textContent = "Go to github";

  let picture = document.createElement("img");
  picture.classList.add("projectPicture");
  picture.src = object.picture;
  containerDiv.classList.add("card-body");

  containerDiv.appendChild(name);
  containerDiv.appendChild(description);
  containerDiv.appendChild(link);
  containerDiv.appendChild(picture);

  sectionField.appendChild(containerDiv);
}

function paintAllProjects() {
  killChilds();
  for (i = 0; i < portfolioContent.length; i++) {
    paintObject(portfolioContent[i]);
  }
}

// ------------------------ Contact field ---------------

function paintContact() {
  killChilds();

  for (i = 0; i < contactContent.length; i++) {
    let paragraph = document.createElement("p");
    paragraph.textContent = contactContent[i];

    sectionField.appendChild(paragraph);
  }
}

// ------------------------ Button behavior ---------------

let aboutMeBtn = document.querySelector("#aboutMe");
let portfolioBtn = document.querySelector("#portfolio");
let contactBtn = document.querySelector("#contact");

aboutMeBtn.addEventListener("click", () => {
  aboutMeBtn.classList.add("active");
  portfolioBtn.classList.remove("active");
  contactBtn.classList.remove("active");

  paintAboutMe();
});

portfolioBtn.addEventListener("click", () => {
  aboutMeBtn.classList.remove("active");
  portfolioBtn.classList.add("active");
  contactBtn.classList.remove("active");

  paintAllProjects();
});

contactBtn.addEventListener("click", () => {
  aboutMeBtn.classList.remove("active");
  portfolioBtn.classList.remove("active");
  contactBtn.classList.add("active");

  paintContact();
});

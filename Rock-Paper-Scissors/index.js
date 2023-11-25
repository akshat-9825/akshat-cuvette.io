const getById = (id) => document.getElementById(id);

const items = ["rock", "paper", "scissor"];

window.showRules = () => {
  getById("rules").style.display = "block";
  getById("rules").classList.remove("animate__backOutDown");
  getById("rules").classList.add("animate__fadeInRight");
};

window.closeBtn = () => {
  getById("rules").classList.remove("animate__fadeInRight");
  getById("rules").classList.add("animate__backOutDown");
};

const hideState1 = (item) => {
  const lines = document.querySelectorAll(".line");
  lines.forEach((line) => {
    // line.classList.add("animate__animated", "animate__fadeOut");
    line.style.display = "none";
  });
  for (let i = 0; i < 3; i++) {
    if (i !== item) {
      getById(items[i]).classList.add("animate__animated", "animate__fadeOut");
    }
  }
  getById(items[item]).classList.add("selected");
  getById(items[item]).classList.remove("expand");
  getById(`${items[item]}_id`).style.display = "block";
  getById(`${items[item]}_id`).classList.add(
    "animate__animated",
    "animate__fadeIn"
  );
};
window.selectItem = (item = 0) => {
  hideState1(item);
  if (item === 0) {
    getById("rock").style.transform = "translateX(-100px) translateY(100px)";
  } else if (item === 1) {
    getById("paper").style.transform = "translateX(-345px) translateY(100px)";
  } else {
    getById("scissor").style.transform =
      "translateX(-222.5px) translateY(-100px)";
  }
};

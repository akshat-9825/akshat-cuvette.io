const getById = (id) => document.getElementById(id);

let clickedItem = false;
let playerScore = Number(localStorage.getItem("playerScore")) || 0;
let pcScore = Number(localStorage.getItem("pcScore")) || 0;
getById("player_score").innerText = playerScore;
getById("pc_score").innerText = pcScore;

const items = ["rock", "paper", "scissor"];

const animateCSS = (element, animation, prefix = "animate__") =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = getById(element);
    node.classList.add(`${prefix}animated`, animationName);
    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve("Animation ended");
    }

    node.addEventListener("animationend", handleAnimationEnd, { once: true });
  });

animateCSS("game_container", "fadeIn");
animateCSS("score_container", "fadeIn");
window.showRules = () => {
  getById("rules").style.display = "block";
  animateCSS("rules", "fadeInRight");
};

window.closeBtn = () => {
  animateCSS("rules", "backOutDown").then(() => {
    getById("rules").style.display = "none";
  });
};

const addResultImage = (item = "scissor") => {
  const resultDiv = document.getElementById("result");
  const iconCover = document.createElement("img");
  iconCover.src = `./static/${item}_cover.svg`;
  iconCover.classList.add("icon_cover");

  const iconAbsolute = document.createElement("img");
  iconAbsolute.src = `./static/${item}.svg`;
  iconAbsolute.classList.add("icon", "absolute");

  resultDiv.appendChild(iconCover);
  resultDiv.appendChild(iconAbsolute);
};

const removeResultImage = () => {
  const resultDiv = getById("result");
  const resultIdChild = document.getElementById("result_id");
  for (let child of Array.from(resultDiv.children)) {
    if (child !== resultIdChild) {
      resultDiv.removeChild(child);
    }
  }
};

const hideLines = () => {
  const lines = document.querySelectorAll(".line");
  lines.forEach((line) => {
    line.style.display = "none";
  });
};

const showLines = () => {
  const lines = document.querySelectorAll(".line");
  lines.forEach((line) => {
    line.style.display = "block";
  });
};

const hideState1 = (item) => {
  hideLines();
  for (let i = 0; i < 3; i++) {
    if (i !== item) {
      animateCSS(items[i], "fadeOut")
        .then(() => {
          getById(items[i]).style.visibility = "hidden";
          getById(items[i]).classList.remove("expand");
        })
        .then(() => {
          getById("result_id").style.display = "block";
          getById("pc_choice").style.display = "block";
          animateCSS("result_id", "fadeIn");
          animateCSS("pc_choice", "fadeIn");
        });
    }
  }
  getById(items[item]).classList.remove("expand");
  getById(items[item]).classList.add("selected");
  getById(`${items[item]}_id`).style.display = "block";
  animateCSS(`${items[item]}_id`, "fadeIn");
};

const findWinner = (item) => {
  const randomNumber = Math.floor(Math.random() * 1000) % 3;
  addResultImage(items[randomNumber]);
  if (randomNumber === item) {
    setTimeout(() => {
      getById("result_text").innerHTML = "Tie Up";
      getById("against_pc").style.display = "none";
      getById("result_text_container").style.display = "flex";
      getById("play_again").innerText = "REPLAY";
    }, 1000);
  } else if (
    (randomNumber === 0 && item === 1) ||
    (randomNumber === 1 && item === 2) ||
    (randomNumber === 2 && item === 0)
  ) {
    playerScore += 1;
    setTimeout(() => {
      getById("result_text").innerHTML = "You Win";
      getById("next_box").style.display = "flex";
      getById(items[item]).classList.add("winner_effect");
      getById("result_text_container").style.display = "flex";
      getById("player_score").innerText = playerScore;
      localStorage.setItem("playerScore", playerScore);
      localStorage.setItem("pcScore", pcScore);
    }, 1000);
  } else {
    pcScore += 1;
    setTimeout(() => {
      getById("result_text").innerHTML = "You Lose";
      getById("pc_choice").classList.add("winner_effect");
      getById("result_text_container").style.display = "flex";
      getById("pc_score").innerText = pcScore;
      localStorage.setItem("playerScore", playerScore);
      localStorage.setItem("pcScore", pcScore);
    }, 1000);
  }
};

window.selectItem = (item) => {
  if (!clickedItem) {
    clickedItem = true;
    hideState1(item);
    animateCSS("next_box", "slideInRight");
    if (item === 0) {
      getById("rock").style.transform = "translateX(-125px) translateY(100px)";
    } else if (item === 1) {
      getById("paper").style.transform = "translateX(-370px) translateY(100px)";
    } else {
      getById("scissor").style.transform =
        "translateX(-247.5px) translateY(-100px)";
    }
    findWinner(item);
  }
};

window.playAgain = () => {
  clickedItem = false;
  getById("last_page").style.display = "none";
  getById("score_container").style.display = "flex";
  getById("game_container").style.display = "flex";
  animateCSS("game_container", "fadeIn");
  animateCSS("score_container", "fadeIn");
  getById("result_id").style.display = "none";
  getById("pc_choice").style.display = "none";
  getById("result_text_container").style.display = "none";
  getById("against_pc").style.display = "block";
  getById("next_box").style.display = "none";
  showLines();
  for (let i = 0; i < 3; i++) {
    getById(items[i]).style.transform = "translateX(0px) translateY(0px)";
    getById(items[i]).style.visibility = "visible";
    getById(`${items[i]}_id`).style.display = "none";
    getById(items[i]).classList.add("expand", "cursor");
    getById(items[i]).classList.remove("selected");
    getById(items[i]).classList.remove("winner_effect");
  }
  getById("pc_choice").classList.remove("winner_effect");
  removeResultImage();
};

window.nextBtn = () => {
  getById("last_page").style.display = "flex";
  animateCSS("last_page", "fadeIn");
  getById("score_container").style.display = "none";
  getById("game_container").style.display = "none";
};

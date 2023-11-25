const getById = (id) => document.getElementById(id);

window.showRules = () => {
  getById("rules").style.display = "block";
  // getById("next_box").style.display = "flex";
};

window.closeBtn = () => {
  getById("rules").style.display = "none";
};

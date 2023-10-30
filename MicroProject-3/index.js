import data from "./data.json" assert { type: "json" };

const getById = (id) => document.getElementById(id);

getById("q1").onclick = () => {
  if (getById("a1").innerHTML === "") {
    getById("a1").innerHTML = JSON.stringify(data);
  } else {
    getById("a1").innerHTML = "";
  }
};

getById("q2").onclick = () => {
  if (getById("a2").innerHTML === "") {
    const modifiedArray = data.filter((item) => item.category === "Vegetable");
    getById("a2").innerHTML = JSON.stringify(modifiedArray);
  } else {
    getById("a2").innerHTML = "";
  }
};

getById("q3").onclick = () => {
  if (getById("a3").innerHTML === "") {
    const modifiedArray = data.filter((item) => item.category === "Fruit");
    getById("a3").innerHTML = JSON.stringify(modifiedArray);
  } else {
    getById("a3").innerHTML = "";
  }
};

getById("q4").onclick = () => {
  if (getById("a4").innerHTML === "") {
    const modifiedArray = data.filter((item) => item.category === "Protein");
    getById("a4").innerHTML = JSON.stringify(modifiedArray);
  } else {
    getById("a4").innerHTML = "";
  }
};

getById("q5").onclick = () => {
  if (getById("a5").innerHTML === "") {
    const modifiedArray = data.filter((item) => item.category === "Nuts");
    getById("a5").innerHTML = JSON.stringify(modifiedArray);
  } else {
    getById("a5").innerHTML = "";
  }
};

getById("q6").onclick = () => {
  if (getById("a6").innerHTML === "") {
    const modifiedArray = data.filter((item) => item.category === "Grain");
    getById("a6").innerHTML = JSON.stringify(modifiedArray);
  } else {
    getById("a6").innerHTML = "";
  }
};

getById("q7").onclick = () => {
  if (getById("a7").innerHTML === "") {
    const modifiedArray = data.filter((item) => item.category === "Dairy");
    getById("a7").innerHTML = JSON.stringify(modifiedArray);
  } else {
    getById("a7").innerHTML = "";
  }
};

getById("q8").onclick = () => {
  if (getById("a8").innerHTML === "") {
    const modifiedArray = data.filter((item) => Number(item.calorie) > 100);
    getById("a8").innerHTML = JSON.stringify(modifiedArray);
  } else {
    getById("a8").innerHTML = "";
  }
};

getById("q9").onclick = () => {
  if (getById("a9").innerHTML === "") {
    const modifiedArray = data.filter((item) => Number(item.calorie) < 100);
    getById("a9").innerHTML = JSON.stringify(modifiedArray);
  } else {
    getById("a9").innerHTML = "";
  }
};

getById("q10").onclick = () => {
  if (getById("a10").innerHTML === "") {
    const modifiedArray = data.sort(
      (item1, item2) => item2.protiens - item1.protiens
    );
    getById("a10").innerHTML = JSON.stringify(modifiedArray);
  } else {
    getById("a10").innerHTML = "";
  }
};

getById("q11").onclick = () => {
  if (getById("a11").innerHTML === "") {
    const modifiedArray = data.sort((item1, item2) => item1.cab - item2.cab);
    getById("a11").innerHTML = JSON.stringify(modifiedArray);
  } else {
    getById("a11").innerHTML = "";
  }
};

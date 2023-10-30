const getById = (id) => document.getElementById(id);

window.DoSomething = (x) => {
  if (x === "R") {
    getById("display").innerHTML = "";
    return;
  }
  if (x === "D") {
    const text = getById("display").innerHTML;
    const modifiedText = text.slice(0, text.length - 1);
    getById("display").innerHTML = modifiedText;
    return;
  }
  if (getById("display").innerHTML !== "") {
    getById("display").innerHTML += x;
  } else {
    getById("display").innerHTML = x;
  }
};

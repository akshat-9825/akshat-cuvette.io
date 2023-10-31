const getById = (id) => document.getElementById(id);

const operators = {
  "+": 1,
  "-": 1,
  "/": 1,
  x: 1,
};

const evaluate = (equation) => {
  try {
    const modifiedEquation = equation.replace(/x/g, "*");
    const sanitizedEquation = modifiedEquation.replace(/[^-()\d/*+.]/g, "");
    const result = eval(sanitizedEquation);
    const roundedResult = parseFloat(result.toFixed(3));
    return roundedResult;
  } catch (error) {
    console.error("Error evaluating expression:", error.message);
    return "Error";
  }
};

window.DoSomething = (x) => {
  const text = getById("display").innerHTML;
  if (x === "R") {
    getById("display").innerHTML = "";
    return;
  } else if (x === "D") {
    const modifiedText = text.slice(0, text.length - 1);
    getById("display").innerHTML = modifiedText;
    return;
  } else if (operators[x]) {
    if (operators[text[text.length - 1]]) {
      getById("display").innerHTML = text.slice(0, text.length - 1) + x;
      return;
    }
  } else if (x === ".") {
    if (operators[text[text.length - 1]]) {
      alert("Can't have decimal point after an operator");
      return;
    }
  } else if (x === "=") {
    getById("display").innerHTML = evaluate(text);
    return;
  }
  if (text !== "") {
    getById("display").innerHTML += x;
  } else {
    getById("display").innerHTML = x;
  }
};

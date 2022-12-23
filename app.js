const buttons = document.querySelectorAll("button");
const screenDisplay = document.querySelector(".screen");
let calculation = [];
let accumulativeCalculation;
function calculate(button) {
  console.log(button);
  const value = button.textContent;
  if (value === "CLEAR") {
    calculation = [];
    screenDisplay.textContent = ".";
  } else if (value === "=") {
    screenDisplay.textContent = eval(accumulativeCalculation);
  } else {
    calculation.push(value);
    accumulativeCalculation = calculation.join("");
    screenDisplay.textContent = accumulativeCalculation;
    console.log(calculation);
  }
}
buttons.forEach((button) =>
  button.addEventListener("click", () => calculate(button))
);

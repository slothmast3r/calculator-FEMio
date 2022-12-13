import { useState } from "react";
import "./Calculator.scss";
const calculatorButtons = [
  {
    name: "7",
    type: "number",
    id: "number7",
    className: "number-and-operator",
  },
  {
    name: "8",
    type: "number",
    id: "number8",
    className: "number-and-operator",
  },
  {
    name: "9",
    type: "number",
    id: "number9",
    className: "number-and-operator",
  },
  {
    name: "DEL",
    type: "function",
    id: "del",
    className: "function",
  },
  {
    name: "4",
    type: "number",
    id: "number4",
    className: "number-and-operator",
  },
  {
    name: "5",
    type: "number",
    id: "number5",
    className: "number-and-operator",
  },
  {
    name: "6",
    type: "number",
    id: "number6",
    className: "number-and-operator",
  },
  {
    name: "+",
    type: "operator",
    id: "+",
    className: "number-and-operator",
  },
  {
    name: "1",
    type: "number",
    id: "number1",
    className: "number-and-operator",
  },
  {
    name: "2",
    type: "number",
    id: "number2",
    className: "number-and-operator",
  },
  {
    name: "3",
    type: "number",
    id: "number3",
    className: "number-and-operator",
  },
  {
    name: "-",
    type: "operator",
    id: "-",
    className: "number-and-operator",
  },
  {
    name: ".",
    type: "number",
    id: ".",
    className: "number-and-operator",
  },
  {
    name: "0",
    type: "number",
    id: "0",
    className: "number-and-operator",
  },
  {
    name: "/",
    type: "operator",
    id: "/",
    className: "number-and-operator",
  },
  {
    name: "x",
    type: "operator",
    id: "*",
    className: "number-and-operator",
  },
];

function Calculator() {
  const [displayValue, setDisplayValue] = useState("0");
  const [history, setHistory] = useState(null);
  const [operator, setOperator] = useState(null);
  const [operand, setOperand] = useState(null);
  const [isCleared, setIsCleared] = useState(true);

  // calculator logic goes here...
  function handleNumberClick(number) {
    if (isCleared) {
      setDisplayValue(displayValue === "0" ? number : displayValue + number);
    } else {
      setDisplayValue(number);
      setIsCleared(true);
    }
  }

  function handleOperatorClick(newOperator) {
    const currentValue = parseFloat(displayValue);
    if (operand === null) {
      setOperand(currentValue);
    } else if (operator) {
      const result = operate(operator, operand, currentValue);
      setOperand(result);
      setDisplayValue(String(result));
    }
    setOperator(newOperator);
    setIsCleared(false);
  }
  function operate(operator, a, b) {
    switch (operator) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        return a / b;
      default:
        return null;
    }
  }
  function setTheme(theme) {
    document.documentElement.className = theme;
  }

  function handleClearClick() {
    setDisplayValue("0");
    setOperator(null);
    setOperand(null);
    setIsCleared(true);
  }
  return (
    <div>
      <div>
        <h1>calc</h1>
        <button onClick={() => setTheme("theme1")}>1</button>
        <button onClick={() => setTheme("theme2")}>2</button>
        <button onClick={() => setTheme("theme3")}>3</button>
      </div>
      <div className="display-value">{displayValue}</div>
      <div className="buttons-layout">
        {calculatorButtons.map((item) => (
          <button
            key={item.id}
            className={item.className}
            onClick={() =>
              item.type === "number"
                ? handleNumberClick(item.name)
                : handleOperatorClick(item.id)
            }
          >
            {item.name}
          </button>
        ))}
        <button
          className="last-item function"
          onClick={() => handleClearClick()}
        >
          RESET
        </button>
        <button
          className="last-item result"
          onClick={() => handleOperatorClick("=")}
        >
          =
        </button>
      </div>
    </div>
  );
}
export default Calculator;

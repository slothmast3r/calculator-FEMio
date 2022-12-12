import { useState } from "react";
import "./Calculator.scss"
const calculatorButtons = [
  {
    name: "7",
    type: "number",
    id: "number7",
  },
  {
    name: "8",
    type: "number",
    id: "number8",
  },
  {
    name: "9",
    type: "number",
    id: "number9",
  },
  {
    name: "DEL",
    type: "function",
    id: "del",
  },
  {
    name: "4",
    type: "number",
    id: "number4",
  },
  {
    name: "5",
    type: "number",
    id: "number5",
  },
  {
    name: "6",
    type: "number",
    id: "number6",
  },
  {
    name: "+",
    type: "operator",
    id: "+",
  },
  {
    name: "1",
    type: "number",
    id: "number1",
  },
  {
    name: "2",
    type: "number",
    id: "number2",
  },
  {
    name: "3",
    type: "number",
    id: "number3",
  },
  {
    name: "-",
    type: "operator",
    id: "-",
  },
  {
    name: ".",
    type: "number",
    id: ".",
  },
  {
    name: "0",
    type: "number",
    id: "0",
  },
  {
    name: "/",
    type: "operator",
    id: "/",
  },
  {
    name: "x",
    type: "operator",
    id: "*",
  },
];

function Calculator() {
  const [displayValue, setDisplayValue] = useState("0");
  const [history, setHistory] = useState(null);
  const [operator, setOperator] = useState(null);
  const [operand, setOperand] = useState(null);
  const [isCleared, setIsCleared] = useState(true)

  // calculator logic goes here...
  function handleNumberClick(number) {
    if(isCleared) {
      setDisplayValue(displayValue === "0" ? number : displayValue + number);
    }
    else{
      setDisplayValue(number);
      setIsCleared(true)
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
    setIsCleared(false)
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

  function handleClearClick() {
    setDisplayValue("0");
    setOperator(null);
    setOperand(null);
    setIsCleared(true)
  }
  return (
    <div>
      <div>{displayValue}</div>
      <div className="buttons-layout">
      {calculatorButtons.map((item) => (
        <button
          key={item.id}
          onClick={() =>
            item.type === "number"
              ? handleNumberClick(item.name)
              : handleOperatorClick(item.id)
          }
        >
          {item.name}
        </button>
      ))}
        <button className="last-item" onClick={handleClearClick}>RESET</button>
        <button className="last-item" onClick={handleClearClick}>=</button>
      </div>
    </div>
  );
}
export default Calculator;

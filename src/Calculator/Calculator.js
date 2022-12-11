import { useState } from "react";

function Calculator() {
  const [displayValue, setDisplayValue] = useState("0");
  const [history, setHistory] = useState(null);
  const [operator, setOperator] = useState(null);
  const [operand, setOperand] = useState(null);

  // calculator logic goes here...
    function handleNumberClick(number) {
      setDisplayValue(displayValue === '0' ? number : displayValue + number);
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

  const numberList = [];
  for (let i = 0; i < 10; i++) {
    numberList.push(
      <button key={i+'button'} onClick={() => handleNumberClick(`${i}`)}>{i}</button>
    );
  }
  function handleClearClick() {
    setDisplayValue("0");
    setOperator(null);
    setOperand(null);
  }
  return (
    <div>
      <div>{displayValue}</div>
      {numberList}
      <button onClick={() => handleClearClick()}>AC</button>
      <button onClick={() => handleOperatorClick("+")}>+</button>
      <button onClick={() => handleOperatorClick("-")}>*</button>
      <button onClick={() => handleOperatorClick("/")}>/</button>
      <button onClick={() => handleOperatorClick("*")}>*</button>
      <button onClick={() => handleOperatorClick("=")}>=</button>
    </div>
  );
}
export default Calculator;

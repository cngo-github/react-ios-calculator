import { useState } from "react";
import Display from "../../components/Display/Display";
import Keypad from "../../components/Keypad/Keypad";
import {
  calculate,
  invertOperand,
  operandToPercentage,
  updateOperand,
} from "../../logic/update";

import "./style.scss";

const Calculator = () => {
  const [operandOne, setOperandOne] = useState(".8");
  const [operandOneIsSet, setOperandOneIsSet] = useState(false);
  const [operandTwo, setOperandTwo] = useState("0");
  const [operator, setOperator] = useState("");

  const processInput = (value: string) => {
    const valueNumber = parseInt(value);

    if (isNaN(valueNumber) && value !== ".") {
      return;
    }

    updateOperand(
      value,
      operandOne,
      setOperandOne,
      operandTwo,
      setOperandTwo,
      operator
    );
  };

  const processOperator = (value: string) => {
    if (!value) {
      return;
    }

    if (operator) {
      const result = calculate(operandOne, operandTwo, operator);

      setOperandOne(result.toString());
      setOperandTwo("0");
      setOperator("");
    }

    if (value !== "=") {
      setOperator(value);
    }
  };

  const allClear = () => {
    setOperandOne("0");
    setOperandOneIsSet(false);
    setOperandTwo("0");
    setOperator("");
  };

  const processInversion = () =>
    invertOperand(
      operandOne,
      setOperandOne,
      operandTwo,
      setOperandTwo,
      operator
    );

  const processPercentConversion = () =>
    operandToPercentage(
      operandOne,
      setOperandOne,
      operandTwo,
      setOperandTwo,
      operator
    );

  return (
    <div id="calculator">
      <div className="calculator">
        <Display
          label={
            operator && operandTwo !== "0"
              ? operandTwo.toString()
              : `${operandOne} ${operator || ""}`
          }
        />
        <Keypad
          processInput={processInput}
          allClear={allClear}
          processInversion={processInversion}
          processPercentConversion={processPercentConversion}
          processOperator={processOperator}
        />
      </div>
      {operator || "none"}
    </div>
  );
};

export default Calculator;

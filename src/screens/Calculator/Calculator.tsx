import { useEffect, useState } from "react";
import Display from "../../components/Display/Display";
import Keypad from "../../components/Keypad/Keypad";
import {
  calculate,
  invertOperand,
  operandToPercentage,
  updateOperand,
} from "../../logic/update";

import "./style.scss";
import { NOT_A_NUMBER, ZERO } from "../../constants/number";

const Calculator = () => {
  const [operandOne, setOperandOne] = useState(NOT_A_NUMBER);
  const [operandTwo, setOperandTwo] = useState(NOT_A_NUMBER);
  const [operator, setOperator] = useState("");

  useEffect(() => {
    setOperandOne(ZERO);
  }, []);

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
      setOperandTwo(NOT_A_NUMBER);
      setOperator("");
    }

    if (value !== "=") {
      setOperator(value);
    }
  };

  const allClear = () => {
    setOperandOne(ZERO);
    setOperandTwo(NOT_A_NUMBER);
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
            operator && operandTwo !== NOT_A_NUMBER
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
    </div>
  );
};

export default Calculator;

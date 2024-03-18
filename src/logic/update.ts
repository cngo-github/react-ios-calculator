import { DOT, Operator } from "../constants/keypad";
import { NOT_A_NUMBER, ZERO } from "../constants/number";

export const calculate = (
  operandOne: string,
  operandTwo: string,
  operator: string
) => {
  if (!operator) {
    return operandOne;
  }

  const operands = [operandOne, operandTwo]
    .map((x: string) => parseFloat(x))
    .filter((n: number) => !isNaN(n));

  if (operands.length < 2) {
    return operands[0];
  }

  switch (operator) {
    case Operator.MULTIPLY:
      return operands[0] * operands[1];
    case Operator.DIVIDE:
      return operands[1] === 0 ? NOT_A_NUMBER : operands[0] / operands[1];
    case Operator.SUBTRACT:
      return operands[0] - operands[1];
    case Operator.ADD:
      return operands[0] + operands[1];
    default:
      return NOT_A_NUMBER;
  }
};

export const updateOperand = (
  value: string,
  operandOne: string,
  setOperandOne: (value: string) => void,
  operandTwo: string,
  setOperandTwo: (value: string) => void,
  operator: string
) =>
  operator
    ? addToNumber(value, operandTwo, setOperandTwo)
    : addToNumber(value, operandOne, setOperandOne);

export const invertOperand = (
  operandOne: string,
  setOperandOne: (value: string) => void,
  operandTwo: string,
  setOperandTwo: (value: string) => void,
  operator: string
) =>
  operator
    ? negateNumber(operandTwo, setOperandTwo)
    : negateNumber(operandOne, setOperandOne);

export const operandToPercentage = (
  operandOne: string,
  setOperandOne: (value: string) => void,
  operandTwo: string,
  setOperandTwo: (value: string) => void,
  operator: string
) =>
  operator
    ? numberToPercent(operandTwo, setOperandTwo)
    : numberToPercent(operandOne, setOperandOne);

const addToNumber = (
  value: string,
  operand: string,
  fn: (value: string) => void
) => {
  if (value === DOT && operand.includes(DOT)) {
    return;
  }

  const update =
    operand === ZERO || operand === NOT_A_NUMBER
      ? value.toString()
      : `${operand}${value}`;

  fn(update);
};

const negateNumber = (operand: string, fn: (value: string) => void) =>
  operand.startsWith(Operator.SUBTRACT)
    ? fn(operand.slice(1))
    : fn(`-${operand}`);

const numberToPercent = (operand: string, fn: (value: string) => void) => {
  const operandNumber = parseFloat(operand);

  if (isNaN(operandNumber)) {
    fn(NOT_A_NUMBER);
    return;
  }

  const percentage = operandNumber * 100;

  fn(percentage.toString());
};

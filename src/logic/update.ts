export const calculate = (
  operandOne: string,
  operandTwo: string,
  operator: string
) => {
  console.log(operator);
  if (!operator) {
    return operandOne;
  }

  const operands = [operandOne, operandTwo]
    .map((x: string) => parseFloat(x))
    .filter((n: number) => !isNaN(n));

  if (operands.length < 2) {
    return "NaN";
  }

  switch (operator) {
    case "x":
      return operands[0] * operands[1];
    case "/":
      return operands[1] === 0 ? "NaN" : operands[0] / operands[1];
    case "-":
      return operands[0] - operands[1];
    case "+":
      return operands[0] + operands[1];
    default:
      return "NaN";
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
  if (value === "." && operand.includes(".")) {
    return;
  }

  const update = operand === "0" ? value.toString() : `${operand}${value}`;

  fn(update);
};

const negateNumber = (operand: string, fn: (value: string) => void) =>
  operand.startsWith("-") ? fn(operand.slice(1)) : fn(`-${operand}`);

const numberToPercent = (operand: string, fn: (value: string) => void) => {
  const operandNumber = parseFloat(operand);

  if (isNaN(operandNumber)) {
    fn("NaN");
    return;
  }

  const percentage = operandNumber * 100;

  fn(percentage.toString());
};

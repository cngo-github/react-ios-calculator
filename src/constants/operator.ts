export const CALC_OPERATOR = {
  Add: "+",
  Subtract: "-",
  Multiply: "x",
  Divide: "/",
  Equals: "=",
  None: "",
};

export const isCalcOperator = (value: string) =>
  Object.values(CALC_OPERATOR).includes(value);

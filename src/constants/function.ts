export const CALC_FUNCTION = {
  AllClear: "AC",
  Negate: "+/-",
  Percent: "%",
};

export const isCalcFunction = (value: string) =>
  Object.values(CALC_FUNCTION).includes(value);

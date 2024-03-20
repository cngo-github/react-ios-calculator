import { isCalcFunction } from "../constants/function";
import { isCalcOperator } from "../constants/operator";

export const btnFunction = "function" as const;
export const btnNumber = "number" as const;
export const btnOperator = "operator" as const;

export const BASE_KEY = {
  borderRadius: "5rem",
  fontSize: "2rem",
  height: "5rem",
};

export interface KeyColor {
  backgroundColor: string;
  color: string;
  "&:hover": {
    backgroundColor: string;
  };
}

export interface KeyColors {
  function: KeyColor;
  number: KeyColor;
  operator: KeyColor;
}

const colors: KeyColors = {
  function: {
    backgroundColor: "#a5a5a5",
    color: "#000000",
    "&:hover": {
      backgroundColor: "#cecece",
    },
  },
  number: {
    backgroundColor: "#333333",
    color: "#ffffff",
    "&:hover": {
      backgroundColor: "#404040",
    },
  },
  operator: {
    backgroundColor: "#ff9f00",
    color: "#ffffff",
    "&:hover": {
      backgroundColor: "#ecb253",
    },
  },
};

export type KeypadFunction = typeof btnFunction;
export type KeypadNumber = typeof btnNumber;
export type KeypadOperator = typeof btnOperator;

export const getColors = (value: string) => {
  if (isCalcFunction(value)) {
    return colors[btnFunction];
  }

  if (isCalcOperator(value)) {
    return colors[btnOperator];
  }

  return colors[btnNumber];
};

export const remToNumber = (value: string) => {
  const n = value.slice(0, -3);

  return parseFloat(n);
};

export const BASE_KEY = {
  borderRadius: "5rem",
  fontSize: "2rem",
  margin: "1rem",
  radius: "5rem",

  backgroundColor: "#a5a5a5",
  fontColor: "#000000",
};

const FUNCTION_KEY = {
  backgroundColor: "#a5a5a5",
  fontColor: "#000000",
};

const OPERATOR_KEY = {
  backgroundColor: "ff9f0a",
  fontColor: "#ffffff",
};

export type KeypadFunction = "function";
export type KeypadNumber = "number";
export type KeypadOperator = "operator";

export type KeypadKey = KeypadFunction | KeypadNumber | KeypadOperator;

export const isFunctionKey = (
  btnType: KeypadKey
): btnType is KeypadFunction => {
  return true;
};

export const isOperatorKey = (
  btnType: KeypadKey
): btnType is KeypadOperator => {
  return true;
};

export const getColors = (btnType: KeypadKey) => {
  if (isFunctionKey(btnType)) {
    return FUNCTION_KEY;
  }

  if (isOperatorKey(btnType)) {
    return OPERATOR_KEY;
  }
};

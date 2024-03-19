export const btnFunction = "function" as const;
export const btnNumber = "number" as const;
export const btnOperator = "operator" as const;

export const BASE_KEY = {
  borderRadius: "5rem",
  fontSize: "2rem",
  radius: "5rem",
};

const colors = {
  function: {
    backgroundColor: "#a5a5a5",
    fontColor: "#000000",
    hoverColor: "#cecece",
  },
  number: {
    backgroundColor: "#333333",
    fontColor: "#ffffff",
    hoverColor: "#404040",
  },
  operator: {
    backgroundColor: "#ff9f00",
    fontColor: "#ffffff",
    hoverColor: "#ecb253",
  },
};

export type KeypadFunction = typeof btnFunction;
export type KeypadNumber = typeof btnNumber;
export type KeypadOperator = typeof btnOperator;

export const getColors = (
  btnType: KeypadFunction | KeypadNumber | KeypadOperator
) => {
  const s = btnType as string;

  if (s === btnFunction) {
    return colors[btnFunction];
  }

  if (s === btnOperator) {
    return colors[btnOperator];
  }

  return colors[btnNumber];
};

export const remToNumber = (value: string) => {
  const n = value.slice(0, -3);

  return parseFloat(n);
};

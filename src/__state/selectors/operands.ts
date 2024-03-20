import { DefaultValue, selector, selectorFamily } from "recoil";
import {
  firstOperandAtom,
  operatorAtom,
  secondOperandAtom,
} from "../atoms/calculator";
import {
  DECIMAL_POINT,
  NEGATIVE_SIGN,
  NOT_A_NUMBER,
  OVERFLOW,
  ZERO,
  isCalcNumber,
} from "../../constants/number";
import { CALC_OPERATOR } from "../../constants/operator";
import { DISPLAY_SIZE } from "../../config/display";
import { operatorSelector } from "./calcOperators";

const getNewValue = (newValue: string | DefaultValue, current: string) => {
  if (typeof newValue !== "string" || current === OVERFLOW) {
    return;
  }

  if (newValue.length > DISPLAY_SIZE) {
    return OVERFLOW;
  }

  if (newValue.startsWith(DECIMAL_POINT)) {
    return ZERO + DECIMAL_POINT;
  }

  return newValue;
};

export const firstOperandSelector = selector({
  key: "firstOperand",
  get: ({ get }) => get(firstOperandAtom),
  set: ({ get, set }, newValue) => {
    const current = get(firstOperandAtom);
    const update = getNewValue(newValue, current);

    if (!update) {
      return;
    }

    set(firstOperandAtom, update);
  },
});

export const secondOperandSelector = selector({
  key: "secondOperand",
  get: ({ get }) => {
    let operand = get(secondOperandAtom);

    if (operand === NOT_A_NUMBER) {
      operand = "";
    }

    return operand;
  },
  set: ({ get, set }, newValue) => {
    const current = get(secondOperandAtom);
    const update = getNewValue(newValue, current);

    if (!update) {
      return;
    }

    set(secondOperandAtom, update);
  },
});

export const firstOperandNegateSelector = selector({
  key: "firstOperandNegate",
  get: ({ get }) => get(firstOperandSelector),
  set: ({ get, set }) => {
    const current = get(firstOperandSelector);

    if (current === ZERO) {
      return;
    }

    if (current.startsWith(NEGATIVE_SIGN)) {
      set(firstOperandSelector, current.slice(1));
    } else {
      set(firstOperandSelector, NEGATIVE_SIGN + current);
    }
  },
});

export const secondOperandNegateSelector = selector({
  key: "secondOperandNegate",
  get: ({ get }) => get(secondOperandSelector),
  set: ({ get, set }) => {
    const current = get(secondOperandSelector);

    if (current === ZERO) {
      return;
    }

    if (current.startsWith(NEGATIVE_SIGN)) {
      set(secondOperandSelector, current.slice(1));
    } else {
      set(secondOperandSelector, NEGATIVE_SIGN + current);
    }
  },
});

export const firstOperandPercentSelector = selector({
  key: "firstOperandPercent",
  get: ({ get }) => get(firstOperandSelector),
  set: ({ get, set }) => {
    const current = get(firstOperandSelector);

    const update = (parseFloat(current) * 100).toString();

    set(firstOperandSelector, update);
  },
});

export const secondOperandPercentSelector = selector({
  key: "secondOperandPercent",
  get: ({ get }) => get(secondOperandSelector),
  set: ({ get, set }) => {
    const current = get(secondOperandSelector);

    const update = (parseFloat(current) * 100).toString();

    set(secondOperandSelector, update);
  },
});

export const operandSelector = selectorFamily({
  key: "operand",
  get:
    (getBoth) =>
    ({ get }) => {
      if (typeof getBoth === "boolean" && getBoth) {
        const firstOperand = get(firstOperandSelector);
        const secondOperand = get(secondOperandSelector);

        return [firstOperand, secondOperand];
      }

      const operator = get(operatorAtom);

      return operator === CALC_OPERATOR.None
        ? get(firstOperandSelector)
        : get(secondOperandSelector);
    },
  set:
    (_) =>
    ({ get, set }, newValue) => {
      if (typeof newValue !== "string" || !isCalcNumber(newValue)) {
        return;
      }

      let selector = firstOperandSelector;
      let operand = get(selector);
      const operator = get(operatorSelector);

      if (operator == CALC_OPERATOR.None) {
        selector = secondOperandSelector;
        operand = get(selector);
      }

      let update =
        operand === NOT_A_NUMBER || operand === ZERO
          ? newValue
          : operand + newValue;

      set(selector, update);
    },
});

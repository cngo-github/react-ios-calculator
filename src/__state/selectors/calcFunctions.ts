import { selector } from "recoil";
import {
  firstOperandAtom,
  operatorAtom,
  secondOperandAtom,
} from "../atoms/calculator";
import {
  firstOperandNegateSelector,
  firstOperandPercentSelector,
  secondOperandNegateSelector,
  secondOperandPercentSelector,
} from "./operands";

export const allClearSelector = selector({
  key: "allClear",
  get: () => {
    // Do nothing
  },
  set: ({ reset }) => {
    reset(firstOperandAtom);
    reset(secondOperandAtom);
    reset(operatorAtom);
  },
});

export const negateSelector = selector({
  key: "negate",
  get: () => {
    // Do nothing
  },
  set: ({ get, set }) => {
    let operand = get(secondOperandPercentSelector);

    if (!operand) {
      set(firstOperandNegateSelector, "ignored");
    } else {
      set(secondOperandNegateSelector, "ignored");
    }
  },
});

export const percentSelector = selector({
  key: "percent",
  get: () => {
    // Do nothing
  },
  set: ({ get, set }) => {
    let operand = get(secondOperandPercentSelector);

    if (!operand) {
      set(firstOperandPercentSelector, "ignored");
    } else {
      set(secondOperandPercentSelector, "ignored");
    }
  },
});

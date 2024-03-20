import { atom } from "recoil";
import { NOT_A_NUMBER, ZERO } from "../../constants/number";
import { CALC_OPERATOR } from "../../constants/operator";

export const firstOperandAtom = atom({
  key: "firstOperandAtom",
  default: ZERO,
});

export const secondOperandAtom = atom({
  key: "secondOperandAtom",
  default: NOT_A_NUMBER,
});

export const operatorAtom = atom({
  key: "operatorAtom",
  default: CALC_OPERATOR.None,
});

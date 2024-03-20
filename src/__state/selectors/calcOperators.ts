import { selector } from "recoil";
import { operatorAtom, secondOperandAtom } from "../atoms/calculator";
import {
  firstOperandSelector,
  secondOperandSelector,
} from "../selectors/operands";
import { NOT_A_NUMBER, OVERFLOW } from "../../constants/number";
import { CALC_OPERATOR, isCalcOperator } from "../../constants/operator";
import { DISPLAY_SIZE } from "../../config/display";

const calculate = (
  firstOperand: string,
  secondOperand: string,
  operator: string
) => {
  if (secondOperand === NOT_A_NUMBER || operator === CALC_OPERATOR.Equals) {
    return firstOperand;
  }

  const firstNum = parseFloat(firstOperand);
  const secondNum = parseFloat(secondOperand);

  let result = "";

  switch (operator) {
    case CALC_OPERATOR.Add:
      result = (firstNum + secondNum).toString();
      break;
    case CALC_OPERATOR.Divide:
      result =
        secondNum === 0 ? NOT_A_NUMBER : (firstNum / secondNum).toString();
      break;
    case CALC_OPERATOR.Multiply:
      result = (firstNum * secondNum).toString();
      break;
    default:
      result = (firstNum - secondNum).toString();
  }

  return result.length > DISPLAY_SIZE ? OVERFLOW : result;
};

export const operatorSelector = selector({
  key: "operator",
  get: ({ get }) => get(operatorAtom),
  set: ({ get, reset, set }, newOperator) => {
    if (typeof newOperator !== "string" || !isCalcOperator(newOperator)) {
      return;
    }

    const currOperator = get(operatorAtom);
    const firstOperand = get(firstOperandSelector);

    if (firstOperand === NOT_A_NUMBER || firstOperand === OVERFLOW) {
      return;
    }

    if (currOperator === CALC_OPERATOR.None) {
      set(operatorAtom, newOperator);
      return;
    }

    const secondOperand = get(secondOperandSelector);

    const result = calculate(firstOperand, secondOperand, currOperator);

    set(firstOperandSelector, result);
    reset(secondOperandAtom);

    if (
      newOperator === CALC_OPERATOR.Equals ||
      newOperator === CALC_OPERATOR.None ||
      result === NOT_A_NUMBER ||
      result === OVERFLOW
    ) {
      reset(operatorAtom);
    } else {
      set(operatorAtom, newOperator);
    }
  },
});

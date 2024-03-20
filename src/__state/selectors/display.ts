import { selector, GetRecoilValue, RecoilState, SetRecoilState } from "recoil";
import { CALC_OPERATOR, isCalcOperator } from "../../constants/operator";
import { NOT_A_NUMBER, ZERO } from "../../constants/number";
import { operatorSelector } from "./calcOperators";
import { firstOperandSelector, secondOperandSelector } from "./operands";

const updateOperand = (
  newValue: string,
  get: GetRecoilValue,
  set: SetRecoilState,
  atom: RecoilState<string>
) => {
  const operand = get(atom);
  let update =
    operand === ZERO || operand === NOT_A_NUMBER
      ? newValue
      : operand + newValue;

  set(atom, update);
};

export const inputSelector = selector({
  key: "inputSelector",
  get: ({ get }) => {
    const firstOperand = get(firstOperandSelector);
    const secondOperand = get(secondOperandSelector);
    const operator = get(operatorSelector);

    const displayValue = !secondOperand
      ? firstOperand + operator
      : secondOperand;
    return displayValue;
  },
  set: ({ get, set }, newValue) => {
    const update = typeof newValue !== "string" ? "" : (newValue as string);

    if (isCalcOperator(update)) {
      set(operatorSelector, update);
      return;
    }

    const operator = get(operatorSelector);

    updateOperand(
      update,
      get,
      set,
      operator === CALC_OPERATOR.None
        ? firstOperandSelector
        : secondOperandSelector
    );
  },
});

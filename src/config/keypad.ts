import { CALC_FUNCTION } from "../constants/function";
import { CALC_OPERATOR } from "../constants/operator";

export interface KeypadKeyEntry {
  label: string;
  isDoubleWidth: boolean;
}
export const KEY_SPACING = "2rem";

export const KEYPAD_ARRANGEMENT: KeypadKeyEntry[][] = [
  [
    {
      label: CALC_FUNCTION.AllClear,
      isDoubleWidth: false,
    },
    {
      label: CALC_FUNCTION.Negate,
      isDoubleWidth: false,
    },
    {
      label: CALC_FUNCTION.Percent,
      isDoubleWidth: false,
    },
    {
      label: CALC_OPERATOR.Divide,
      isDoubleWidth: false,
    },
  ],
  [
    {
      label: "7",
      isDoubleWidth: false,
    },
    {
      label: "8",
      isDoubleWidth: false,
    },
    {
      label: "9",
      isDoubleWidth: false,
    },
    {
      label: CALC_OPERATOR.Multiply,
      isDoubleWidth: false,
    },
  ],
  [
    {
      label: "4",
      isDoubleWidth: false,
    },
    {
      label: "5",
      isDoubleWidth: false,
    },
    {
      label: "6",
      isDoubleWidth: false,
    },
    {
      label: CALC_OPERATOR.Subtract,
      isDoubleWidth: false,
    },
  ],
  [
    {
      label: "1",
      isDoubleWidth: false,
    },
    {
      label: "2",
      isDoubleWidth: false,
    },
    {
      label: "3",
      isDoubleWidth: false,
    },
    {
      label: CALC_OPERATOR.Add,
      isDoubleWidth: false,
    },
  ],
  [
    {
      label: "0",
      isDoubleWidth: true,
    },
    {
      label: ".",
      isDoubleWidth: false,
    },
    {
      label: CALC_OPERATOR.Equals,
      isDoubleWidth: false,
    },
  ],
];

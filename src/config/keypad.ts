import { btnFunction, btnNumber, btnOperator } from "./buttons";

export const KEY_SPACING = "2rem";

export const KEYPAD_ARRANGEMENT = [
  [
    {
      label: "AC",
      type: btnFunction,
      isDoubleWidth: false,
    },
    {
      label: "+/-",
      type: btnFunction,
      isDoubleWidth: false,
    },
    {
      label: "%",
      type: btnFunction,
      isDoubleWidth: false,
    },
    {
      label: "/",
      type: btnOperator,
      isDoubleWidth: false,
    },
  ],
  [
    {
      label: "7",
      type: btnNumber,
      isDoubleWidth: false,
    },
    {
      label: "8",
      type: btnNumber,
      isDoubleWidth: false,
    },
    {
      label: "9",
      type: btnNumber,
      isDoubleWidth: false,
    },
    {
      label: "x",
      type: btnOperator,
      isDoubleWidth: false,
    },
  ],
  [
    {
      label: "4",
      type: btnNumber,
      isDoubleWidth: false,
    },
    {
      label: "5",
      type: btnNumber,
      isDoubleWidth: false,
    },
    {
      label: "6",
      type: btnNumber,
      isDoubleWidth: false,
    },
    {
      label: "-",
      type: btnOperator,
      isDoubleWidth: false,
    },
  ],
  [
    {
      label: "1",
      type: btnNumber,
      isDoubleWidth: false,
    },
    {
      label: "2",
      type: btnNumber,
      isDoubleWidth: false,
    },
    {
      label: "3",
      type: btnNumber,
      isDoubleWidth: false,
    },
    {
      label: "+",
      type: btnOperator,
      isDoubleWidth: false,
    },
  ],
  [
    {
      label: "0",
      type: btnNumber,
      isDoubleWidth: true,
    },
    {
      label: ".",
      type: btnNumber,
      isDoubleWidth: false,
    },
    {
      label: "=",
      type: btnOperator,
      isDoubleWidth: false,
    },
  ],
];

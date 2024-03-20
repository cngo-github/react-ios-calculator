import { useRecoilState } from "recoil";
import Stack from "@mui/material/Stack";

import {
  KEYPAD_ARRANGEMENT,
  KEY_SPACING,
  KeypadKeyEntry,
} from "../../config/keypad";
import KeypadKey from "../KeypadKey/KeypadKey";
import { isCalcFunction } from "../../constants/function";
import { inputSelector } from "../../__state/selectors/display";
import FunctionKey from "../FunctionKey/FunctionKey";

const mkKeypadKey = ({ label, isDoubleWidth }: KeypadKeyEntry) => {
  const [_, updateInput] = useRecoilState(inputSelector);

  if (isCalcFunction(label)) {
    return <FunctionKey key={label} label={label} />;
  }

  return (
    <KeypadKey
      key={label}
      clickHandler={() => updateInput(label)}
      label={label}
      isDoubleWidth={isDoubleWidth}
    />
  );
};

const Keypad = () => {
  return (
    <Stack spacing={KEY_SPACING}>
      {KEYPAD_ARRANGEMENT.map((row: KeypadKeyEntry[], idx: number) => (
        <Stack direction="row" spacing={KEY_SPACING} key={idx}>
          {row.map((entry: KeypadKeyEntry) => mkKeypadKey(entry))}
        </Stack>
      ))}
    </Stack>
  );
};

export default Keypad;

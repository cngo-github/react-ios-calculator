import Stack from "@mui/material/Stack";

import {
  KEYPAD_ARRANGEMENT,
  KEY_SPACING,
  KeypadKeyEntry,
} from "../../config/keypad";
import KeypadKey from "../KeypadKey/KeypadKey";

const Keypad = () => {
  return (
    <Stack spacing={KEY_SPACING}>
      {KEYPAD_ARRANGEMENT.map((row: KeypadKeyEntry[], idx: number) => (
        <Stack direction="row" spacing={KEY_SPACING} key={idx}>
          {row.map((entry: KeypadKeyEntry) => (
            <KeypadKey
              key={entry.label}
              label={entry.label}
              variant={entry.type}
              isDoubleWidth={entry.isDoubleWidth}
            />
          ))}
        </Stack>
      ))}
    </Stack>
  );
};

export default Keypad;

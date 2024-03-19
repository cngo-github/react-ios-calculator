import Stack from "@mui/material/Stack";

import { KEYPAD_ARRANGEMENT, KEY_SPACING } from "../../config/keypad";
import KeypadKey from "../KeypadKey/KeypadKey";

const Keypad = () => {
  return (
    <Stack spacing={KEY_SPACING}>
      {KEYPAD_ARRANGEMENT.map((row, idx) => (
        <Stack direction="row" spacing={KEY_SPACING} key={idx}>
          {row.map((elem) => (
            <KeypadKey
              key={elem.label}
              label={elem.label}
              variant={elem.type}
              isDoubleWidth={elem.isDoubleWidth}
            />
          ))}
        </Stack>
      ))}
    </Stack>
  );
};

export default Keypad;

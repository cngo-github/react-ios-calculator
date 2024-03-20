import Stack from "@mui/material/Stack";
import Display from "../../components/Display/Display";
import Keypad from "../../components/Keypad/Keypad";
import { CALCULATOR } from "../../config/calculator";

const Calculator = () => {
  return (
    <Stack
      spacing={CALCULATOR.componentSpacing}
      sx={{
        ...CALCULATOR,
        boxSizing: "border-box",
      }}
    >
      <Display />
      <Keypad />
    </Stack>
  );
};

export default Calculator;

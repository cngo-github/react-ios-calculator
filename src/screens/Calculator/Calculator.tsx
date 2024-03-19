import Stack from "@mui/material/Stack";
import Display from "../../components/Display/Display";
import Keypad from "../../components/Keypad/Keypad";
import { CALCULATOR } from "../../config/calculator";

const Calculator = () => {
  return (
    <Stack
      spacing={CALCULATOR.componentSpacing}
      sx={{
        backgroundColor: CALCULATOR.backgroundColor,
        paddingTop: CALCULATOR.topPadding,
        paddingBottom: CALCULATOR.bottomPadding,
        paddingLeft: CALCULATOR.sidePadding,
        paddingRight: CALCULATOR.sidePadding,
        border: CALCULATOR.border,
        borderRadius: CALCULATOR.borderRadius,
        boxSizing: "border-box",
      }}
    >
      <Display value="1" />
      <Keypad />
    </Stack>
  );
};

export default Calculator;

import Button from "@mui/material/Button";
import {
  BASE_KEY,
  getColors,
  KeypadFunction,
  KeypadNumber,
  KeypadOperator,
  remToNumber,
} from "../../config/buttons";
import { KEY_SPACING } from "../../config/keypad";

export interface KeyProps {
  label: string;
  variant: KeypadFunction | KeypadNumber | KeypadOperator;
  isDoubleWidth?: boolean;
}

const KeypadKey = ({ label, variant, isDoubleWidth = false }: KeyProps) => {
  const variantColors = getColors(variant);

  const calculateWidth = (doubled: boolean) => {
    if (!doubled) {
      return BASE_KEY.height;
    }

    const radius = remToNumber(BASE_KEY.height);
    const margin = remToNumber(KEY_SPACING);

    return `${2 * radius + margin}rem`;
  };

  return (
    <Button
      variant="contained"
      sx={{
        ...variantColors,
        ...BASE_KEY,
        width: calculateWidth(isDoubleWidth),
      }}
    >
      {label}
    </Button>
  );
};

export default KeypadKey;

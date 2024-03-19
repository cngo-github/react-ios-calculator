import Button from "@mui/material/Button";
import {
  BASE_KEY,
  getColors,
  KeypadKey,
  KeypadNumber,
} from "../config/buttons";
import { ReactNode } from "react";

export interface KeyProps {
  children: ReactNode;
  variant: KeypadKey;
}

const Key = ({ children, variant }: KeyProps) => {
  const variantTheme = getColors(variant);

  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: variantTheme.backgroundColor,
        color: variantTheme.fontColor,
        fontSize: BASE_KEY.fontSize,
        width: BASE_KEY.radius,
        height: BASE_KEY.radius,
        borderRadius: BASE_KEY.borderRadius,
      }}
    >
      {children}
    </Button>
  );
};

const KeypadKey = () => {
  return <Key variant={"number"}>1</Key>;
};

export default KeypadKey;

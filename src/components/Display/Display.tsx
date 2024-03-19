import Typography from "@mui/material/Typography";
import { DISPLAY } from "../../config/display";

export interface DisplayProps {
  value: string;
}

const Display = ({ value }: DisplayProps) => {
  return (
    <Typography
      variant="h1"
      align="right"
      sx={{
        backgroundColor: DISPLAY.backgroundColor,
        color: DISPLAY.fontColor,
        paddingTop: DISPLAY.padding,
        paddingLeft: DISPLAY.padding,
        paddingRight: DISPLAY.padding,
      }}
    >
      {value}
    </Typography>
  );
};

export default Display;

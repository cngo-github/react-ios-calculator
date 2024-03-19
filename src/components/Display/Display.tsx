import Typography from "@mui/material/Typography";
import { DISPLAY } from "../../config/display";

export interface DisplayProps {
  value: string;
}

const Display = ({ value }: DisplayProps) => {
  return (
    <Typography variant="h1" align="right" sx={DISPLAY}>
      {value}
    </Typography>
  );
};

export default Display;

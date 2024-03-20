import { useRecoilValue } from "recoil";
import Typography from "@mui/material/Typography";
import { DISPLAY } from "../../config/display";
import { inputSelector } from "../../__state/selectors/display";

const Display = () => {
  const value = useRecoilValue(inputSelector);

  return (
    <Typography variant="h1" align="right" sx={DISPLAY}>
      {value}
    </Typography>
  );
};

export default Display;

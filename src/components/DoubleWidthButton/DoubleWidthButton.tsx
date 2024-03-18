import { Button, ButtonProps } from "../Button/Button";

import "./style.scss";

const DoubleWidthButton = ({ label, onClickHandler }: ButtonProps) => {
  return (
    <div id="double-width">
      <Button label={label} onClickHandler={onClickHandler} />
    </div>
  );
};

export default DoubleWidthButton;

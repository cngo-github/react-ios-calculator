import { Button, ButtonProps } from "../Button/Button";

import "./style.scss";

const OtherButton = ({ label, onClickHandler }: ButtonProps) => {
  return (
    <div id="other">
      <Button label={label} onClickHandler={onClickHandler} />
    </div>
  );
};

export default OtherButton;

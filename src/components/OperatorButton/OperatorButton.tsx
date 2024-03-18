import { Button, ButtonProps } from "../Button/Button";

import "./style.scss";

const OperatorButton = ({ label, onClickHandler }: ButtonProps) => {
  return (
    <div id="operator">
      <Button label={label} onClickHandler={onClickHandler} />
    </div>
  );
};

export default OperatorButton;

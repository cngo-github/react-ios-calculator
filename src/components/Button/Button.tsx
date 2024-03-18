import "./style.scss";

export interface ButtonProps {
  label: string;
  onClickHandler?: () => void;
}

export const Button = ({ label, onClickHandler = () => {} }: ButtonProps) => {
  return (
    <div className={`${label} button`} onClick={() => onClickHandler()}>
      {label}
    </div>
  );
};

const DefaultButton = ({ label, onClickHandler }: ButtonProps) => {
  return (
    <div id="button">
      <Button label={label} onClickHandler={onClickHandler} />
    </div>
  );
};

export default DefaultButton;

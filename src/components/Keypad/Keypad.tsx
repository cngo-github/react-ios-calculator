import DefaultButton from "../Button/Button";
import DoubleWidthButton from "../DoubleWidthButton/DoubleWidthButton";
import OperatorButton from "../OperatorButton/OperatorButton";
import OtherButton from "../OtherButton/OtherButton";

import "./style.scss";

export interface KeypadProps {
  allClear: () => void;
  processInput: (value: string) => void;
  processInversion: () => void;
  processOperator: (value: string) => void;
  processPercentConversion: () => void;
}

const Keypad = ({
  allClear,
  processInput,
  processInversion,
  processOperator,
  processPercentConversion,
}: KeypadProps) => {
  const numberKeys = [
    [7, 8, 9],
    [4, 5, 6],
    [1, 2, 3],
  ];

  return (
    <div id="keypad">
      <div className="row">
        <OtherButton label="AC" onClickHandler={allClear} />
        <OtherButton label="+/-" onClickHandler={processInversion} />
        <OtherButton label="%" onClickHandler={processPercentConversion} />
        <OperatorButton label="/" onClickHandler={() => processOperator("/")} />
      </div>
      <div className="row">
        {numberKeys[0].map((value) => {
          return (
            <DefaultButton
              key={value}
              label={value.toString()}
              onClickHandler={() => processInput(value.toString())}
            />
          );
        })}
        <OperatorButton label="x" onClickHandler={() => processOperator("x")} />
      </div>
      <div className="row">
        {numberKeys[1].map((value) => {
          return (
            <DefaultButton
              key={value}
              label={value.toString()}
              onClickHandler={() => processInput(value.toString())}
            />
          );
        })}
        <OperatorButton label="-" onClickHandler={() => processOperator("-")} />
      </div>
      <div className="row">
        {numberKeys[2].map((value) => {
          return (
            <DefaultButton
              key={value}
              label={value.toString()}
              onClickHandler={() => processInput(value.toString())}
            />
          );
        })}
        <OperatorButton label="+"></OperatorButton>
      </div>
      <div className="row">
        <DoubleWidthButton label="0" onClickHandler={() => processInput("0")} />
        <DefaultButton label="." onClickHandler={() => processInput(".")} />
        <OperatorButton label="=" onClickHandler={() => processOperator("=")} />
      </div>
    </div>
  );
};

export default Keypad;

import { DOT, FunctionKeys, Operator } from "../../constants/keypad";
import { NUMBER_KEYS, ZERO } from "../../constants/number";
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
  return (
    <div id="keypad">
      <div className="row">
        <OtherButton label={FunctionKeys.ALL_CLEAR} onClickHandler={allClear} />
        <OtherButton
          label={FunctionKeys.NEGATE}
          onClickHandler={processInversion}
        />
        <OtherButton
          label={FunctionKeys.PERCENT}
          onClickHandler={processPercentConversion}
        />
        <OperatorButton
          label={Operator.DIVIDE}
          onClickHandler={() => processOperator(Operator.DIVIDE)}
        />
      </div>
      <div className="row">
        {NUMBER_KEYS[0].map((value) => {
          return (
            <DefaultButton
              key={value}
              label={value.toString()}
              onClickHandler={() => processInput(value.toString())}
            />
          );
        })}
        <OperatorButton
          label={Operator.MULTIPLY}
          onClickHandler={() => processOperator(Operator.MULTIPLY)}
        />
      </div>
      <div className="row">
        {NUMBER_KEYS[1].map((value) => {
          return (
            <DefaultButton
              key={value}
              label={value.toString()}
              onClickHandler={() => processInput(value.toString())}
            />
          );
        })}
        <OperatorButton
          label={Operator.SUBTRACT}
          onClickHandler={() => processOperator(Operator.SUBTRACT)}
        />
      </div>
      <div className="row">
        {NUMBER_KEYS[2].map((value) => {
          return (
            <DefaultButton
              key={value}
              label={value.toString()}
              onClickHandler={() => processInput(value.toString())}
            />
          );
        })}
        <OperatorButton
          label={Operator.ADD}
          onClickHandler={() => processOperator(Operator.ADD)}
        />
      </div>
      <div className="row">
        <DoubleWidthButton
          label={ZERO}
          onClickHandler={() => processInput(ZERO)}
        />
        <DefaultButton label={DOT} onClickHandler={() => processInput(DOT)} />
        <OperatorButton
          label={Operator.EQUALS}
          onClickHandler={() => processOperator(Operator.EQUALS)}
        />
      </div>
    </div>
  );
};

export default Keypad;

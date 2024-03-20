import { useRecoilState } from "recoil";
import {
  allClearSelector,
  negateSelector,
  percentSelector,
} from "../../__state/selectors/calcFunctions";
import KeypadKey, { KeyProps } from "../KeypadKey/KeypadKey";
import { CALC_FUNCTION } from "../../constants/function";

const FunctionKey = ({ label }: KeyProps) => {
  const [_, runAllClear] = useRecoilState(allClearSelector);
  const [_2, runNegate] = useRecoilState(negateSelector);
  const [_3, runPercent] = useRecoilState(percentSelector);

  const getClickHandler = (): (() => void) => {
    if (label === CALC_FUNCTION.Negate) {
      return () => runNegate();
    }

    if (label === CALC_FUNCTION.Percent) {
      return () => runPercent();
    }

    return () => runAllClear();
  };

  return <KeypadKey label={label} clickHandler={getClickHandler()} />;
};

export default FunctionKey;

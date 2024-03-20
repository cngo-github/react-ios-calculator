import { RecoilRoot } from "recoil";
import "./App.css";
import Calculator from "./screens/Calculator/Calculator";

function App() {
  return (
    <RecoilRoot>
      <Calculator />
    </RecoilRoot>
  );
}

export default App;

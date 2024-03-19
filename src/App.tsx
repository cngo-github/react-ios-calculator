import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Keypad from "./components/Keypad/Keypad";
import Display from "./components/Display/Display";
import Calculator from "./screens/Calculator/Calculator";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./config/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Calculator />
      </ThemeProvider>
    </>
  );
}

export default App;

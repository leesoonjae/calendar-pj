import { ThemeProvider } from "styled-components";
import theme from "./style/theme";
import "./App.css";
import { Calendar } from "./components/Calendar/Calendar";
import { Router } from "react-router-dom";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;

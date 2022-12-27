import { ThemeProvider } from "styled-components";
import theme from "./style/theme";
import "./App.css";
import { Calendar } from "./components/Calendar/Calendar";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Calendar />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;

import GlobalStyles from "./helpers/Global.styled";
import Header from "./components/Header/Header";
import Mode from "./components/Mode/Mode";
import Timer from "./components/Timer/Timer";
import Settings from "./components/Settings/Settings";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { LightTheme, DarkTheme } from "./helpers/Variables";
import { Container } from "./helpers/Container.styled";

function App() {
  const [darkTheme, toggleTheme] = useState(true);
  const selectedFont = useSelector((state) => state.font.value);
  const settingsState = useSelector((state) => state.settings.value);
  return (
    <ThemeProvider theme={darkTheme ? DarkTheme : LightTheme}>
      <>
        <GlobalStyles font={selectedFont} />
        <Header darkTheme={darkTheme} toggleTheme={toggleTheme} />
        <Mode />
        <Container>
          <Timer />
          {settingsState && <Settings />}
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;

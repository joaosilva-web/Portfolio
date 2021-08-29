import GlobalStyle from "./styles/globalStyles";
import TopBar from "./components/TopBar";
import Intro from "./components/Intro";
import Portfolio from "./components/Portfolio";
import Works from "./components/Works";
import Contact from "./components/Contact";

import * as S from "./styles/style";

function App() {
  return (
    <S.App>
      <GlobalStyle />
      <TopBar />
      <S.Sections>
        <Intro />
        <Portfolio />
        <Works />
        <Contact />
      </S.Sections>
    </S.App>
  );
}

export default App;

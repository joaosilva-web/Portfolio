import GlobalStyle from './styles/globalStyles';
import TopBar from './components/TopBar';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import Works from './components/Works';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
     <GlobalStyle/>
     <TopBar/>
     <Intro/>
     <Portfolio/>
     <Works/>
     <Contact/>
    </div>
  );
}

export default App;

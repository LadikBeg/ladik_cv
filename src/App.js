import './App.css';
import Header from './Resourses/Header/Header'
import Main from './Resourses/Main/Main'
import Bottom from "./Resourses/Bottom/Bottom";
import Team from "./Resourses/Team/team";
import Skills from "./Resourses/Skills/skills";
import Contact from "./Resourses/Contact/contact";


function App() {
  return (
    <div className="App">
        <Header/>
        <Main/>
        <Team/>
        <Skills/>
        <Contact/>
        <Bottom/>
    </div>
  );
}

export default App;

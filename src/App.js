import './App.css';
import Header from './Resourses/Header/Header'
import Main from './Resourses/Main/Main'
import Bottom from "./Resourses/Bottom/Bottom";
import Team from "./Resourses/Team/team";
import Skills from "./Resourses/skills/skills";


function App() {
  return (
    <div className="App">
        <Header/>
        <Main/>
        <Team/>
        <Skills/>
        <Bottom/>
    </div>
  );
}

export default App;

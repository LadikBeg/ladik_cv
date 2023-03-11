import './App.css';
import Header from './Resourses/Header/Header'
import Main from './Resourses/Main/Main'
import Bottom from "./Resourses/Bottom/Bottom";
import Team from "./Resourses/Team/team";


function App() {
  return (
    <div className="App">
      <Header/>
        <Main/>

      <Team/>
        <Bottom/>
    </div>
  );
}

export default App;

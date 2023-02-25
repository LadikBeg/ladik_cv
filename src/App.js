import './App.css';
import Header from './Resourses/Header/Header'
import Main from './Resourses/Main/Main'
import Bottom from "./Resourses/Bottom/Bottom";
import Menu from "./Resourses/Header/menu/menu";

function App() {
  return (
    <div className="App">
      <Header/>
        <Main/>
        <Bottom/>

    </div>
  );
}

export default App;

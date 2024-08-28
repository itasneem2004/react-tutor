import bg1 from './assets/1.avif';
import Header from "./components/header.js"
import './App.css';

function App() {
  return (
    <>
    <div className="App">
    <Header />
    <img src={bg1}></img>
    </div>
    </>
  );
}

export default App;

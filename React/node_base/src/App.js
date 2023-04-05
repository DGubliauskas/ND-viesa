
import './App.css';
import Bunny from "./components/001/Bunny"
import RandText from './components/002/RandText';
import ZebraBeaver from './components/003/ZB';
import RandomText from './components/004/Randh1h2';
import ThreeProps from './components/005/ThreeProps';
import rand from './components/randomnum/RandNum';

function App() {
  
  return (
    <div className="App">
      <Bunny />
      <RandText prop="Bet koks tekstas" />
      <ZebraBeaver chance={rand(1,3)} />
      <RandomText first="Bet koks tekstas" second="Bet koks tekstas 2" />
      <ThreeProps first="Dar kitoks tekstas" second="Dar dar kitoks tekstas" color="orange" />
    </div>
  );
}

export default App;

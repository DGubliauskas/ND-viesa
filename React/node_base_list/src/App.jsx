
import './App.scss';
import Dogs from './Components/Dogs';
import Square from './Components/Square';
const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];

function App() {

  return (
    <div className="App">
      <header className="App-header">
         <div className="squares">
          {
            dogs.map((_, index) => <Square dogname={dogs[index]} sqci="square" />)
          }
          </div>
         <div className="squares">
          {
            [...dogs].sort((a, b) => b.length - a.length).map((_, index) => <Square dogname={dogs[index]} sqci="circle" />)
          }
          </div>
         <div className="squares">
          {
            dogs.map((_, index) => index % 2 === 0 ?
            <Square dogname={dogs[index]} sqci="square" /> :
            <Square dogname={dogs[index]} sqci="circle" />)
          }
          </div>
         <div className="squares">
          {
            dogs.filter(l => l.charAt(1) === "a" ).map((_, index) => <Square dogname={dogs[index]} sqci="square" />)
          }
          </div>
          <div className="squares">
          {
            dogs.map((_, index) => <Dogs doglength={dogs[index]} sqci="square" />)
          }
          </div>
      </header>
    </div>
  );
}

export default App;

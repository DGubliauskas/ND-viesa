
import { useState } from 'react';
import './App.scss';
import Square from './components/Square';
import rand from './components/rand';


function App() {
  
  const [figure, setFigure] = useState("square")

  const circleorSquare = _ =>{
    setFigure(c => c === "square" ? c = "circle" : c = "square")
  }

  const [figure2, setFigure2] = useState("circle")
  const circleorSquare2 = _ =>{
    setFigure2(c => c === "circle" ? c = "square" : c = "circle")
  }

  const [randNumb, setRandNumb] = useState()
  const randNumbGenerator = _ => {
    setRandNumb(c => c = rand(25, 5) )
  }

  const [sq, setSq] = useState([])
  const newSquare = _ => {
    setSq(s => [...s, 'X'] )
  }
  const destroySquare = _ => {
    setSq([])
  }
  
  const [sq2, setSq2] = useState([])
  const newSquare2 = _ => {
    setSq2(s => [...s, "red"] )
  }
  const newSquare3 = _ => {
    setSq2(s => [...s, "blue"])
  }
  const destroySquare2 = _ => {
    setSq2([])
  }
  
  
  return (
    <div className="App">
      <header className="App-header">
        <div className="squares">
          <Square sqci={figure}/>
        </div>
        <div className="squares">
          <button className="green" onClick={circleorSquare}>Change</button>
        </div> 
        <div className="squares">
          <Square sqci={figure2} number={randNumb}/>
        </div>
        <div className="squares">
          <button className="green" onClick={circleorSquare2}>Change</button>
          <button className="green" onClick={randNumbGenerator}>Rand</button>
        </div> 
        <div className="squares">
          {
            sq.map((_, i) => <Square sqci="square"/>)
          }
        </div>
        <div className="squares">
          <button className="green" onClick={newSquare}>Add</button>
          <button className="destroy" onClick={destroySquare}>Destroy squares</button>
        </div>
        <div className="squares">
          {
            sq2.map((redblue, i) => <Square sqci="square" redblue={redblue} />)
          }
          </div>
          <div className="squares">
          <button className="red" onClick={newSquare2}>Red square</button>
          <button className="blue" onClick={newSquare3}>Blue square</button>
          <button className="destroy" onClick={destroySquare2}>Destroy squares</button>
        </div>
      </header>
    </div>
  );
}

export default App;

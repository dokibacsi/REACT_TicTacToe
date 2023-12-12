import './App.css';
import JatekTer from './komponensek/JatekTer.js';
import { useState } from "react";
import TModell from './model/TModel';

function App() {
  const TModel = new TModell() 
  const [list, setList] = useState([TModel.getList()])
  function kattintas(index){
    TModel.setAllapot(index)
    setList([TModel.getList()])

}
  return (
    <div className="App">
      <header className="App-header">
        <h1>Seja</h1>
      </header>
        <main>
          <JatekTer lista = {list} kattintas = {kattintas}/>
          <footer>
          Chipi Chipi Chapa Chapa
          </footer>
        </main>
    </div>
  );
}

export default App;

import './App.css';
import DataHandler from './API/dataHandler';

// const pokeView = state.map((pokemon) => {
//   <span>{pokemon.name}</span>
// })
function App() {
  return (
    <div className="App">
      <DataHandler />
    </div>
  );
}

export default App;

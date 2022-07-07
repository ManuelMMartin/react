import './App.css';

function App() {
  let array =["Charmander","Squiertle","Bulbasaur"]
  return (
    <ul>
      {array.map((pokemon)=><li>{pokemon}</li>)}
    </ul>
  );
}

export default App;

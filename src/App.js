import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar'

function App() {
  
  return (
    <div className="App">
      <NavBar />
      <ItemDetailContainer />
      <ItemListContainer greeting={"Entregado a tiempo"}/>
    </div>
  );
}

export default App;

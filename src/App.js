import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar'

function App() {
  //
  return (
    <div className="d-flex flex-column vh-100">
      <NavBar />
      {/* <ItemDetailContainer></ItemDetailContainer> */}
      <ItemListContainer greeting={"Entregado a tiempo"} />
      <footer className="footer mt-auto py-3 bg-light">
        <div className="container">
          <span className="text-muted">José Nicoleno | Chanchito feliz 2022.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;

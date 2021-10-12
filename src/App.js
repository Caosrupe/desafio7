import './App.css';
import Navbar from './components/NavBar'
import Footer from './components/Footer'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer 
        saludo="Bienvenidos a Mis Productos Destacados" 
      />
      <ItemDetailContainer />
      <Footer />
    </div>
  );
}

export default App;
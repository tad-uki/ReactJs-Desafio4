//@ts-check
import './App.css';
import NavBar from './Components/NavBar/NavBar.jsx';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemCount from './Components/ItemCount/ItemCount.jsx';

function App() {

  function onAdd(){
    alert(`Se añadieron los items a tu Carrito!`)
  }

  return (
    <main> 
      <NavBar/>
      
      <ItemListContainer greeting={"Este es un placeholder!!!!"} />

      <ItemCount stock={5} initial={1} onAdd={onAdd}/>
    </main>
  );
}

export default App;

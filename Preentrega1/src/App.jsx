import NavBar from './components/navBar/navBar.jsx';
import ItemListContainer from './components/itemListConteiner/itemListConteiner.jsx';
import ItemCount from './components/itemCount/itemCount.jsx';
import './styles.css';


function App() {
 
  return (
    <>
      <div className='Contenedor'>
       <NavBar />
       <ItemListContainer text={'Bienvenidos a MusiUniverso'}/>
       <ItemCount/>
      </div>
      
    </>
  )
}

export default App

import NavBar from './components/navBar/navBar.jsx';
import ItemListContainer from './components/itemListConteiner/ItemListConteiner.jsx';
import ItemCount from './components/itemCount/itemCount.jsx';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer.jsx';
import './styles.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
 
  return (
    <>
    <BrowserRouter>
      {/* <div className='Contenedor'>*/}
       <NavBar />
       <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/item' element={<ItemDetailContainer/>}/>
        <Route path='*' element={<h1>Error 484</h1>}/>
       </Routes>
       {/* <ItemListContainer text={'Bienvenidos a MusiUniverso'}/>
       <ItemCount/> */}
      {/* </div> */}
      </BrowserRouter> 
    </>
  
  )
}

export default App

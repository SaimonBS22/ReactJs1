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
       <NavBar />
       <br />
       <hr/>
       <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
       <Route path='/category/:id' element={<ItemListContainer/>}/>
       <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='*' element={<h1>Error 484</h1>}/>
       </Routes>
       <ItemCount/> 
      </BrowserRouter> 
    </>
  
  )
}

export default App

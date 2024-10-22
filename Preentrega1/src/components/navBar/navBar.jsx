import CardWidget from "../cardWidget/cardWidget"
import { Link } from 'react-router-dom'
const NavBar = () =>{
    return(
        <nav className="contenedorNavBar">
            <Link to='/'>
                <h2 className="tituloNavBar">MusiUniverso</h2>
            </Link>
            <div className="contenedorBotones"> 
                <Link to='/category/beauty'>
                   <button className="botonNavBar">Beauty</button>
                </Link>
                <Link to='/category/Fragrances'>
                    <button className="botonNavBar">Fragrances</button>
                </Link>
                <Link to='/category/Furniture'>
                    <button className="botonNavBar">Furniture</button>
                </Link>
                <Link to='/category/Groceries'>
                    <button className="botonNavBar">Groceries</button>
                </Link>
            </div>
            <CardWidget/>
        </nav>
        
    )
} 

export default NavBar
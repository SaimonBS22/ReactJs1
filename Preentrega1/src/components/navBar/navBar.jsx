import CardWidget from "../cardWidget/cardWidget"
import { Link } from "react-router-dom"

const NavBar = () =>{
    return(
        <nav className="contenedorNavBar">
            <h2 className="tituloNavBar">Nuestros Productos</h2>
            <div className="contenedorBotones"> 
                <button className="botonNavBar">Celulares</button>
                <button className="botonNavBar">Laptops</button>
                <button className="botonNavBar">Televisiones</button>
            </div>
            <CardWidget/>
        </nav>
    )
} 

export default NavBar
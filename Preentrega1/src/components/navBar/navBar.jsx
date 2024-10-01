import CardWidget from "../cardWidget/cardWidget"

const NavBar = () =>{
    return(
        <nav>
            <h2>Nuestros Productos</h2>
            <div className="contenedorBotones"> 
                <button>Celulares</button>
                <button>Electrodomesticos</button>
                <button>Televisiones</button>
            </div>
            <CardWidget/>
        </nav>
    )
} 

export default NavBar
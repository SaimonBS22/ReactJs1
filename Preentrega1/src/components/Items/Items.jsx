import { Link } from "react-router-dom"
function Items({item}){
        return(
           <div>
            <img src={item.thumbnail} className='imagenProducto' />
            <p className="parrafoProductos">{item.nombre}</p>
            <h3>{item.title}</h3>
            <Link to={`/item/${item.id}`}><button className='botonDetalles'>Ver Mas</button></Link>
           </div>
        )
}


export default Items
function Items({item}){
        return(
           <div>
            <img src={item.thumbnail} className='imagenProducto' />
            <p className="parrafoProductos">{item.nombre}</p>
            <h3>{item.title}</h3>
            <p className='categoria'>{item.category}</p>
            <p className='descripcion'>{item.description}</p>
            
            <button className='botonDetalles'>Ver detalles</button>
           </div>
        )
}


export default Items
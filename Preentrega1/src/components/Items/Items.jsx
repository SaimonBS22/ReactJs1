function Items({item}){
        return(
           <div>
              {item.imagen && (
                <img key={item.id} className='imagenProducto' src={item.imagen} />
                )}
            <p className="parrafoProductos">{item.nombre}</p>
           </div>
        )
}


export default Items
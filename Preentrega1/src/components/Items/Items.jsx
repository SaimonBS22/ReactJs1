import {useState} from 'react'
function Items({item}){
        return(
           <div>
              {item.imagen && (
                <img key={item.id} className='imagenProducto' src={item.imagen} />
                )}
            <p className="parrafoProductos">{item.nombre}</p>
            <p>{item.precio}</p>
            <button>Ver detalles</button>
           </div>
        )
}


export default Items
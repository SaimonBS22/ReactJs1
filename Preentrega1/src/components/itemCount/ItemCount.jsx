import {useState, useContext} from 'react'
import { cartContext } from '../../context/cartContext'

function ItemCount({detail}){
    const [count, setCount] = useState(0);
    const { addToCart } = useContext(cartContext)

    const sumar = ()=> {setCount(count + 1)}
    const restar = ()=> {setCount(count - 1)} 
    const handleAddToCart = ()=> addToCart({...detail, quantity: count})
     return(
        <div className='conteinerItemCount'>
            <p>{count}</p>
        <button onClick={restar} className='botonItemCount'>-</button>
        <button onClick={ handleAddToCart} className='botonCarrito'>Agregar al carrito</button>
        <button onClick={sumar} className='botonItemCount'>+</button>
        </div>
        
        
        
     )
}

export default ItemCount;
import {useState} from 'react'
function ItemCount(){
    const [count, setCount] = useState(0);
    const sumar = ()=>{
        setCount(count + 1)
    }
    const restar = ()=>{
        setCount(count - 1)
    } 
     return(
        <div className='conteinerItemCount'>
            <p>{count}</p>
        <button onClick={restar} className='botonItemCount'>-</button>
        <button className='botonCarrito'>Agregar al carrito</button>
        <button onClick={sumar} className='botonItemCount'>+</button>
        </div>
        
        
        
     )
}

export default ItemCount;
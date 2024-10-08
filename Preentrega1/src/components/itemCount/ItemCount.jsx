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
        <div>
            <p>{count}</p>
        <button onClick={restar}>-</button>
        <button>Agregar al carrito</button>
        <button onClick={sumar}>+</button>
        </div>
        
        
        
     )
}

export default ItemCount;
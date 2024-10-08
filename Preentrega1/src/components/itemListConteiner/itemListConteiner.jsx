import {useEffect, useState} from 'react';
import {productos} from '../data/productos';
function ItemListContainer(){
    const [item, setItem] = useState()
    const getProductos = ()=> new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(productos)
        },3000)
    }) 
    useEffect(()=>{
        getProductos()
        .then(resolve=>setItem(resolve))
    },[])
    return(
        <div></div>
    )
}


export default ItemListContainer
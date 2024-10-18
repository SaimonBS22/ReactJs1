import {useEffect, useState} from 'react';
import {productos} from '../data/productos';
import ItemList from '../ItemList/ItemList';

function ItemListContainer(){
    const [items, setItem] = useState([])
    const getProductos = ()=> new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(productos)
        },3000)
    }) 
    useEffect(()=>{
        getProductos()
        .then(resolve=>setItem(resolve))
    },[])
    return (
        <div className='conteinerProductos'>
            <ItemList items={items}/>
        </div>
    )
}


export default ItemListContainer
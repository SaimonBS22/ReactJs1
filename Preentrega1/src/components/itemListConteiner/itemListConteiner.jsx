import {useEffect, useState} from 'react';
import ItemList from '../ItemList/ItemList';

function ItemListContainer(){
    const [items, setItem] = useState([])
    useEffect(()=>{
        const url = 'https://dummyjson.com/products';
        fetch(url)
        .then(res => res.json())
        .then(res => setItem(res.products))
    },[])
    return (
        <div className='conteinerProductos'>
            <ItemList items={items}/>
        </div>
    )
}


export default ItemListContainer
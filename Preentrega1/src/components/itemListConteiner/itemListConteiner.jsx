import {useEffect, useState} from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

function ItemListContainer(){
    const [items, setItem] = useState([])
    const {id} = useParams();


    useEffect(()=>{
        const url = 'https://dummyjson.com/products';
        const urlCategory = `https://dummyjson.com/products/category/${id}`

        fetch(id ? urlCategory : url)
        .then(res => res.json())
        .then(res => setItem(res.products))

    },[id])
    return (
        <div className='conteinerProductos'>
            <ItemList items={items}/>
        </div>
    )
}


export default ItemListContainer
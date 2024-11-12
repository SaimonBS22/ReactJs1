import {useEffect, useState, useContext} from 'react';
import { getItems, getCategoryItems } from '../../firebase/db';
import { cartContext } from '../../context/cartContext';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

function ItemListContainer(){
    const [items, setItem] = useState([])
    const {id} = useParams();

    const value = useContext(cartContext);

    useEffect(()=>{
      if(!id){
        getItems()
            .then(res => setItem(res))
      } else{
        getCategoryItems(id)
        .then(res => setItem(res))
      }
           
    },[id])
    return (
        <div className='conteinerProductos'>
            <ItemList items={items}/>
        </div>
    )
}


export default ItemListContainer
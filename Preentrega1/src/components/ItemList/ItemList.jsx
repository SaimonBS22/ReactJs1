import Items from "../Items/Items"
function ItemList({items}){
    return(
        <>
        {items.map(item => <Items item={item} key={item.id}/>)}
        </>
          )
}


export default ItemList
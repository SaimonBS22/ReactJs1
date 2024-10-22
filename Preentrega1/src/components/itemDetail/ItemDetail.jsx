function ItemDetail({detail}){
    return(
        <div className="contenedorDetail">
            <img src={detail?.thumbnail} className="imgDetail" />
            <h2>{detail?.title}</h2>
            <p>{detail?.description}</p>
            <p className="parrafoDetailPrecio">${detail?.price}</p>
            <p>Rating: <b>{detail?.rating}</b></p>
            <p>Stock: <b>{detail?.stock}</b></p>
        </div>
    )
}

export default ItemDetail
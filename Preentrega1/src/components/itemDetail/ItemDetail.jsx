function ItemDetail({detail}){
    return(
        <div className="contenedorDetail">
            <img src={detail?.thumbnail} className="imgDetail" />
            <h2>{detail?.title}</h2>
            <h4>{detail?.category}</h4>
            <p>{detail?.description}</p>
            <p>${detail?.price}</p>
            <p>Rating:{detail?.rating}</p>
            <p>Stock:{detail?.stock}</p>
        </div>
    )
}

export default ItemDetail
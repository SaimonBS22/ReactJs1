import { cartContext } from "./cartContext"
import { useState } from "react"

function CartProvider({ children}){
    const [cart, setCart] = useState([])
    const addToCart = item => setCart([...cart, item])
    
    const getQuantity = () => {
        const quantityOnly = cart.map(item => item.quantity)
            const total = quantityOnly.reduce((acc, current) => acc + current, 0)
            return total
    }

    return(
       <cartContext.Provider value={{cart, addToCart, getQuantity}}>
            {children}
       </cartContext.Provider>
    )
}

export default CartProvider
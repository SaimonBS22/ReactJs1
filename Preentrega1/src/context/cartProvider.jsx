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

    const removeCart = () => {setCart([])}

    const getTotal = ()=>{
            const getPrice = cart.map(item => item.price * item.quantity)
                const totalPrice = getPrice.reduce((acc, current) => acc + current, 0)
                return totalPrice
    }

    return(
       <cartContext.Provider value={{cart, addToCart, getQuantity, removeCart, getTotal}}>
            {children}
       </cartContext.Provider>
    )
}

export default CartProvider
import {  useCart } from "../../context/cartContext"
import { createOrder } from "../../firebase/db"
import { serverTimestamp } from "firebase/firestore"


function Cart(){
    const { cart, getTotal} = useCart()
    const handleSubmit = (e) =>{
        e.preventDefault()

        const form = e.target
        const nombre = form[0].value
        const email = form[1].value
        const telefono = form[2].value
        const order = {
            buyer: {nombre, email, telefono},
            items: cart,
            dia: serverTimestamp(),
            total: getTotal()
        }
        console.log(order)
        
    }
    
    return(
        <div>
            {cart.map(prod => (
                <div key={prod.id}>
                    <p>{prod.title} Cantidad:{prod.quantity}</p>
                </div>
            ))}
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Nombre" required/>
                    <input type="email" placeholder="Ejemplo@ejemplo.com" required />
                    <input type="text" placeholder="Telefono" required/>
                    <button type="submit">Finalizar Compra</button>
                </form>
            </div>
        </div>
    )
}

export default Cart
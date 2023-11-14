import cart from '../assets/cart.png'
export const CartWidget  = () => {
    return (
    <>
        <img className="cart-img" src= {cart} alt="Carrito" />
        <span className="cart-quant">5</span>
    </>
    )
};
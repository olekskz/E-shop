import React from "react";
import "./cart.css";
import { useCart } from "../../cartProvider";

const Cart = () => {

    const { isCartOpen, setIsCartOpen } = useCart();

    return (
        <div className={`cart-container ${isCartOpen ? "active" : ""}`}>
            <div className="header-cart">
                <h2 className="header-cart-h2">Cart</h2>
                <img className="header-cart-img" src="/assets/xmark-solid.svg" alt="close-icon" width="24" height="24" onClick={() => setIsCartOpen(false)}/>
            </div>
            <div className="cart-items">

            </div>

            <div className="cart-summary">
                <div className="subtotal">
                    <span>Subtotal:</span>
                    <span className="subtotal-amount">$999</span>
                </div>
                <button className="checkout-btn">Checkout</button>
            </div>
        </div>
    );
}

export default Cart;
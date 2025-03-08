import React from "react";
import "./cart.css";
import { useCart } from "../../cartProvider";
import { useSelector } from "react-redux";
import CartItem from "./cartItem/cartItem";

const Cart = () => {
    const { isCartOpen, setIsCartOpen } = useCart();
    const cartItems = useSelector((state) => state.cartReducer.cart); 
    const totalPrice = cartItems.reduce((sum, product) => sum + (product.price * product.quantity), 0);

    return (
        <div className={`cart-container ${isCartOpen ? "active" : ""}`}>
            <div className="header-cart">
                <h2 className="header-cart-h2">Cart</h2>
                <img 
                    className="header-cart-img" 
                    src="/assets/xmark-solid.svg" 
                    alt="close-icon" 
                    width="24" 
                    height="24" 
                    onClick={() => setIsCartOpen(false)}
                />
            </div>
            <div className="cart-items">
                {cartItems.map(product => (
                    <CartItem key={product.id} product={product} />
                ))}
                {cartItems.length === 0 && (
                    <p className="empty-cart">Your cart is empty</p>
                )}
            </div>

            <div className="cart-summary">
                <div className="subtotal">
                    <span>Subtotal:</span>
                    <span className="subtotal-amount">${totalPrice.toFixed(2)}</span>
                </div>
                <button 
                    className="checkout-btn"
                    disabled={cartItems.length === 0}
                >
                    Checkout
                </button>
            </div>
        </div>
    );
}

export default Cart;
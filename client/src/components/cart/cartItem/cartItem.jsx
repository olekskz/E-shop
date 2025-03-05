import React from "react";
import "./cartItem.css";

const CartItem = () => {
    return (
    <div className="cart-item">
        <img className="cart-item-img" src="/assets/Знімок екрана 2025-02-15 114206.png" alt="Product 1" />
        <div className="cart-item-info">
            <h3 cart-item-info-h3>iPhone 15 Pro</h3>
            <p className="price">$999</p>
            <p className="description">256GB, Natural Titanium</p>
        </div>
        <div className="cart-item-quantity">
            <button className="quantity-btn minus">-</button>
            <span className="quantity">1</span>
            <button className="quantity-btn plus">+</button>
        </div>
        <button className="remove-from-cart">Remove</button>
    </div>
    );
}

export default CartItem;
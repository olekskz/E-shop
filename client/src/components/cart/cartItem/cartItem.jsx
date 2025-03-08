import React from "react";
import "./cartItem.css";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, removeProduct } from "../../../features/cartSlice";

const CartItem = ({ product }) => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cartReducer.cart);
    
    const productInCart = cart.find((item) => item.id === product.id);
    const quantity = productInCart ? productInCart.quantity : 0;

    const handleAddProduct = () => {
        dispatch(addProduct({
            ...product,
            quantity: 1
        }));
    };

    const handleRemoveProduct = () => {
        if (quantity === 1) {
            dispatch(removeProduct(product));
        } else {
            dispatch(removeProduct({
                ...product,
                quantity: 1
            }));
        }
    };

    
    const defaultImage = "/assets/product-placeholder.png";

    return (
        <div className="cart-item">
            <img 
                className="cart-item-img" 
                src={product.image || defaultImage} 
                alt={product.name}
                onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = defaultImage;
                }}/>
            <div className="cart-item-info">
                <h3 className="cart-item-info-h3">{product.name}</h3>
                <p className="price">${product.price}</p>
                <p className="description">{product.mainDescription}</p>
            </div>
            <div className="cart-item-quantity">
                <button 
                    className="quantity-btn-minus" 
                    onClick={handleRemoveProduct}
                    disabled={quantity === 0}>
                    -
                </button>
                <span className="quantity">{quantity}</span>
                <button 
                    className="quantity-btn-plus" 
                    onClick={handleAddProduct}>
                    +
                </button>
            </div>
            <button 
                className="remove-from-cart"
                onClick={() => dispatch(removeProduct(product))}>
                Remove
            </button>
        </div>
    );
};

export default CartItem;
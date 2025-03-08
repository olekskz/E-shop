import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../cartProvider";
import "./header.css";

const Header = () => {
    const [loginForm, setLoginForm] = useState(false);
    const { setIsCartOpen } = useCart();

    const showCart = () => {
        setIsCartOpen(prev => !prev);
        if (loginForm) {
            setLoginForm(false);
        }
    }

    const showLoginForm = () => {
        setLoginForm(!loginForm);
        if (setIsCartOpen) {
            setIsCartOpen(false);
        }
    };

    return (
        <header className="header">
            <nav>
                <ul className="nav-ul">
                    <li className="nav-li">
                        <Link className="nav-a">Electrolucid</Link>
                    </li>
                    <li className="nav-li">
                        <input className="nav-input" type="text" placeholder="Search..." />
                    </li>
                    <li className="nav-li">
                        <img
                            className="nav-img"
                            src="/assets/user-regular.svg"
                            alt="profile-icon"
                            width="24"
                            height="24"
                            onClick={showLoginForm}
                        />
                    </li>
                    <li className="nav-li">
                        <img
                            className="nav-img"
                            src="/assets/cart-shopping-solid.svg"
                            alt="cart-icon"
                            width="24"
                            height="24"
                            onClick={showCart} 
                        />
                    </li>
                </ul>
            </nav>

            
            <div className={`login-form ${loginForm ? "active" : ""}`}>
                <h2 className="login-form-h2">Login</h2>
                <form className="login-form-form">
                    <input className="login-form-input" type="email" name="username" placeholder="Email" />
                    <input className="login-form-input" type="password" name="password" placeholder="Password" />
                    <button className="submit-login-button" type="submit">Login</button>
                    <p>Or login with</p>
                    <div className="social-media">
                        <img
                            className="google-icon"
                            src="/assets/google-brands-solid.svg"
                            alt="google-icon"
                            width="21"
                            height="21"
                        />
                        <img
                            className="apple-icon"
                            src="/assets/apple-brands-solid.svg"
                            alt="apple-icon"
                            width="24"
                            height="24"
                        />
                        <Link to="/register" className="social-media-a">Sign-up</Link>
                    </div>
                </form>
            </div>
        </header>
    );
};

export default Header;


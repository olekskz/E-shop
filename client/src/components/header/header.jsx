import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useCart } from "../../cartProvider";
import "./header.css";

const Header = () => {
    const [loginForm, setLoginForm] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [loginFormData, setLoginFormData] = useState({
        email: "",
        password: ""
    });
    const { setIsCartOpen } = useCart();
    const navigate = useNavigate();

    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (searchQuery.trim()) {
                navigate(`/search?query=${encodeURIComponent(searchQuery.trim())}`);
            }
        }
    };

    const showCart = () => {
        setIsCartOpen(prev => !prev);
        if (loginForm) {
            setLoginForm(false);
        }
    }

    const showLoginForm = () => {
        const token = localStorage.getItem("token");
        if (token) {
            navigate("/profile");
        } else {
            setLoginForm(!loginForm);
            if (setIsCartOpen) {
                setIsCartOpen(false);
            }
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = loginFormData;
        
        try {
            const response = await fetch("http://localhost:3001/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem("token", data.token);
                localStorage.setItem("user", JSON.stringify(data.user));
                setLoginForm(false);
                navigate('/');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <header className="header">
            <nav>
                <ul className="nav-ul">
                    <li className="nav-li">
                        <Link className="nav-a" to="/">Electrolucid</Link>
                    </li>
                    <li className="nav-li">
                        <input 
                            className="nav-input"
                            type="text"
                            placeholder="Search..." 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyPress={handleSearch}
                        />
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
                <form className="login-form-form" onSubmit={handleSubmit}>
                    <input 
                        className="login-form-input" 
                        type="email" 
                        name="email"  
                        placeholder="Email" 
                        value={loginFormData.email}
                        onChange={handleChange} 
                    />
                    <input 
                        className="login-form-input" 
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        value={loginFormData.password}
                        onChange={handleChange} 
                    />
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


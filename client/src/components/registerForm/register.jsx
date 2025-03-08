import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import "./register.css";

const Register = () => {
    const [input, setInput] = useState({
        firstName: "",  // Changed from firstname
        lastName: "",   // Changed from lastname
        phone: "",
        email: "",
        password: "",
        passwordRepeat: ""
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordRepeat, setShowPasswordRepeat] = useState(false);
    const [isPasswordMatch, setIsPasswordMatch] = useState(true);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setInput(prevValue => ({
            ...prevValue,
            [name]: value
        }));

        
        if (name === 'password' || name === 'passwordRepeat') {
            if (name === 'password') {
                setIsPasswordMatch(value === input.passwordRepeat);
            } else {
                setIsPasswordMatch(value === input.password);
            }
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:3001/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(input)
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('token', data.token);
                setInput({
                    firstName: "",
                    lastName: "",
                    phone: "",
                    email: "",
                    password: "",
                    passwordRepeat: ""
                });
                navigate('/');
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    const togglePasswordRepeatVisibility = () => {
        setShowPasswordRepeat(!showPasswordRepeat);
    }


    return (
        <div className="register-container">
            <h1 className="register-container-h1">New user registration</h1>
            <form className="register-container-form" onSubmit={handleSubmit}>
                <input 
                    className="register-container-input" 
                    type="text" 
                    name="firstName"  
                    placeholder="First name*" 
                    required 
                    onChange={handleChange} 
                />
                <input 
                    className="register-container-input" 
                    type="text" 
                    name="lastName"   
                    placeholder="Last name*" 
                    required 
                    onChange={handleChange} 
                />
                <input 
                    className="register-container-input" 
                    type="tel"  
                    pattern="[0-9]{10}" 
                    title="Please enter a valid phone number (10 digits)" 
                    name="phone" 
                    placeholder="Phone*" 
                    required 
                    onChange={handleChange} 
                />
                <input 
                    className="register-container-input" 
                    type="email" 
                    name="email" 
                    placeholder="Email*" 
                    required 
                    onChange={handleChange} 
                />
                <div className="password-container">
                    <input 
                        className={`password-container-input ${!isPasswordMatch ? 'password-container-wrong-input' : ''}`}
                        type={showPassword ? "text" : "password"}
                        name="password" 
                        placeholder="Password*" 
                        required 
                        onChange={handleChange} 
                    />
                    <button 
                        type="button" 
                        className="toggle-password"
                        onClick={togglePasswordVisibility}
                    >
                        <img 
                            className="toggle-password-img"
                            src={showPassword ? "/assets/eye-slash-regular.svg" : "/assets/eye-regular.svg" }
                            alt="show password" 
                        />
                    </button>
                </div>
                <div className="password-container">
                    <input 
                        className={`password-container-input ${!isPasswordMatch ? 'password-container-wrong-input' : ''}`}
                        type={showPasswordRepeat ? "text" : "password"}
                        name="passwordRepeat" 
                        placeholder="Repeat password*" 
                        required 
                        onChange={handleChange} 
                    />
                    <button 
                        type="button" 
                        className="toggle-password"
                        onClick={togglePasswordRepeatVisibility}
                    >
                        <img 
                            className="toggle-password-img"
                            src={showPasswordRepeat ? "/assets/eye-slash-regular.svg" : "/assets/eye-regular.svg" }
                            alt="show password" 
                        />
                    </button>
                </div>
                {!isPasswordMatch && (
                    <p className="error-message" >Passwords do not match</p>
                )}
                <button 
                    type="submit" 
                    className="submit-register-button"
                    disabled={!isPasswordMatch}
                >
                    Sign-in
                </button>
            </form>
        </div>
    );
};

export default Register;
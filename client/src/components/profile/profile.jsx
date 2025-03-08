import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import "./profile.css";

const Profile = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        email: "",
        phone: "",
    });

    useEffect(() => {
        const token = localStorage.getItem('token');
        const user = localStorage.getItem('user');

        if (!token || !user) {
            navigate('/');
        }

        setUserData(JSON.parse(user));
    }, [navigate]);


    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/');
    };

    return (
        <div className="profile-section">
            <h2 className="profile-section-h2">Profile</h2>
                <div className="profile-info">
                    <div className="sign-up-email">
                        <label className="profile-info-label">Email:</label>
                        <div className="info-container">
                            <span>{userData.email}</span>
                        </div>
                    </div>
                        <div className="contact-email">
                            <label className="profile-info-label">Contact email: </label>
                            <div className="info-container">
                                <span>{userData.email}</span>
                                <button className="contact-email-button"><img src="/assets/pencil-solid.svg" class="edit-icon" alt="Edit" width="16" height="16" /></button>
                            </div>
                        </div>
                        <div className="phone">
                            <label className="profile-info-label">Phone: </label>
                            <div className="info-container">
                                <span>{userData.phone}</span>
                                <button className="phone-button"><img src="/assets/pencil-solid.svg" class="edit-icon" width="16" height="16" /></button>
                            </div>
                        </div>
                    <button className="change-password-button">Change password</button>
                    <button className="logout-button" onClick={handleLogout}>
                        Logout
                    </button>
            </div>
        </div>
    );
}

export default Profile;
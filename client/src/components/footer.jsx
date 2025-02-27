import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer-section">
                    <h4 className="footer-section-h4">About us</h4>
                    <ul className="footer-section-ul">
                        <li className="footer-section-li"><Link className="footer-section-a" to="#">Company</Link></li>
                        <li className="footer-section-li"><Link className="footer-section-a" to="#">Contacts</Link></li>
                        <li className="footer-section-li"><Link className="footer-section-a" to="#">Vacancies</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4 className="footer-section-h4">Help</h4>
                    <ul className="footer-section-ul">
                        <li className="footer-section-li"><Link className="footer-section-a" to="#">Delivery</Link></li>
                        <li className="footer-section-li"><Link className="footer-section-a" to="#">Payment</Link></li>
                        <li className="footer-section-li"><Link className="footer-section-a" to="#">Reurn</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4 className="footer-section-h4">Follow us</h4>
                    <ul className="footer-section-ul">
                        <li className="footer-section-li"><Link className="footer-section-a" to="#">Instagram</Link></li>
                        <li className="footer-section-li"><Link className="footer-section-a" to="#">Facebook</Link></li>
                        <li className="footer-section-li"><Link className="footer-section-a" to="#">Twitter</Link></li>
                    </ul>
                </div>
            </footer>
            <div className="footer-bottom">
                <p>&copy; 2025 ElectroLucid. All rights reserved.</p>
            </div>
        </>
   )
}

export default Footer;
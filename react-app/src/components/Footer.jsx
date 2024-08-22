import React from "react";
import logo from '../images/logo.jpg';

const Footer = () => {
    return (
        <footer>
            <section className="footer">
                <div className="company-info">
                    <img src={logo} alt="" />
                    <p>We are a family owned restaurant</p>

                </div>
                
                <div>
                    <h3>important Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Menu</a></li>
                        <li><a href="/">Reservation</a></li>
                        <li><a href="/">Order</a></li>
                        <li><a href="/">Login</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Contacts</h3>
                    <ul>
                        <li>Adress: 123 Ontario, Usa</li>
                        <li>Phone: 123 3890 3844 3380</li>
                        <li>Email: little@lemmon.com</li>
                    </ul>
                </div>
                <div>
                    <h3>Social Medai Links</h3>
                    <ul>
                        <li><a href="/">Facebook</a></li>
                        <li><a href="/">X</a></li>
                        <li><a href="/">Instagram</a></li>
                    </ul>
                </div>
            </section>
        </footer>
    )
}

export default Footer;

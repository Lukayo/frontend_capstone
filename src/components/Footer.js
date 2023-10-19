import React from "react";
import flogo from '../assets/footer-logo.png'

const Footer = () => {
    return (
        <footer>
            <img src={flogo} alt='little lemon logo'/>
            <ul>
                <li> <h3>Navigation</h3> </li>
                <li> <a href='/'>Home</a> </li>
                <li> <a href='/'>About</a> </li>
                <li> <a href='/'>Menu</a> </li>
                <li> <a href='/'>Reservations</a> </li>
                <li> <a href='/'>Order</a> </li>
                <li> <a href='/'>Login</a> </li>
            </ul>
            <ul>
                <li> <h3>Contact</h3> </li>
                <li> <a href='/'>Address</a> </li>
                <li> <a href='/'>(XXX)XXX-XXXX</a> </li>
                <li> <a href='/'>lillemon@goomail.com</a> </li>
            </ul>
            <ul>
                <li> <h3>Connect</h3> </li>
                <li> <a href='/'>Facebook</a> </li>
                <li> <a href='/'>Instagram</a> </li>
                <li> <a href='/'>X</a> </li>
            </ul>
        </footer>
    );
};

export default Footer;
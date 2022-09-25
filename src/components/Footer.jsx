import "./Footer.css"
import mobile from "../Assets/mobile.jpg"
import { FaFacebook, FaDiscord, FaTwitter, FaTelegram, FaInstagram } from "react-icons/fa"

import React from 'react'

export default function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-content">
                <h1 className="footer-brand">Cryptooes</h1>
                <div className="mobile">
                    <img className="mobile-img" src={mobile} alt='mobile app' />
                    <div className="mobile-text">
                        <h5 className="mobile-h5">Coming Soon</h5>
                        <p className="mobile-p">Our Mobile App</p>
                    </div>
                </div>
            </div>
            <div className="footer-content">
                <h4 className="footer-header">Features</h4>
                <ul className="list">
                    <li>Promotion</li>
                    <li>Privacy</li>
                    <li>Contact</li>
                    <li>Subscribe & Earn</li>
                </ul>
            </div>
            <div className="footer-content news">
                <h4 className="footer-header ">Subscribe to Our Newsletter</h4>
                <p className="newsletter">Join over 2000+ crypto enthusiast and get first hand informatio</p>
                <input className="footer-input" placeholder="Email Address" />
                <button className="btn">Subscribe Now!</button>
            </div>
            <div className="footer-content">
                <h4 className="footer-header">Follow us On Social Media</h4>
                <div className="footer-icon">
                    <FaDiscord className="icon"/>
                    <FaFacebook className="icon"/>
                    <FaTelegram className="icon"/>
                    <FaInstagram className="icon"/>
                    <FaTwitter className="icon"/>
                </div>
            </div>
        </div>
    )
}

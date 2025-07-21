import React from 'react'
import './Footer.css';
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-heading'><h4>Connect With Us.</h4></div>
            
            <div className='footer-icons'>
                <FaSquareWhatsapp style={{ color: "#25D366" }} />
                <div style={{
                    background: 'linear-gradient(45deg, #F58529, #DD2A7B, #8134B8, #515BD4)',
                    borderRadius: '50%',
                    width: '60px',
                    height: '60px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <FaInstagramSquare style={{ color: 'white', fontSize: '32px' }} />
                </div>
                
                <FaSquareXTwitter />

                <FaTelegram style={{ color: "#229ED9" }} />
            </div>
            <div className='footer-rights'><p>© 2025 Anjali Daharwal. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer

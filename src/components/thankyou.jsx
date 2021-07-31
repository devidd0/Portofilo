import React from 'react'
import { Link } from 'react-router-dom'

const ThankYou = () => {
    return (
        <div className="h-[calc(100vh-81px)] bg-[#222] flex items-center justify-center">
            <div className="thankyou-content">
                <h1 className="thankyou-header-text">Thank you</h1>
                <p className="thankyou-message">Thank you for Contact wiht me Check your email If you get confirmation email</p>
                <Link to="/" className="thankyou-gotothemainpage">Go To The Main Page</Link>
            </div>
        </div>
    )
}

export default ThankYou

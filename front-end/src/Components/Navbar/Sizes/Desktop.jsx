import { useState } from "react";
import { BiLogIn, BiSearch } from "react-icons/bi";

const DesktopNav = () => {
    return (
        <div className="navbar navbar-large">
            {/* Logo */}
            <div
            className="navlogo navlogo-large"
            onClick={() => window.location.href = "/"}
            >
                <p>Radiance</p>
                <p>Gear</p>
            </div>

            {/* Items */}
            <div className="navbar-items navbar-items-large">
                <div 
                onClick={() => window.location.href = "/"} 
                className="navitem navitem-large">
                    Home
                </div>
                <div 
                onClick={() => window.location.href = "/store"} 
                className="navitem navitem-large">
                    Store
                </div>
                <div 
                onClick={() => window.location.href = "/contact"} 
                className="navitem navitem-large">
                    Contact
                </div>
            </div>

            <div className="search-auth search-auth-large">
                <div className="navbar-search">
                    <BiSearch size={24} />
                </div>
                <div className="navbar-user">
                    <BiLogIn size={24} />
                </div>
            </div>
        </div>
    )
}

export default DesktopNav;
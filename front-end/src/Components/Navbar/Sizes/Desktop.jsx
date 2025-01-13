import { useState } from "react";
import { BiLogIn, BiSearch } from "react-icons/bi";
import ShopComponent from "../Elements/ShopComponent";

const DesktopNav = () => {
    const [hoveredItem, setHoveredItem] = useState(false);
    
    return (
        <div className="navbar navbar-large">
            {/* Logo */}
            <div
            className="navlogo navlogo-large"
            onClick={() => window.location.href = "/"}
            onMouseEnter={() => setHoveredItem(false)}
            >
                <p>Radiance</p>
                <p>Gear</p>
            </div>

            {/* Items */}
            <div className="navbar-items navbar-items-large">
                <div 
                onClick={() => window.location.href = "/"} 
                className="navitem navitem-large"
                onMouseEnter={() => setHoveredItem(false)}>
                    Home
                </div>
                <div 
                onClick={() => window.location.href = "/store"} 
                className="navitem navitem-large"
                onMouseEnter={() => {setHoveredItem(true)}} >
                    Shop
                </div>
                <div 
                onClick={() => window.location.href = "/contact"} 
                className="navitem navitem-large"
                onMouseEnter={() => setHoveredItem(false)}>
                    Support
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

            {/* Shop Div */}
            <ShopComponent visible={hoveredItem} unhover={() => {setHoveredItem(false)}} />
        </div>
    )
}

export default DesktopNav;
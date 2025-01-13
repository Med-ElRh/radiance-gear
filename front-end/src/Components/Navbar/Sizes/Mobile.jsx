import { useState } from "react";
import { BiLogIn, BiSearch } from "react-icons/bi";
import { PiList } from "react-icons/pi";
import { IoClose } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import ShopComponent from "../Elements/ShopComponent";


const MobileNav = () => {
    const [showNav, setShowNav] = useState(false);
    const [sideShop, setSideShop] = useState(false);

    const handleShowShop = () => {
        sideShop ? setSideShop(false) : setSideShop(true);
    }

    const handleSideNavClose = () => {
        setShowNav(false);
        setSideShop(false);
    }

    return (
        <>        
        <div className="navbar navbar-small">
            <div className="navbar-hide" onClick={() => {setShowNav(true)}}>
                <PiList size={24} />
            </div>

            {/* Logo */}
            <div
            className="navlogo"
            onClick={() => window.location.href = "/"}
            >
                <p>Radiance</p>
                <p>Gear</p>
            </div>

            {/* Search */}
            <div className="navbar-search">
                <BiSearch size={24} />
            </div>
        </div>
        <div className={`navside-container ${showNav ? "nav-visible" : ""}`}>
            {/* Items */}
            <div className={`nav-side `}>
                {/* Sidebar items */}
                <div className="navbar-items navbar-items-small">
                    <div 
                    onClick={() => window.location.href = "/"} 
                    className="navitem navitem-small">
                        <p>Home</p>
                    </div>
                    <div className="navitem navitem-small">
                        <p>Shop</p>
                        <p className="navshop-arrow" onClick={handleShowShop}>
                            {sideShop ? (
                                <IoIosArrowUp size={24} />
                            ) : (
                                <IoIosArrowDown size={24} />
                            )}
                        </p>
                    </div>
                    <ShopComponent visible={sideShop} />
                    <div 
                    onClick={() => window.location.href = "/contact"} 
                    className="navitem navitem-small">
                        <p>Support</p>
                    </div>
                </div>                
            </div>
            {/* Sidebar close button */}
            <div className={`nav-close`} onClick={handleSideNavClose}>
                <IoClose size={30} />
            </div>
        </div>
        </>
    )
}


export default MobileNav;
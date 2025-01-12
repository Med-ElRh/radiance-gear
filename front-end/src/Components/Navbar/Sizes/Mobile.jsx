import { useState } from "react";
import { BiLogIn, BiSearch } from "react-icons/bi";
import { PiList } from "react-icons/pi";
import { IoClose } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";


const MobileNav = () => {
    const [showNav, setShowNav] = useState(false);

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
        <div>
            {/* Items */}
            <div className={`nav-side ${showNav ? "nav-visible" : ""}`}>
                <div className="nav-close" onClick={() => setShowNav(false)}>
                    <IoClose size={24} />
                </div>
                <div className="navbar-items navbar-items-small">
                    <div 
                    onClick={() => window.location.href = "/"} 
                    className="navitem navitem-small">
                        <p>Home</p>
                        <p><IoIosArrowForward size={24} /></p>
                    </div>
                    <div 
                    onClick={() => window.location.href = "/store"} 
                    className="navitem navitem-small">
                        <p>Store</p>
                        <p><IoIosArrowForward size={24} /></p>
                    </div>
                    <div 
                    onClick={() => window.location.href = "/contact"} 
                    className="navitem navitem-small">
                        <p>Contact</p>
                        <p><IoIosArrowForward size={24} /></p>
                    </div>
                </div>

                <div className="">
                    
                </div>
            </div>
        </div>
        </>
    )
}


export default MobileNav;
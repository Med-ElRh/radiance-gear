import { navShopElements } from "../../../Data/NavbarShop";

const ShopComponent = ({unhover, visible}) => {
    return (
        <div className={`navbar-shop ${visible ? "navshop-visible" : ""}`} onMouseLeave={unhover}>
            {navShopElements && navShopElements.map((e) => (
                <div className="navshop-card">
                    <div className="navshop-title">
                        {e.name}
                    </div>
                    <div className="navshop-image">
                        <img src={e.image} />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ShopComponent;
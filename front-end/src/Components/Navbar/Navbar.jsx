import { useMediaQuery } from "react-responsive"
import DesktopNav from "./Sizes/Desktop";
import "../../Styles/CSS/Navbar.css";
import MobileNav from "./Sizes/Mobile";

const Navbar = () => {
    const desktopSize = useMediaQuery({ minWidth: 1025 });
    const mobileSize = useMediaQuery({ maxWidth: 768 });

    return (
        <>
            { desktopSize && <DesktopNav /> }
            { mobileSize && <MobileNav /> }
        </>
    )
}

export default Navbar;
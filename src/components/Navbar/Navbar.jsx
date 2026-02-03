import NavbarLogo from "./NavbarLogo";
import LinkItem from "../ui/LinkItem";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [token, setToken] = useState(null);

    useEffect(() => {
        const storedToken = localStorage.getItem("token") || sessionStorage.getItem("token");
        setToken(storedToken);
    }, []);

    return (
        <nav
            className="fixed top-0 left-0 right-0 z-50 flex items-center py-7.5 px-35 bg-white/10 backdrop-blur-sm border-b border-white/20 "
        
        >
            <NavbarLogo />

            <div className="nav-links flex items-center gap-10 mr-auto">
                <LinkItem to={"/"}>home</LinkItem>
                <LinkItem to={"books"}>books</LinkItem>
                <LinkItem to={"about"}>about us</LinkItem>
            </div>

            {/* Icons */}
            <div className="flex items-center gap-5 mr-6">
                <FaHeart className="text-xl text-white cursor-pointer hover:text-red-400 transition-colors" />
                <FaShoppingCart className="text-xl text-white cursor-pointer hover:text-gray-300 transition-colors" />
            </div>

            {/* Auth Buttons */}
            {!token && (
                <div className="nav-btns flex items-center gap-3">
                    <LinkItem to="/login" width={"fit"} isMainBtn={true}>
                        login
                    </LinkItem>
                    <LinkItem to="/signup" width={"fit"} isMainBtn={false}>
                        sign up
                    </LinkItem>
                </div>
            )}
        </nav>
    );
}

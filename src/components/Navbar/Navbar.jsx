import NavbarLogo from "./NavbarLogo";
import LinkItem from "../ui/LinkItem";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useAuthstore } from "../../states/state";
import { useNavigate, Link } from "react-router-dom";

export default function Navbar() {
    const isAuthinticated = useAuthstore((state) => state.isAuthinticated);
    const logout = useAuthstore((state) => state.logout);
    const navigate = useNavigate();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center py-7.5 px-35 bg-white/20 border-b border-white/20 ">
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
            <div className="nav-btns flex items-center gap-3">
                {!isAuthinticated ? (
                    <>
                        <Link
                        className="px-4 py-2 rounded bg-white/20 text-white border border-white/20"
                        to="/login">
                            login
                        </Link>

                        <Link
                        className="px-4 py-2 rounded bg-white/20 text-white border border-white/20"
                        to="/signup">
                            sign up
                        </Link>
                    </>
                ) : (
                    <button
                        className="px-4 py-2 rounded bg-white/20 text-white border border-white/20"
                        onClick={() => {
                            logout();
                            navigate("/login");
                        }}>
                        logout
                    </button>
                )}
            </div>
        </nav>
    );
}

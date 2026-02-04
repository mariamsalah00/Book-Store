import NavbarLogo from "./NavbarLogo";
import LinkItem from "../ui/LinkItem";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useAuthstore } from "../../store/state";
import { useNavigate, Link } from "react-router-dom";

export default function Navbar() {
  const isAuthenticated = useAuthstore((state) => state.isAuthenticated);
  const user = useAuthstore((state) => state.user);
  console.log(user);
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
      <div className="nav-btns flex items-center justify-center gap-3">
        {!isAuthenticated ? (
          <>
            <Link
              className="px-4 py-2 rounded bg-white/20 text-white border border-white/20"
              to="/login"
            >
              login
            </Link>

            <Link
              className="px-4 py-2 rounded bg-white/20 text-white border border-white/20"
              to="/signup"
            >
              sign up
            </Link>
          </>
        ) : (
          <>
            <div className="avatar flex items-center gap-3 text-white mr-4">
              <div className="w-10 h-10 rounded-full border-2 border-white/20 ">
                <img
                  src="https://img.daisyui.com/images/profile/demo/batperson@192.webp"
                  alt="avatar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-medium text-white/70">
                {user?.first_name} {user?.last_name}
              </span>
              <span className="text-xs text-white/70">{user?.email}</span>
            </div>

            <button
              className="px-4 py-2 rounded bg-white/20 text-white border border-white/20"
              onClick={() => {
                logout();
                navigate("/login");
              }}
            >
              logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

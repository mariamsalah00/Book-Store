import { Link } from "react-router-dom";

export default function LinkItem({ children, to , className }) {
  return (
    <>
      <Link
        to={to}
        className={`text-white text-md font-semibold capitalize hover:text-[#EAA451] ${className}`}
      >
        {children}
      </Link>
    </>
  );
}

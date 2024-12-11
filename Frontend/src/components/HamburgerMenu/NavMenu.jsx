import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { RiContactsBook2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const NavMenu = ({ isOpen, isLogin, isRegister }) => {
  return (
    <ul
      className={`text-white ${
        isLogin && "hidden"
      } max-sm:flex max-sm:flex-col max-sm:w-full ${
        !isOpen ? "max-sm:left-999" : "max-sm:left-0"
      } max-sm:absolute max-sm:top-0 max-sm:transition-all ${
        isRegister && "hidden"
      } max-sm:duration-300`}
    >
      <li className="flex items-center max-sm:items-start gap-16 font-light max-sm:flex-col max-sm:bg-slate-200 max-sm:w-full max-sm:text-black max-sm:gap-6 max-sm:p-3">
        <a
          href="#"
          className="hover:text-pink-600 transition-all delay-200 max-sm:inline-block"
        >
          <FaHome className="max-sm:inline-block mr-2 inline-block" />
          Home
        </a>
        <a href="#about" className="hover:text-pink-600 transition-all delay-200">
          <FcAbout className="max-sm:inline-block mr-2 inline-block" />
          About Us
        </a>
        <a href="#contact" className="hover:text-pink-600 transition-all delay-200">
          <RiContactsBook2Fill className="max-sm:inline-block mr-2 inline-block" />
          Contact
        </a>
        <Link
          to={"/login"}
          className="bg-languange p-1.5 rounded-lg max-sm:p-2 max-sm:text-center max-sm:w-full"
        >
          Log in
        </Link>
      </li>
    </ul>
  );
};

export default NavMenu;

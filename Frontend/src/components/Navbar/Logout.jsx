import { Link, useNavigate } from "react-router-dom";
import fetchApi from "../../utils/fetch";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import BurgerMenu from "../HamburgerMenu/BurgerMenu";

const Logout = ({ user, isOpen, showNav }) => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    const { status, message } = await fetchApi("logout", {
      method: "DELETE",
      credentials: "include",
    });
    navigate("/login");
  };

  return (
    <>
      <BurgerMenu showNav={showNav} />
      <ul
        className={`text-white
      } max-sm:flex max-sm:flex-col max-sm:w-full ${
        !isOpen ? "max-sm:left-999" : "max-sm:left-0"
      } max-sm:absolute max-sm:top-0 max-sm:transition-all max-sm:duration-300`}
      >
        <li className="flex items-center max-sm:items-start gap-4 font-light max-sm:flex-col max-sm:bg-slate-200 max-sm:w-full max-sm:text-black max-sm:gap-6 max-sm:p-3">
          <Link
            to={"/profile"}
            className="hover:text-pink-600 md:hidden transition-all delay-200 max-sm:inline-block"
          >
            <CgProfile className="max-sm:inline-block mr-2 inline-block" />
            Profile
          </Link>
          <Link
            to={"/profile"}
            className="hover:text-pink-600 max-sm:hidden md:text-lg transition-all delay-200"
          >
            {user.email}
            <CgProfile className="max-sm:inline-block ml-2 inline-block" />
          </Link>

          <button
            onClick={handleLogout}
            className="text-black bg-languange md:p-1 rounded-lg max-sm:p-2 max-sm:text-center max-sm:w-full"
          >
            Sign Out
          </button>
        </li>
      </ul>
    </>
  );
};

export default Logout;

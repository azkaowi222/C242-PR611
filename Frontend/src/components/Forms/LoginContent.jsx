import { Link } from "react-router-dom";
import BurgerMenu from "../HamburgerMenu/BurgerMenu";
import NavMenu from "../HamburgerMenu/NavMenu";
const LoginContent = ({ isOpen, showNav, isLogin }) => {
  return (
    <>
      <BurgerMenu showNav={showNav} />
      <NavMenu isOpen={isOpen} isLogin={isLogin} />
      <div className={`max-sm:hidden`}>
        <h3 className="inline-block mr-6 text-white">Don't have an account?</h3>
        <Link to={"/register"} className="bg-languange p-1.5 rounded-lg">
          Sign up
        </Link>
      </div>
    </>
  );
};

export default LoginContent;

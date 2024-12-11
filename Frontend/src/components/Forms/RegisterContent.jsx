import { Link } from "react-router-dom";
import NavMenu from "../HamburgerMenu/NavMenu";

const RegisterContent = ({ isOpen, isLogin, isRegister }) => {
  return (
    <>
      <NavMenu isOpen={isOpen} isLogin={isLogin} isRegister={isRegister} />
      <div className="max-sm:hidden">
        <h3 className="inline-block mr-6 text-white">
          Already have an account?
        </h3>
        <Link to={"/login"} className="bg-languange p-1.5 rounded-lg">
          Log in
        </Link>
      </div>
    </>
  );
};

export default RegisterContent;

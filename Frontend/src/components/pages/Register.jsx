import { useEffect, useState } from "react";
import RegisterContent from "../Forms/RegisterContent";
import RegisterForm from "../Forms/RegisterForm";
import AuthLayout from "../Layouts/AuthLayout";
import NavLayout from "../Layouts/NavLayout";
import Logo from "../Navbar/Logo";
import { useNavigate } from "react-router-dom";
import fetchApi from "../../utils/fetch";
import BurgerMenu from "../HamburgerMenu/BurgerMenu";
import NavMenu from "../HamburgerMenu/NavMenu";

const Register = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const showNav = () => {
    setIsOpen(true);
    return;
  };
  const navigate = useNavigate();

  const loginValidation = async () => {
    const { status } = await fetchApi("token/validation", {
      method: "POST",
      credentials: "include",
    });
    if (status !== "success") {
      setIsLogin(false);
      navigate("/register");
      return;
    }
    navigate("/");
  };

  useEffect(() => {
    loginValidation();
  }, []);
  return (
    <div>
      <NavLayout>
        <Logo />
        <BurgerMenu showNav={showNav} />
        <RegisterContent isOpen={isOpen} isLogin={isLogin} isRegister={true} />
      </NavLayout>
      <AuthLayout>
        <RegisterForm setIsOpen={setIsOpen} isRegister={true} />
      </AuthLayout>
    </div>
  );
};

export default Register;

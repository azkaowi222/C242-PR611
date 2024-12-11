import LoginForm from "../Forms/LoginForm";
import NavLayout from "../Layouts/NavLayout";
import AuthLayout from "../Layouts/AuthLayout";
import Logo from "../Navbar/Logo";
import LoginContent from "../Forms/LoginContent";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import fetchApi from "../../utils/fetch";
import BurgerMenu from "../HamburgerMenu/BurgerMenu";
import NavMenu from "../HamburgerMenu/NavMenu";

const Login = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const loginValidation = async () => {
    const { status } = await fetchApi("token/validation", {
      method: "POST",
      credentials: "include",
    });
    if (status !== "success") {
      navigate("/login");
      return;
    }
    navigate("/");
  };

  const showNav = () => {
    setIsOpen(true);
    return;
  };

  useEffect(() => {
    loginValidation();
  }, []);
  return (
    <div>
      <NavLayout>
        <Logo />
        <LoginContent isOpen={isOpen} showNav={showNav} isLogin={true} />
      </NavLayout>
      <AuthLayout>
        <LoginForm setIsOpen={setIsOpen} isLogin={true} />
      </AuthLayout>
    </div>
  );
};

export default Login;

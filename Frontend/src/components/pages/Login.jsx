import LoginForm from "../Forms/LoginForm";
import NavLayout from "../Layouts/NavLayout";
import AuthLayout from "../Layouts/AuthLayout";
import Logo from "../Navbar/Logo";
import LoginContent from "../Forms/LoginContent";
import { useEffect } from "react";


const Login = () => {
  return (
    <div>
      <NavLayout>
        <Logo />
        <LoginContent />
      </NavLayout>
      <AuthLayout>
        <LoginForm />
      </AuthLayout>
    </div>
  );
};

export default Login;

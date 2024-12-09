import LoginForm from "../Forms/LoginForm";
import NavLayout from "../Layouts/NavLayout";
import AuthLayout from "../Layouts/AuthLayout";
import Logo from "../Navbar/Logo";
import LoginContent from "../Forms/LoginContent";

const Login = () => {
  return (
    <>
      <NavLayout>
        <Logo />
        <LoginContent />
      </NavLayout>
      <AuthLayout>
        <LoginForm />
      </AuthLayout>
    </>
  );
};

export default Login;

import RegisterContent from "../Forms/RegisterContent";
import RegisterForm from "../Forms/RegisterForm";
import AuthLayout from "../Layouts/AuthLayout";
import NavLayout from "../Layouts/NavLayout";
import Logo from "../Navbar/Logo";

const Register = () => {
  return (
    <div>
      <NavLayout>
        <Logo />
        <RegisterContent />
      </NavLayout>
      <AuthLayout>
        <RegisterForm />
      </AuthLayout>
    </div>
  );
};


export default Register;

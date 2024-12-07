import { Link } from "react-router-dom";
const LoginContent = () => {
  return (
    <div>
      <h3 className="inline-block mr-6">Don't have an account?</h3>
      <Link to={"/register"} className="bg-languange p-1.5 rounded-lg">
        Sign up
      </Link>
    </div>
  );
};

export default LoginContent;

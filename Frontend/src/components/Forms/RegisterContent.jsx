import { Link } from "react-router-dom";

const RegisterContent = () => {
  return (
    <div>
      <h3 className="inline-block mr-6">Already have an account?</h3>
      <Link to={"/login"} className="bg-languange p-1.5 rounded-lg">
        Log in
      </Link>
    </div>
  );
};

export default RegisterContent;

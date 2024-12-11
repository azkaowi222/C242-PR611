import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <Link to={"/"}>
      <div className="max-sm:flex max-sm:justify-center max-sm:items-center max-sm:w-full">
        <img
          src="images/logo-2.png"
          alt="Leafes"
          width={65}
          className="inline-block"
        />
        <h1 className="text-white inline-block text-2xl font-semibold appName tracking-wide">
          GreenLeaves
        </h1>
      </div>
    </Link>
  );
};

export default Logo;

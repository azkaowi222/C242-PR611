import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <Link to={"/"}>
      <div>
        <img
          src="images/2.png"
          alt="Leafes"
          width={65}
          className="inline-block"
        />
        <h1 className="inline-block text-2xl font-semibold appName tracking-wide">
          GreenLeav
        </h1>
      </div>
    </Link>
  );
};

export default Logo;

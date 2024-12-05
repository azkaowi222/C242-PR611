import imgApp from "../../assets/images/leafes.png";
const Logo = () => {
  return (
    <div>
      <img src={imgApp} alt="Leafes" width={65} className="inline-block" />
      <h1 className="inline-block text-2xl font-semibold appName tracking-wide">
        GreenLeav
      </h1>
    </div>
  );
};

export default Logo;

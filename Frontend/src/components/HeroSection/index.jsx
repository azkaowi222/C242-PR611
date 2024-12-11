import Content from "./Content";
import Image from "./Image";

const HeroSection = ({ setIsOpen }) => {
  const hideNav = () => {
    setIsOpen(false);
  };
  return (
    <div
      onClick={hideNav}
      className="flex w-full items-center pl-14 justify-between mt-16 bg-hero pb-16 max-sm:flex-col max-sm:justify-center max-sm:p-0 max-sm:gap-5"
    >
      <Content />
      <Image />
    </div>
  );
};

export default HeroSection;

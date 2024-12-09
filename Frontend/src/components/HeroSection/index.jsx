import Content from "./Content";
import Image from "./Image";

const HeroSection = () => {
  return (
    <div className="flex w-full items-center pl-14 justify-between mt-16 bg-hero pb-16">
      <Content />
      <Image />
    </div>
  );
};

export default HeroSection;

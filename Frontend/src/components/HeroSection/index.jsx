import Content from "./Content";
import Image from "./Image";

const HeroSection = () => {
  return (
    <section className="flex w-full items-center pl-14 justify-between">
      <Content />
      <Image />
    </section>
  );
};

export default HeroSection;

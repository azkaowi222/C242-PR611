import Logo from "./Logo";
import Content from "./Content";

const Navbar = () => {
  return (
    <header className="flex w-full items-center justify-between px-14 border-b">
      <Logo />
      <Content />
    </header>
  );
};

export default Navbar;

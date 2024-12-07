import Logo from "./Logo";
import Content from "./Content";
import NavLayout from "../Layouts/NavLayout";

const Navbar = () => {
  return (
    <NavLayout>
      <Logo />
      <Content />
    </NavLayout>
  );
};

export default Navbar;

import Logo from "./Logo";
import Content from "./Content";
import NavLayout from "../Layouts/NavLayout";

const Navbar = ({isOpen, showNav}) => {
  return (
    <NavLayout>
      <Logo />
      <Content isOpen={isOpen} showNav={showNav} />
    </NavLayout>
  );
};

export default Navbar;

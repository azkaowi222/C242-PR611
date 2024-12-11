import BurgerMenu from "../HamburgerMenu/BurgerMenu";
import NavMenu from "../HamburgerMenu/NavMenu";

const Content = ({ isOpen, showNav }) => {
  return (
    <>
      <BurgerMenu showNav={showNav} />
      <NavMenu isOpen={isOpen} />
    </>
  );
};

export default Content;

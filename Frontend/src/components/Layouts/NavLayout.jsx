const NavLayout = ({ children }) => {
  return (
    <header className="fixed top-0 flex w-full items-center justify-between px-14 border-b z-50 bg-hero">
      {children}
    </header>
  );
};

export default NavLayout;

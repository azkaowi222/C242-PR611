const NavLayout = ({ children }) => {
  return (
    <header className="fixed top-0 flex w-full items-center justify-between px-14 border-b z-20 bg-hero max-sm:w-full max-sm:p-0 max-sm:border-b max-sm:flex max-sm:justify-between">
      {children}
    </header>
  );
};

export default NavLayout;

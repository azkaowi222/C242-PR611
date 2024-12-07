const NavLayout = ({ children }) => {
  return (
    <header className="flex w-full items-center justify-between px-14 border-b">
      {children}
    </header>
  );
};

export default NavLayout;

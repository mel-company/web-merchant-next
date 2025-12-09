import CartBtn from "../../cart";

const Nav = () => {
  return (
    <nav className="flex w-screen fixed top-0 left-0 right-0 z-40 justify-between items-center p-4">
      <div className="font-bold text-xl">Logo</div>
      <CartBtn />
    </nav>
  );
};

export default Nav;

"use client";
import CartBtn from "../../cart";

const Nav = () => {
  return (
    <nav className="flex bg-base-100 w-screen fixed top-0 left-0 right-0 z-40 justify-between items-center px-4 py-1">
      <div className="flex container mx-auto justify-between items-center p-4">
        <div className="font-bold text-xl">Logo</div>
        <CartBtn />
      </div>
    </nav>
  );
};

export default Nav;

import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  return (
    <header className="container flex flex-col py-4 text-[1e1b4b]">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Books</h1>
        <nav className="flex items-center gap-5 text-xs">
          <div className="hidden sm:block sm:flex sm:gap-5">
            <a href="/">HOME</a>
            <a href="/explore">EXPLORE</a>
            <a href="/shop">SHOP</a>
            <a href="/sell">SELL YOUR BOOK</a>
          </div>
          <a href="/cart">
            <FaCartShopping size={22} />
          </a>
          <button
            className="md:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? <IoClose size={22} /> : <GiHamburgerMenu size={22} />}
          </button>
        </nav>
      </div>
      {mobileOpen && (
        <ul className="flex flex-col mt-2 md:hidden">
          <a href="/">HOME</a>
          <a href="/explore">EXPLORE</a>
          <a href="/shop">SHOP</a>
          <a href="/sell">SELL YOUR BOOK</a>
        </ul>
      )}
    </header>
  );
};

export default Header;

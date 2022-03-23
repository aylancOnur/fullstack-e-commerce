import { useState } from "react";
import { Link } from "react-router-dom";
import DropdownMenuItem from "./DropdownMenuItem";
import Searchbar from "./Searchbar";

const Header = () => {
  const [menuItems] = useState([
    { id: 1, title: "Giriş Yap" },
    { id: 2, title: "Üye Ol" },
    { id: 3, title: "Siparişlerim" },
    { id: 4, title: "Favorilerim" },
  ]);
  const [dropdownMenuOpen, setDropdownMenuOpen] = useState(false);
  const [focus, setFocus] = useState(false);
  const buttonClass = focus
    ? "absolute inset-y-0 right-0 font-medium bg-orange-500 px-4 text-white"
    : "absolute inset-y-0 right-0 font-medium bg-gray-500 px-4 text-white";

  return (
    <div className="hidden lg:block">
      <div className="container max-w-7xl px-4 lg:flex xs:hidden justify-between py-2 mx-auto">
        {/* BRAND */}
        <Link
          className="inline-flex p-2 text-orange-500 text-4xl font-bold lowercase tracking-wider"
          to="/"
        >
          Hepsiburada
        </Link>
        {/* BRAND */}
        {/* SEARCHBAR */}
        <Searchbar setFocus={setFocus} buttonClass={buttonClass} />
        {/* SEARCHBAR */}
        {/* USER LOGIN */}
        <div className="border-2 px-2 rounded-lg border-gray-400 flex justify-between items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          <div
            onMouseEnter={() => setDropdownMenuOpen(true)}
            onMouseLeave={() => setDropdownMenuOpen(false)}
            className="mx-2 leading-3 relative"
          >
            <p className="m-0 font-medium">Giriş Yap</p>
            <small className="text-gray-400 text-xs m-0">veya üye ol</small>
            <ul
              className={
                dropdownMenuOpen
                  ? "space-y-2 lg:w-48 bg-white lg:absolute top-14 -left-16 p-2 z-50"
                  : "hidden"
              }
            >
              {menuItems.map((menuItem) => (
                <DropdownMenuItem
                  key={`userDropdownMenuItem id => ${menuItem.id}`}
                  dropdownMenuItem={menuItem}
                />
              ))}
            </ul>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
        {/* USER LOGIN */}
        {/* USER CART */}
        <div className="px-6 rounded-lg bg-gray-500 flex justify-between items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <div className="mx-2 leading-3 cursor-pointer">
            <p className="m-0 font-medium text-white">Sepetim</p>
          </div>
        </div>
        {/* USER CART */}
      </div>
    </div>
  );
};

export default Header;

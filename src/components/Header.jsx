import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [focus, setFocus] = useState(false);
  const buttonClass = focus
    ? "absolute inset-y-0 right-0 font-medium bg-orange-500 px-4 text-white"
    : "absolute inset-y-0 right-0 font-medium bg-gray-500 px-4 text-white";
  return (
    <div>
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
        <form
          onSubmit={(e) => e.preventDefault()}
          className="relative flex w-1/2 my-auto"
        >
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </span>
          <input
            onFocus={() => setFocus(true)}
            className="font-medium placeholder:text-gray-400 block bg-white w-full border-2 border-gray-400 rounded-l-md py-3 pl-9 pr-3 shadow-sm focus:outline-none focus:border-orange-500 focus:ring-orange-500 focus:ring-1 sm:text-sm"
            placeholder="Ürün, kategori veya marka ara"
            type="text"
            name="search"
          />
          <button type="submit" className={buttonClass}>
            ARA
          </button>
        </form>
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
          <div className="mx-2 leading-3">
            <p className="m-0 font-medium">Giriş Yap</p>
            <small className="text-gray-400 text-xs m-0">veya üye ol</small>
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
          <div className="mx-2 leading-3">
            <p className="m-0 font-medium text-white">Sepetim</p>
          </div>
        </div>
        {/* USER CART */}
      </div>
    </div>
  );
};

export default Header;

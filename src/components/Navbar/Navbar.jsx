import { useState } from "react";
import { Link } from "react-router-dom";
import Searchbar from "../Searchbar";
import { NavbarItem } from "./index";

const Navbar = () => {
  const [menuItems] = useState([
    {
      id: "1",
      title: "Elektronik",
      to: "/",
      dropdownMenuItems: [
        { id: "10", title: "Bilgisayar/Tablet", to: "/" },
        { id: "11", title: "Yazıcılar & Projeksiyon", to: "/" },
        { id: "12", title: "Telefon & Telefon Aksesuarları", to: "/" },
        { id: "13", title: "TV, Görüntü & Ses Sistemleri", to: "/" },
        { id: "14", title: "Beyaz Eşya", to: "/" },
        { id: "15", title: "Klima ve Isıtıcılar", to: "/" },
        { id: "16", title: "Elektrikli Ev Aletleri", to: "/" },
        { id: "17", title: "Foto & Kamera", to: "/" },
        { id: "18", title: "Oyun & Oyun Konsolları", to: "/" },
      ],
    },
    {
      id: "2",
      title: "Moda",
      to: "/",
      dropdownMenuItems: [
        { id: "19", title: "Kadın", to: "/" },
        { id: "20", title: "Kadın Aksesuar & Takı", to: "/" },
        { id: "21", title: "Erkek", to: "/" },
        { id: "22", title: "Erkek Aksesuar & Takı", to: "/" },
        { id: "23", title: "Altın", to: "/" },
        { id: "24", title: "Outdoor Giyim & Ayakkabu", to: "/" },
        { id: "25", title: "Ayakkabı & Çanta", to: "/" },
        { id: "26", title: "Çocuk", to: "/" },
        { id: "27", title: "Yurtdışından", to: "/" },
      ],
    },
    {
      id: "3",
      title: "Ev, Yaşam, Kırtasiye, Ofis",
      to: "/",
    },
    {
      id: "4",
      title: "Oto, Bahçe, Yapı, Market",
      to: "/",
    },
    {
      id: "5",
      title: "Anne, Bebek, Oyuncak",
      to: "/",
    },
    {
      id: "6",
      title: "Spor, Outdorr",
      to: "/",
    },
    {
      id: "7",
      title: "Kozmetik, Kişisel Bakım",
      to: "/",
    },
    {
      id: "8",
      title: "Süpermarket, Pet Shop",
      to: "/",
    },
    {
      id: "9",
      title: "Kitap, Müzik, Film, Hobi",
      to: "/",
    },
  ]);
  const [dropdownMenuOpen, setDropdownMenuOpen] = useState(true);
  const [click, setClick] = useState();
  const handleClick = (dropdownMenuItemID) => {
    setClick(dropdownMenuItemID);
  };

  return (
    <nav className="bg-gray-100">
      {/* CONTAINER */}
      <div className="container max-w-7xl px-4 flex flex-wrap py-2 mx-auto">
        <div className="w-full">
          <div className="lg:hidden flex justify-between items-center w-full mb-4">
            {/* BRAND */}
            <Link
              className="inline-flex text-orange-500 text-xl font-bold tracking-wider"
              to="/"
            >
              hepsiburada
            </Link>
            {/* BRAND */}
            <div className="flex">
              {/* BELL ICON */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              {/* BELL ICON */}
              {/* USER ICON */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
              {/* USER ICON */}
            </div>
          </div>
          <div className="lg:hidden">
            {/* SEARCHBAR */}
            <Searchbar />
            {/* SEARCHBAR */}
          </div>
        </div>
        {/* MENU */}
          <ul className="hidden w-auto lg:flex flex-row  space-y-0">
            {menuItems.map((menuItem) => (
              <NavbarItem
                key={`menuItem id => ${menuItem.id}`}
                handleClick={handleClick}
                menuItem={menuItem}
                active={
                  menuItem.id === click
                    ? "bg-white lg:absolute left-0 top-16 p-2"
                    : "hidden"
                }
                setDropdownMenuOpen={setDropdownMenuOpen}
                dropdownMenuOpen={dropdownMenuOpen}
              />
            ))}
          </ul>
        {/* MENU */}
      </div>
      {/* CONTAINER */}
    </nav>
  );
};

export default Navbar;

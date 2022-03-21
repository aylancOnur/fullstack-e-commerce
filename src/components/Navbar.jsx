import { useState } from "react";
import { Link } from "react-router-dom";
import NavbarItem from "./NavbarItem";

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
  const [menuOpen, setMenuOpen] = useState(true);
  const [dropdownMenuOpen, setDropdownMenuOpen] = useState(true);
  const [click, setClick] = useState();
  const handleClick = (dropdownMenuItemID) => {
    setClick(dropdownMenuItemID);
    console.log("dropdownMenuItemID", dropdownMenuItemID);
    console.log("click", click);
  };

  const openMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const menuClass = menuOpen
    ? "hidden w-full lg:w-auto lg:inline-flex mt-2 lg:mt-0"
    : "w-full lg:w-auto lg:inline-flex mt-2 lg:mt-0";

  return (
    <nav className="bg-gray-100">
      {/* CONTAINER */}
      <div className="container max-w-7xl px-4 flex flex-wrap py-2 mx-auto">
        {/* BRAND */}
        <Link
          className="lg:hidden inline-flex p-2 text-orange-500 text-xl font-bold uppercase tracking-wider"
          to="/"
        >
          Hepsiburada
        </Link>
        {/* BRAND */}
        {/* TOGGLER BUTTON */}
        <button
          onClick={openMenu}
          className="lg:hidden inline-flex text-orange-500 items-center justify-center  border h-10 w-10 rounded-md outline-none focus:outline-none ml-auto"
        >
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
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/* TOGGLER BUTTON */}
        {/* MENU */}
        <div className={menuClass}>
          <ul className="w-full lg:w-auto flex flex-col lg:flex-row space-y-2 lg:space-y-0">
            {menuItems.map((menuItem) => (
              <NavbarItem
                key={`menuItem id => ${menuItem.id}`}
                handleClick={handleClick}
                menuItem={menuItem}
                active={
                  menuItem.id === click
                    ? "bg-white lg:absolute left-0 top-20 p-2"
                    : "hidden bg-white lg:absolute left-0 top-20 p-2"
                }
                setDropdownMenuOpen={setDropdownMenuOpen}
                dropdownMenuOpen={dropdownMenuOpen}
              />
            ))}
          </ul>
        </div>
        {/* MENU */}
      </div>
      {/* CONTAINER */}
    </nav>
  );
};

export default Navbar;

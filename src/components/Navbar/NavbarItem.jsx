import { Link } from "react-router-dom";
import DropdownMenuItem from "../DropdownMenuItem";

const NavbarItem = ({
  handleClick,
  menuItem,
  active,
  setDropdownMenuOpen,
  dropdownMenuOpen,
}) => {
  return (
    <li className="relative">
      <Link
        to="/"
        className="flex border-l-2 border-l-gray-200 w-full h-full text-center px-4 py-2  font-medium text-sm text-gray-700 hover:bg-white hover:text-orange-500 transition-all transition-duration: 150ms"
        onMouseEnter={() => handleClick(menuItem.id)}
      >
        {menuItem.title}
      </Link>
      {/* DROPDOWN MENU */}
      {menuItem.dropdownMenuItems && (
        <div className={active}>
          <ul className="space-y-2 lg:w-48">
            {menuItem.dropdownMenuItems?.map((dropdownMenuItem) => (
              <DropdownMenuItem
                key={`dropdownMenuItem id => ${dropdownMenuItem.id}`}
                dropdownMenuItem={dropdownMenuItem}
              />
            ))}
          </ul>
        </div>
      )}
      {/* DROPDOWN MENU */}
    </li>
  );
};

export default NavbarItem;

import { Link } from "react-router-dom";

const DropdownMenuItem = ({ dropdownMenuItem: {title} }) => {
  return (
    <li>
      <Link
        to="/"
        className="flex p-2 font-medium text-sm text-gray-700 rounded-md hover:text-orange-500 transition-all transition-duration: 150ms"
      >
        {title}
      </Link>
    </li>
  );
};

export default DropdownMenuItem;

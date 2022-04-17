import { useState } from "react";
import FooterItem from "./FooterItem";

const STATE = [
  {
    id: 1,
    title: "Praesent elementum",
    items: [
      { id: "item1", link: "Fusce vel sem" },
      { id: "item2", link: "Ut venenatis tellus" },
      { id: "item3", link: "Vestibulum" },
      { id: "item4", link: "Nunc at ipsum" },
    ],
  },
  {
    id: 2,
    title: "Praesent elementum",
    items: [
      { id: "item5", link: "Fusce vel sem" },
      { id: "item6", link: "Ut venenatis tellus" },
      { id: "item7", link: "Vestibulum" },
      { id: "item8", link: "Nunc at ipsum" },
    ],
  },
  {
    id: 3,
    title: "Praesent elementum",
    items: [
      { id: "item9", link: "Fusce vel sem" },
      { id: "item10", link: "Ut venenatis tellus" },
      { id: "item11", link: "Vestibulum" },
      { id: "item12", link: "Nunc at ipsum" },
    ],
  },
  {
    id: 4,
    title: "Praesent elementum",
    items: [
      { id: "item13", link: "Fusce vel sem" },
      { id: "item14", link: "Ut venenatis tellus" },
      { id: "item15", link: "Vestibulum" },
      { id: "item16", link: "Nunc at ipsum" },
    ],
  },
  {
    id: 5,
    title: "Praesent elementum",
    items: [
      { id: "item17", link: "Fusce vel sem" },
      { id: "item18", link: "Ut venenatis tellus" },
      { id: "item19", link: "Vestibulum" },
      { id: "item20", link: "Nunc at ipsum" },
    ],
  },
  {
    id: 6,
    title: "Praesent elementum",
    items: [
      { id: "item21", link: "Fusce vel sem" },
      { id: "item22", link: "Ut venenatis tellus" },
      { id: "item23", link: "Vestibulum" },
      { id: "item24", link: "Nunc at ipsum" },
    ],
  },
];

const Footer = () => {
  const [click, setClick] = useState();
  const handleClick = (itemID) => {
    setClick(itemID);
  };
  return (
    <footer className="mt-16">
      <div className="border-t md:px-4 md:pt-10 md:pb-5">
        <div className="flex flex-wrap container mx-auto">
          {STATE.map((item) => (
            <FooterItem
              key={item.id}
              item={item}
              handleClick={handleClick}
              active={
                item.id === click
                  ? "md:h-auto -mt-4 md:mt-0 overflow-hidden"
                  : "h-0 md:h-auto -mt-4 md:mt-0 overflow-hidden"
              }
            />
          ))}
        </div>
      </div>
      <div className="max-w-screen-lg mx-auto border-none px-4">
        <section className="flex flex-col md:flex-row md:justify-between md:border-solid md:border-t text-gray-700 font-light text-sm pt-4 pb-6 md:pt-5 md:pb-6 w-full">
          <div>
            <p className="leading-8 tracking-wide">
              &copy; Lorem Ipsum Co., 123 Lorem Street, New York, NY
            </p>
          </div>
          <div>
            <p className="leading-8 tracking-wide">Privacy Policy</p>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;

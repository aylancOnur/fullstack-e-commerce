/* eslint-disable jsx-a11y/anchor-is-valid */
import { isDisabled } from "@testing-library/user-event/dist/utils";
import { useState, useEffect } from "react";
import { useScrollDirection } from "react-use-scroll-direction";

function MobileNavbar() {
  const [direction, setDirection] = useState(String);
  const { isScrollingUp, isScrollingDown, isScrolling } = useScrollDirection();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    isScrollingDown && setDirection("down");
    isScrollingUp && setDirection("up");
  }, [isScrollingDown, isScrollingUp]);

  return (
    // <!-- Navigation Bar -->
    <div
      className={`${
        isScrollingDown || (direction === "down" && !isScrolling)
          ? "invisible opacity-0"
          : "visible opacity-100"
      } px-3 py-0 bg-white fixed bottom-0 left-0 right-0 z-50 transition-opacity duration-500 lg:hidden`}
    >
      <div className="flex flex-row justify-between">
        {/* <!-- Item #1 --> */}
        <div className="flex group" onClick={() => handleClick(0)}>
          <a
            href="#"
            className={`px-3 py-1 ${
              activeIndex === 0
                ? "text-orange-500 hover:text-orange-600"
                : "text-gray-400 hover:text-orange-500"
            } transition-colors duration-200`}
          >
            <span className="flex flex-col items-center">
              {/* <!-- Icon --> */}
              <i
                className={`mdi ${
                  activeIndex === 0 ? "mdi-home" : "mdi-home-outline"
                } mdi-24px mx-1`}
              ></i>
              {/* <!-- Text --> */}
              <span className="text-xs mb-1">Keşfet</span>
            </span>
          </a>
        </div>

        {/* <!-- Item #2 --> */}
        <div className="flex group" onClick={() => handleClick(1)}>
          <a
            href="#"
            className={`px-3 py-1 ${
              activeIndex === 1
                ? "text-orange-500 hover:text-orange-600"
                : "text-gray-400 hover:text-orange-500"
            } transition-colors duration-200`}
          >
            <span className="flex flex-col items-center">
              {/* <!-- Icon --> */}
              <i
                className={`mdi ${
                  activeIndex === 1 ? "mdi-shape" : "mdi-shape-outline"
                } mdi-24px mx-1`}
              ></i>

              {/* <!-- Text --> */}
              <span className="text-xs mb-1">Kategoriler</span>
            </span>
          </a>
        </div>

        {/* <!-- Item #3 Active --> */}
        <div className="flex group" onClick={() => handleClick(2)}>
          <a
            href="#"
            className={`px-3 py-1 ${
              activeIndex === 2
                ? "text-orange-500 hover:text-orange-600"
                : "text-gray-400 hover:text-orange-500"
            } transition-colors duration-200`}
          >
            <span className="flex flex-col items-center">
              {/* <!-- Icon --> */}
              {/* cart-outline */}
              <i
                className={`mdi ${
                  activeIndex === 2 ? "mdi-cart" : "mdi-cart-outline"
                } mdi-24px mx-1`}
              ></i>

              {/* <!-- Text --> */}
              <span className="text-xs mb-1">Sepetim</span>
            </span>
          </a>
        </div>

        {/* <!-- Item #4 --> */}
        <div className="flex group" onClick={() => handleClick(3)}>
          <a
            href="#"
            className={`px-3 py-1 ${
              activeIndex === 3
                ? "text-orange-500 hover:text-orange-600"
                : "text-gray-400 hover:text-orange-500"
            } transition-colors duration-200`}
          >
            <span className="flex flex-col items-center">
              {/* <!-- Icon --> */}
              <i
                className={`mdi ${
                  activeIndex === 3
                    ? "mdi-heart-multiple"
                    : "mdi-heart-multiple-outline"
                } mdi-24px mx-1`}
              ></i>

              {/* <!-- Text --> */}
              <span className="text-xs mb-1">Favorilerim</span>
            </span>
          </a>
        </div>

        {/* <!-- Item #5 --> */}
        <div className="flex group" onClick={() => handleClick(4)}>
          <a
            href="#"
            className={`px-3 py-1 ${
              activeIndex === 4
                ? "text-orange-500 hover:text-orange-600"
                : "text-gray-400 hover:text-orange-500"
            } transition-colors duration-200`}
          >
            <span className="flex flex-col items-center">
              {/* <!-- Icon --> */}
              <i
                className={`mdi ${
                  activeIndex === 4
                    ? "mdi-account-circle"
                    : "mdi-account-circle-outline"
                } mdi-24px mx-1`}
              ></i>

              {/* <!-- Text --> */}
              <span className="text-xs mb-1">Hesabım</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

{
  /* <!-- Focus Dot --> */
}
// <span className="h-2 w-2 rounded-full group-hover:bg-orange-500
// 	transition-all duration-150 delay-100"></span>

{
  /* <!-- Focus Dot Active --> */
}
// 	<span className="h-1 w-5 rounded-full bg-orange-500 group-hover:bg-orange-500
// 		hover:h-3 hover:w-3 transition-all duration-150 delay-100"></span>

export default MobileNavbar;

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import bahar from "../assets/images/bahar.jpg";
import stil from "../assets/images/stil.jpg";
import tekerlek from "../assets/images/tekerlek.jpg";
import { useEffect, useState } from "react";

function Carousel() {
  const [swiperNavigation, setSwiperNavigation] = useState(true);

  const showNavigation = () => {
    if (window.innerWidth <= 960) {
      setSwiperNavigation(false);
    } else {
      setSwiperNavigation(true);
    }
  };

  useEffect(() => {
    showNavigation();
    window.addEventListener("resize", showNavigation);
  }, []);

  return (
    <div className="h-auto lg:h-[500px] w-full flex justify-center items-center bg-gradient-to-r from-orange-500">
      <div className="w-full h-full lg:w-2/3 lg:h-3/4">
        <Swiper
          cssMode={true}
          navigation={swiperNavigation ? true : false}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper w-full h-full lg:w-[1100px] lg:h-[390px]"
        >
          <SwiperSlide className="bg-white lg:rounded-md p-1 flex items-center md:justify-center lg:justify-between">
            <div className="mx-12 hidden lg:block">
              <h4 className="text-2xl">Yaz ve dört mevsim lastiklerinde</h4>
              <h3 className="text-3xl font-bold my-8">bu fiyatlar kaçmaz</h3>
              <button className="text-sm font-bold text-white bg-orange-500 rounded-3xl px-4 py-2">
                Acele et kaçırma
              </button>
            </div>
            <img
              className="block rounded-md h-auto mr-1"
              src={tekerlek}
              alt="..."
            />
          </SwiperSlide>
          <SwiperSlide className="bg-white lg:rounded-md flex items-center md:justify-center lg:justify-between">
            <div className="mx-12 hidden lg:block">
              <h4 className="text-2xl">Bahara hazırlık için</h4>
              <h3 className="text-3xl font-bold my-8">
                aradığın her şey burada
              </h3>
              <button className="text-sm font-bold text-white bg-orange-500 rounded-3xl px-4 py-2">
                Acele et kaçırma
              </button>
            </div>
            <img
              className="block rounded-md h-auto mr-2"
              src={bahar}
              alt="..."
            />
          </SwiperSlide>
          <SwiperSlide className="bg-white lg:rounded-md flex items-center md:justify-center lg:justify-between">
            <div className="mx-12 hidden lg:block">
              <h4 className="text-2xl">Stilini yenileyecek</h4>
              <h3 className="text-3xl font-bold my-8">
                en moda ürünlerde süper fırsat
              </h3>
              <button className="text-sm font-bold text-white bg-orange-500 rounded-3xl px-4 py-2">
                Acele et kaçırma
              </button>
            </div>
            <img
              className="block rounded-md h-auto mr-2"
              src={stil}
              alt="..."
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Carousel;

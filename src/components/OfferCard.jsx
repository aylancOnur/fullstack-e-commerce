import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const OfferCard = () => {
  const [swiperNavigation, setSwiperNavigation] = useState(true);
  const [slidesPerView, setSlidesPerView] = useState(true);
  const [slidesPerGroup, setSlidesPerGroup] = useState(true);

  const showNavigation = () => {
    if (window.innerWidth <= 960) {
      setSwiperNavigation(false);
      setSlidesPerView(false);
      setSlidesPerGroup(false);
    } else {
      setSwiperNavigation(true);
      setSlidesPerView(true);
      setSlidesPerGroup(true);
    }
  };

  useEffect(() => {
    showNavigation();
    window.addEventListener("resize", showNavigation);
  }, []);

  return (
    <section className="pt-10 lg:pt-[80px] px-2 lg:px-0 container max-w-7xl mx-auto">
      <h2 className="font-bold text-xl lg:text-3xl text-gray-700 lg:ml-4 mb-4">
        Süper Fiyat, Süper Teklif
      </h2>
      <Swiper
        navigation={swiperNavigation ? true : false}
        slidesPerView={slidesPerView ? 5 : 2}
        spaceBetween={30}
        slidesPerGroup={slidesPerGroup ? 3 : 2}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-1">
          <SwiperSlide className="overflow-hidden cursor-pointer min-h-[300px] h-[300px] mx-auto w-[160px] md:w-[225px] border-2 rounded-lg hover:shadow-md transition-all transition-duration:150ms px-2 py-4 text-center">
            <p className="text-xs mb-2 truncate">Solo Kağıt Havlu 12'li</p>
            <div className="h-[140px] mb-10">
              <img
                src="https://productimages.hepsiburada.net/s/86/200-200/110000028292419.jpg"
                alt="explore card"
                className="block h-full mx-auto"
              />
            </div>
            <h3 className="text-xl font-bold text-orange-500 my-4">
              58,90<span className="text-sm"> TL</span>
            </h3>
          </SwiperSlide>
          <SwiperSlide className="overflow-hidden cursor-pointer min-h-[300px] h-[300px] mx-auto w-[160px] md:w-[225px] border-2 rounded-lg hover:shadow-md transition-all transition-duration:150ms px-2 py-4 text-center">
            <p className="text-xs mb-2 truncate">
              Joystar Alüminyum Katlanabilir Piknik/Kamp Masası
            </p>
            <div className="h-[140px] mb-10">
              <img
                src="https://productimages.hepsiburada.net/s/37/200-200/10535529054258.jpg"
                alt="explore card"
                className="block h-full mx-auto"
              />
            </div>
            <h3 className="text-xl font-bold text-orange-500 my-4">
              299,00<span className="text-sm"> TL</span>
            </h3>
          </SwiperSlide>
          <SwiperSlide className="overflow-hidden cursor-pointer min-h-[300px] h-[300px] mx-auto w-[160px] md:w-[225px] border-2 rounded-lg hover:shadow-md transition-all transition-duration:150ms px-2 py-4 text-center">
            <p className="text-xs mb-2 truncate">
              Samsung Galaxy M52 5G 128 GB (Samsung Türkiye Garantili)
            </p>
            <div className="h-[140px] mb-10">
              <img
                src="https://productimages.hepsiburada.net/s/128/200-200/110000078076147.jpg"
                alt="explore card"
                className="block h-full mx-auto"
              />
            </div>
            <h3 className="text-xl font-bold text-orange-500 my-4">
              5,699,00<span className="text-sm"> TL</span>
            </h3>
          </SwiperSlide>
          <SwiperSlide className="overflow-hidden cursor-pointer min-h-[300px] h-[300px] mx-auto w-[160px] md:w-[225px] border-2 rounded-lg hover:shadow-md transition-all transition-duration:150ms px-2 py-4 text-center">
            <p className="text-xs mb-2 truncate">
              Strong CV32ES2000 32" 82 Ekran Uydu Alıcılı Android Smart LED TV
            </p>
            <div className="h-[140px] mb-10">
              <img
                src="https://productimages.hepsiburada.net/s/192/200-200/110000159031047.jpg"
                alt="explore card"
                className="block h-full mx-auto"
              />
            </div>
            <h3 className="text-xl font-bold text-orange-500 my-4">
              2,249,00<span className="text-sm"> TL</span>
            </h3>
          </SwiperSlide>
          <SwiperSlide className="overflow-hidden cursor-pointer min-h-[300px] h-[300px] mx-auto w-[160px] md:w-[225px] border-2 rounded-lg hover:shadow-md transition-all transition-duration:150ms px-2 py-4 text-center">
            <p className="text-xs mb-2 truncate">
              By Harmony Bh 2180 Unisex Güneş Gözlüğü
            </p>
            <div className="h-[140px] mb-10">
              <img
                src="https://productimages.hepsiburada.net/s/203/200-200/110000176085382.jpg"
                alt="explore card"
                className="block h-full mx-auto"
              />
            </div>
            <h3 className="text-xl font-bold text-orange-500 my-4">
              44,99<span className="text-sm"> TL</span>
            </h3>
          </SwiperSlide>
          <SwiperSlide className="overflow-hidden cursor-pointer min-h-[300px] h-[300px] mx-auto w-[160px] md:w-[225px] border-2 rounded-lg hover:shadow-md transition-all transition-duration:150ms px-2 py-4 text-center">
            <p className="text-xs mb-2 truncate">
              Koop Süt Hellim Peyniri Toplam 1 kg
            </p>
            <div className="h-[140px] mb-10">
              <img
                src="https://productimages.hepsiburada.net/s/191/200-200/110000158504254.jpg"
                alt="explore card"
                className="block h-full mx-auto"
              />
            </div>
            <h3 className="text-xl font-bold text-orange-500 my-4">
              89,90<span className="text-sm"> TL</span>
            </h3>
          </SwiperSlide>
        </div>
      </Swiper>
    </section>
  );
};

export default OfferCard;

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const logos = Object.values(
    import.meta.glob("/src/assets/cursos/*.{png,avif}", {
        eager: true,
        as: "url",
    })
)

import "swiper/css";

export default function CarrouselCursos() {
  return (
    <div className="w-full overflow-hidden py-8">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        slidesPerView="auto"
        spaceBetween={10}
        speed={1000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        allowTouchMove={false}
        className="ease-linear!"
      >
        {logos.map((logo, index) => (
          <SwiperSlide
            key={index}
            className="w-auto! flex items-center"
          >
            <img
              src={logo}
              alt="Curso"
              className="h-100"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
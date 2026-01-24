import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const logos = Object.values(
    import.meta.glob("/src/assets/cursos/*.{png,avif}", {
        eager: true,
        as: "url",
    })
) 

export default function CarrouselCursos() {
  return (
    <div className="w-full overflow-hidden py-8">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        slidesPerView="auto"
        spaceBetween={10}
        speed={5000}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        allowTouchMove={true}
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
              className="h-60 sm:h-100 hover:cursor-grab"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
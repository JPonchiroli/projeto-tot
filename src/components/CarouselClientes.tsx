import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const logos = [
  "https://static.wixstatic.com/media/ca5485_48edc2b5456546bcbcc57da5c8ad7fbe~mv2.png/v1/fit/w_98,h_34,q_90,enc_avif,quality_auto/ca5485_48edc2b5456546bcbcc57da5c8ad7fbe~mv2.png",
  "https://static.wixstatic.com/media/2e62f8_757781d2afad486ca268c473773090c4~mv2.png/v1/fit/w_98,h_34,q_90,enc_avif,quality_auto/2e62f8_757781d2afad486ca268c473773090c4~mv2.png",
  "https://static.wixstatic.com/media/ca5485_8cf6e34b03cd496fb22843facf78456f~mv2.png/v1/fit/w_98,h_34,q_90,enc_avif,quality_auto/ca5485_8cf6e34b03cd496fb22843facf78456f~mv2.png",
  "https://static.wixstatic.com/media/ca5485_579a36774f864bbfa6832e0b620ddc90~mv2.png/v1/fit/w_98,h_34,q_90,enc_avif,quality_auto/ca5485_579a36774f864bbfa6832e0b620ddc90~mv2.png",
  "https://static.wixstatic.com/media/ca5485_a33fa5cbc3714a73b9cdbbaf418fd666~mv2.png/v1/fit/w_98,h_34,q_90,enc_avif,quality_auto/ca5485_a33fa5cbc3714a73b9cdbbaf418fd666~mv2.png",
  "https://static.wixstatic.com/media/ca5485_9623e457bce74b0dbccf4f7d7117a858~mv2.png/v1/fit/w_98,h_34,q_90,enc_avif,quality_auto/ca5485_9623e457bce74b0dbccf4f7d7117a858~mv2.png",
  "https://static.wixstatic.com/media/ca5485_18f1f10f2fb2487580d6a031d389a9a7~mv2.png/v1/fit/w_98,h_34,q_90,enc_avif,quality_auto/ca5485_18f1f10f2fb2487580d6a031d389a9a7~mv2.png",
  "https://static.wixstatic.com/media/ca5485_9c130a37ba1040cc9b63de7aac42ca41~mv2.png/v1/fit/w_98,h_34,q_90,enc_avif,quality_auto/ca5485_9c130a37ba1040cc9b63de7aac42ca41~mv2.png",
  "https://static.wixstatic.com/media/ca5485_4d20977ffc9147adb9a82f8f142762c8~mv2.png/v1/fit/w_98,h_34,q_90,enc_avif,quality_auto/ca5485_4d20977ffc9147adb9a82f8f142762c8~mv2.png",
  "https://static.wixstatic.com/media/ca5485_c620a134b7ae4efca9f01b83e39d2ebb~mv2.png/v1/fit/w_98,h_34,q_90,enc_avif,quality_auto/ca5485_c620a134b7ae4efca9f01b83e39d2ebb~mv2.png",
  "https://static.wixstatic.com/media/ca5485_54bba684aaf54be0a4b55b8a199f9bcc~mv2.png/v1/fit/w_98,h_34,q_90,enc_avif,quality_auto/ca5485_54bba684aaf54be0a4b55b8a199f9bcc~mv2.png",
  "https://static.wixstatic.com/media/ca5485_57978c0705b04a859db3795ceb5791c9~mv2.png/v1/fit/w_98,h_34,q_90,enc_avif,quality_auto/ca5485_57978c0705b04a859db3795ceb5791c9~mv2.png",
  "https://static.wixstatic.com/media/ca5485_1477f9b03ec749cf801e72f77bba78fc~mv2.png/v1/fit/w_98,h_34,q_90,enc_avif,quality_auto/ca5485_1477f9b03ec749cf801e72f77bba78fc~mv2.png",
  "https://static.wixstatic.com/media/ca5485_709efe589fcf48d5a5a2a029a47137fc~mv2.png/v1/fit/w_98,h_34,q_90,enc_avif,quality_auto/ca5485_709efe589fcf48d5a5a2a029a47137fc~mv2.png",
  "https://static.wixstatic.com/media/ca5485_8229936df2fc4245ab1a6ea9a9cbde44~mv2.png/v1/fit/w_119,h_34,q_90,enc_avif,quality_auto/ca5485_8229936df2fc4245ab1a6ea9a9cbde44~mv2.png",
  "https://static.wixstatic.com/media/ca5485_9c061f4db79f463f901c5d276620f8a0~mv2.png/v1/fit/w_98,h_34,q_90,enc_avif,quality_auto/ca5485_9c061f4db79f463f901c5d276620f8a0~mv2.png",
  "https://static.wixstatic.com/media/ca5485_cb90fec86c4f42918158cb96af1df56d~mv2.png/v1/fit/w_98,h_34,q_90,enc_avif,quality_auto/ca5485_cb90fec86c4f42918158cb96af1df56d~mv2.png",
  "https://static.wixstatic.com/media/ca5485_ff90c9a0a81b4bffb34a168a79e7ce41~mv2.png/v1/fit/w_98,h_34,q_90,enc_avif,quality_auto/ca5485_ff90c9a0a81b4bffb34a168a79e7ce41~mv2.png",
  "https://static.wixstatic.com/media/ca5485_6deeaba9e778437383191befb51e9852~mv2.png/v1/fit/w_98,h_34,q_90,enc_avif,quality_auto/ca5485_6deeaba9e778437383191befb51e9852~mv2.png",
];

export default function ClientsCarousel() {
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
              alt="Cliente"
              className="h-12 w-auto object-contain grayscale opacity-70 hover:opacity-100 transition  hover:cursor-grab"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Partners.css";

import partner1 from "../../assets/partner1.png";
import partner2 from "../../assets/partner2.png";
import partner3 from "../../assets/partner3.png";
import partner4 from "../../assets/partner4.png";
import partner5 from "../../assets/partner5.png";
import { Image } from "react-bootstrap";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";




const partners = [
  { name: "GlobeMed", img: partner1 },
  { name: "Asia Insurance", img: partner2 },
  { name: "Gulf Insurance", img: partner3 },
  { name: "Baghdad Medical", img: partner4 },
  { name: "Wid", img: partner5 },
  { name: "GlobeMed", img: partner1 },
  { name: "Asia Insurance", img: partner2 },
  { name: "Gulf Insurance", img: partner3 },
  { name: "Baghdad Medical", img: partner4 },
  { name: "Wid", img: partner5 },
];

const PartnersSlider = ({
  className,
  data = partners,
  title = "Our Partners",
}) => {
  return (
    <div className={`partnersSection ${className}`}>
      <div className="customContainer">
        <h2 className="fw-bold mb-lg-5 mb-4 text-center">{title}</h2>
        <div className="partnersSliderWrapper">
          <div className="swiper-button-prev-custom"><IoIosArrowBack /></div>
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={5}
            loop
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom"
            }}
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 20 },
              640: { slidesPerView: 3, spaceBetween: 20 },
              1024: { slidesPerView: 5, spaceBetween: 20 },
            }}
            className="partners-swiper "
          >
            {data.map((partner, index) => (
              <SwiperSlide key={index}>
                <div className="partner-card">
                  <Image src={partner.img} alt={partner.name} fluid />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-button-next-custom"><IoIosArrowForward/></div>
        </div>
      </div>
    </div>
  );
};

export default PartnersSlider;

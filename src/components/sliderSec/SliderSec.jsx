import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./SliderSec.css";

import card1 from "../../assets/card1.jpg";
import card2 from "../../assets/card2.jpg";
import card3 from "../../assets/card3.jpg";
import card4 from "../../assets/card4.jpg";
import card5 from "../../assets/card5.jpg";
import BlueSuit from "../../assets/blueSuit.png";
import { Image } from "react-bootstrap";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const data = [
  { name: "GlobeMed", img: card1 },
  { name: "Asia Insurance", img: card2 },
  { name: "Gulf Insurance", img: card3 },
  { name: "Baghdad Medical", img: card4 },
  { name: "Wid", img: card5 },
  { name: "GlobeMed", img: card1 },
  { name: "Asia Insurance", img: card2 },
  { name: "Gulf Insurance", img: card3 },
  { name: "Baghdad Medical", img: card4 },
  { name: "Wid", img: card5 },
];

const SliderSec = ({ className }) => {
  return (
    <div className={`sliderSection overflow-hidden ${className}`}>
      <div className="customContainer">
        <div className="SliderWrapperGrid align-items-md-end align-items-center flex-md-row flex-column">
          <div className="custom-swiper-two ">
            <div className="slider-prev">
              <IoIosArrowBack />
            </div>
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={20}
              slidesPerView={2.2}
              loop
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              navigation={{
                nextEl: ".slider-next",
                prevEl: ".slider-prev",
              }}
              breakpoints={{
                0: { slidesPerView: 1, spaceBetween: 20 },
                320: { slidesPerView: 1, spaceBetween: 20 },
                1024: { slidesPerView: 2.2, spaceBetween: 20 },
              }}
            >
              {data.map((partner, index) => (
                <SwiperSlide key={index}>
                  <Image src={partner.img} alt={partner.name} fluid />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="slider-next">
              <IoIosArrowForward />
            </div>
          </div>
          <div className="rightImg ">
            <Image src={BlueSuit} fluid />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderSec;

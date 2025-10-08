import React, { useEffect } from "react";
import AOS from "aos";
import { Image } from "react-bootstrap";
import "./HeroSection.css";
import { FaArrowRight } from "react-icons/fa6";
import LogoIcon from "../../assets/logoIcon.png";
import LeftHoverImage1 from "../../assets/leftHoverImg1.png";
import LeftHoverImage2 from "../../assets/leftHoverImg2.png";
import RightHoverImage1 from "../../assets/rightHoverImg1.png";
import RightHoverImage2 from "../../assets/rightHoverImg2.png";
import leftSmallMob from "../../assets/leftSmallMob.png";
import leftMedMob from "../../assets/leftMedMob.png";
import rightSmallMob from "../../assets/rightSmallMob.png";
import rightMedMob from "../../assets/rightMedMob.png";
import centerMob from "../../assets/centerMob.png";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000,duration: 1000,easing: "ease-in-out", 
      once: false,   // set to true if you want animation only once
      mirror: false, });

      setTimeout(() => {
    AOS.refresh();
  }, 100);
  }, []);

  return (
    <section className="HeroSection">
      <div className="customContainer py-5">
        <div className="heroTop position-relative z-2">
          <div className="heroTopWrapper pt-md-5">
            <Image
            data-aos="fade-right"
              src={LeftHoverImage1}
              fluid
              className="LeftHoverImage1 hoverImage"
            />
            <Image
            data-aos="fade-left"
              src={RightHoverImage1}
              fluid
              className="RightHoverImage1 hoverImage"
            />
            <Image src={LogoIcon} fluid className="mb-4" />
            <h1 className="mb-4">
              Tiryaq <br />
              Smarter Healthcare, One Tap Away
            </h1>
            <p className="mb-4">
              Your health deserves more than just convenience—it deserves
              intelligence, clarity, and care. Tiryaq brings AI-powered
              features,<br className="d-xl-block d-none"/> loyalty rewards, and seamless experiences to your
              fingertips. Earn loyalty points with every purchase!
            </p>
            <div className="heroButtons">
              <a href="#" className="greenBtn">
                Download the App for Free
                <FaArrowRight />
              </a>
            </div>
          </div>
        </div>

        <div className="mobWrapper position-relative z-2 pt-5">
          <Image
            data-aos="fade-up-right"
            src={LeftHoverImage2}
            fluid
            className="LeftHoverImage1 LeftHoverImage2 hoverImage"
          />
          <Image
            data-aos="fade-up-left"
            src={RightHoverImage2}
            fluid
            className="RightHoverImage1 RightHoverImage2 hoverImage"
          />

          <div className="d-flex justify-content-center align-items-center py-lg-5 pt-md-5 mt-md-5">
            <Image
              // data-aos="fade-up"
              // data-aos-delay="200"
              src={leftSmallMob} fluid />
            <Image
              // data-aos="fade-up"
              // data-aos-delay="400"
              src={leftMedMob} className="mobMed" fluid />
            <Image
              // data-aos="fade-up"
              src={centerMob} className="mobCenter" fluid />
            <Image
              // data-aos="fade-up"
              // data-aos-delay="400"
              src={rightMedMob} className="mobMed" fluid />
            <Image
              // data-aos="fade-up"
              // data-aos-delay="200"
              src={rightSmallMob} fluid />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

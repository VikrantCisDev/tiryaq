import React, { useEffect } from "react";
import AOS from "aos";
import { Row, Col, Image } from "react-bootstrap";
import "./ImageTextSection.css"; 

const ImageTextSection = ({ 
  title, 
  description, 
  image, 
  imageBg,
  reverse,
  className,
  subheading
}) => {

  useEffect(() => {
      AOS.init({ duration: 1000,easing: "ease-in-out", 
      once: false,   // set to true if you want animation only once
      mirror: false, });

      setTimeout(() => {
    AOS.refresh();
  }, 100);
      
    }, []);

  return (
    <div className={`imgTxtSection overflow-hidden ${className}`}>
      <div className="innerContainer">
        <Row className={`align-items-center ${reverse ? "flex-row-reverse" : ""}`}>       
          <Col md={6} className={`${reverse ? "ps-lg-5" : ""}`}
          data-aos={reverse ? "fade-left" : "fade-right"}
          >
            {subheading && <p className="sub-title m-0">{subheading}</p>}
            <h2 className="fw-bold mb-3">{title}</h2>
            <p className="text-muted">{description}</p>
          </Col>

          <Col md={6} className="text-center"
          data-aos={reverse ? "fade-right" : "fade-left"}
          >
            <Image src={image} alt={title} fluid rounded />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ImageTextSection;

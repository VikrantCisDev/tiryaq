import React, { useEffect } from "react";
import AOS from "aos";
import { Row, Col, Image } from "react-bootstrap";
import "./WhyTiryak.css"; 
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import WhyTiryakImg from "../../assets/whyTiryaq.png"
import hoverImg1 from "../../assets/hoverImg1.png"
import hoverImg2 from "../../assets/hoverImg2.png"
import hoverImg3 from "../../assets/hoverImg3.png"
import hoverImg4 from "../../assets/hoverImg4.png"

const WhyTiryak = ({reverse = false}) => {
  useEffect(() => {
    AOS.init({ duration: 1000,duration: 1000,easing: "ease-in-out", 
      once: false,   // set to true if you want animation only once
      mirror: false, });

      setTimeout(() => {
    AOS.refresh();
  }, 100);
  }, []);
  return (
    <div className="whyTiryakSection overflow-hidden py-5">
      <div className="innerContainer">
        <Row className={`align-items-center gap-md-0 gap-2 ${reverse ? "flex-row-reverse" : ""}`}>       
          <Col md={6} className="text-center position-relative imgCol "
          data-aos={reverse ? "fade-left" : "fade-right"}
          >
            <Image src={WhyTiryakImg} alt="whyTiryak" fluid rounded />

                <Image src={hoverImg1} className="hoverImg hoverImg1" alt="" fluid  />
                <Image src={hoverImg2} className="hoverImg hoverImg2" alt="" fluid  />
                <Image src={hoverImg3} className="hoverImg hoverImg3" alt="" fluid  />
                <Image src={hoverImg4} className="hoverImg hoverImg4" alt="" fluid  />
          </Col>
          
          <Col md={6} className="ps-lg-5"
          data-aos={reverse ? "fade-right" : "fade-left"}
          >
            <h2 className="fw-bold mb-3">Why Tiryaq Stands Out</h2>
            <ul className="list-unstyled">
                    <li className="mb-4 d-flex">
                      <IoCheckmarkDoneSharp color="#00b6b6" className="me-2 mt-1" />
                      <div>
                        <strong>Trusted &amp; Secure:</strong><br />
                        Encrypted payments, validated prescriptions, and reliable delivery.
                      </div>
                    </li>
                    <li className="mb-4 d-flex">
                      <IoCheckmarkDoneSharp color="#00b6b6" className="me-2 mt-1" />
                      <div>
                        <strong>Multilingual Experience:</strong><br />
                        Available in Arabic, English, and Kurdish.
                      </div>
                    </li>
                    <li className="mb-4 d-flex">
                      <IoCheckmarkDoneSharp color="#00b6b6" className="me-2 mt-1" />
                      <div>
                        <strong>Comprehensive Platform:</strong><br />
                        Medicines, doctors, and labs — all in one app.
                      </div>
                    </li>
                    <li className="d-flex">
                      <IoCheckmarkDoneSharp color="#00b6b6" className="me-2 mt-1" />
                      <div>
                        <strong>Rewards &amp; Savings:</strong><br />
                        Loyalty points, insurance support, and exclusive discounts.
                      </div>
                    </li>
                  </ul>
          </Col>

          
        </Row>
      </div>
    </div>
  );
};

export default WhyTiryak;

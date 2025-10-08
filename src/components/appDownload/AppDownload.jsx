import React, { useEffect } from "react";
import AOS from "aos";
import "./AppDownload.css";
import { Col, Image, Row } from "react-bootstrap";
import topcutphone from "../../assets/topcutphone.png";
import bottomcutphone from "../../assets/bottomcutphone.png";
import androidQR from "../../assets/androidQR.png";
import iosQR from "../../assets/iosQR.png";

const AppDownload = () => {
  useEffect(() => {
    AOS.init({ duration: 1000,duration: 1000,easing: "ease-in-out", 
      once: false,   // set to true if you want animation only once
      mirror: false, });

      setTimeout(() => {
    AOS.refresh();
  }, 100);
  }, []);
  return (
    <section className="appDownloadSection overflow-hidden">
      <div className="innerContainer">
        <Row className="flex-lg-row flex-column-reverse">
          <Col lg={3} className="align-self-end text-center adHalf_img pt-lg-5">
            <Image src={bottomcutphone} fluid data-aos="fade-up"/>
          </Col>
          <Col lg={6} className="ad_centerCol text-center">
            <h2 className="fw-semibold mb-4">Your Health. Your Way.</h2>
            <div className="qrBox bg-white rounded p-3">
              <p className="fw-medium mb-4 mt-1">
                Download Tiryaq and connect with doctors, pharmacies, and labs
                today.
              </p>
              <Row>
                <Col>
                  <Image src={androidQR} fluid />
                </Col>
                <Col>
                  <Image src={iosQR} fluid />
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg={3} className="align-self-start text-center adHalf_img pb-lg-5">
            <Image src={topcutphone} fluid data-aos="fade-down"/>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default AppDownload;

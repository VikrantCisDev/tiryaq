import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import reliableIcon from "../../assets/reliableIcon.png"; // Use your actual icon path
import secureIcon from "../../assets/cyberIcon.png";   // Use your actual icon path
import isoCertified from "../../assets/ISOCertifiedIcon.png"; // Use your actual ISO image

const TrustSection = () => (
  <section className="trustSection border-top py-5 bg-white">
    <Container className="innerContainer">
      <Row className="mb-4">
        <Col md={6} className="mb-4 mb-md-0 d-flex align-items-start gap-3 pe-lg-5">
          <Image src={reliableIcon} alt="Reliable" fluid />
          <div>
            <h5 className="fw-bold mb-1">Reliable</h5>
            <p className="text-muted mb-0" >
              All doctors, pharmacies, and labs listed on Tiryaq are verified and approved by the platform's admin panel, ensuring trust and authenticity.
            </p>
          </div>
        </Col>
        <Col md={6} className="d-flex align-items-start gap-3">
          <Image src={secureIcon} alt="Secure" fluid />
          <div>
            <h5 className="fw-bold mb-1">Secure</h5>
            <p className="text-muted mb-0" >
              Tiryaq uses Secure Sockets Layer (SSL) technology, encrypted payments (Cash, Card, Zain Cash), and strict prescription validation, safeguarding both data and transactions.
            </p>
          </div>
        </Col>
      </Row>
      <hr className="my-5 text-muted" />
      <Row className="justify-content-center mt-4">
        <Col xs={12} className="text-center">
          <Image src={isoCertified} alt="ISO Certified" fluid />
        </Col>
      </Row>
    </Container>
  </section>
);

export default TrustSection;
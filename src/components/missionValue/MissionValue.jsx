import React, { useEffect } from "react";
import "./MissionValue.css";
import { Row, Col, Card, Image } from "react-bootstrap";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import MissionImg from "../../assets/black_suit.png";
import AOS from "aos";

const MissionValuesSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      duration: 1000,
      easing: "ease-in-out",
      once: false, 
      mirror: false,
    });

    setTimeout(() => {
      AOS.refresh();
    }, 100);
  }, []);
  return (
    <section className="bg-light-green missionValueSec ">
      <div className="innerWrapper py-md-0 py-5">
        <Row className="align-items-center">
          <Col className="sideImg pt-lg-5 pe-lg-0 text-lg-end text-center ">
            <Image src={MissionImg} alt="Mission Character" fluid data-aos="fade-right" />
          </Col>
          <Col lg={10} md={10}  className="ps-lg-0 py-md-5  ">
            <Row className="gap-md-0 gap-4">
              <Col md={6} className="">
                <Card className="mission-card" data-aos="fade-up">
                  <Card.Body>
                    <h3 className="mb-4">Our Mission</h3>
                    <ul className="list-unstyled mb-0">
                      <li className="mb-3 d-flex">
                        <IoCheckmarkDoneSharp
                          color="#00b6b6"
                          className="me-2 mt-1"
                        />
                        <div>
                          <strong>Connect Healthcare:</strong>
                          <br />
                          Bridge patients, doctors, pharmacies, & labs in one
                          seamless ecosystem.
                        </div>
                      </li>
                      <li className="mb-3 d-flex">
                        <IoCheckmarkDoneSharp
                          color="#00b6b6"
                          className="me-2 mt-1"
                        />
                        <div>
                          <strong>Simplify Access:</strong>
                          <br />
                          Make medicines, consultations, & lab tests available
                          anytime, anywhere.
                        </div>
                      </li>
                      <li className="d-flex">
                        <IoCheckmarkDoneSharp
                          color="#00b6b6"
                          className="me-2 mt-1"
                        />
                        <div>
                          <strong>Empower Patients:</strong>
                          <br />
                          Provide tools to track health history, prescriptions,
                          and appointments.
                        </div>
                      </li>
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} className="">
                <Card className="mission-card" data-aos="fade-up">
                  <Card.Body>
                    <h3 className="mb-4">Our Values</h3>
                    <ul className="list-unstyled mb-0">
                      <li className="mb-3 d-flex">
                        <IoCheckmarkDoneSharp
                          color="#00b6b6"
                          className="me-2 mt-1"
                        />
                        <div>
                          <strong>Accessibility:</strong>
                          <br />
                          Bringing healthcare services to every patient,
                          anywhere, anytime.
                        </div>
                      </li>
                      <li className="mb-3 d-flex">
                        <IoCheckmarkDoneSharp
                          color="#00b6b6"
                          className="me-2 mt-1"
                        />
                        <div>
                          <strong>Innovation:</strong>
                          <br />
                          Using AI, automation, and smart integrations to
                          deliver better care.
                        </div>
                      </li>
                      <li className="d-flex">
                        <IoCheckmarkDoneSharp
                          color="#00b6b6"
                          className="me-2 mt-1"
                        />
                        <div>
                          <strong>Trust:</strong>
                          <br />
                          Ensuring prescriptions, payments, & personal data are
                          handled securely.
                        </div>
                      </li>
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default MissionValuesSection;

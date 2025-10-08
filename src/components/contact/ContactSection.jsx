import React from "react";
import "./ContactSection.css"
import { Container,  Row,  Col,  Form,  Button,  Image,  InputGroup,  Dropdown,} from "react-bootstrap";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import isoCertified from "../../assets/iso-certified.svg"; // Place your ISO image here

const ContactSection = () => (
  <section className="contactSection py-5">
    <Container className="innerContainer">
      <Row className="g-4 flex-lg-row flex-column-reverse">
        <Col lg={6} md={12} className="pe-lg-5">
          <h2 className="fw-bold mb-2">Contact us</h2>
          <p className="mb-4 text-muted pe-lg-5">
            Lorem ipsum dolor sit amet consectetur adipiscing elit nulla adipiscing tincidunt interdum tellus du.
          </p>
          <Form>
            <Row className="mb-3">
              <Col md={6} className="mb-3 mb-md-0">
                <Form.Label className="fw-semibold mb-1">Name</Form.Label>
                <Form.Control type="text" placeholder="Placeholder" />
              </Col>
              <Col md={6}>
                <Form.Label className="fw-semibold mb-1">Mobile Number</Form.Label>
                <InputGroup>
                  <Dropdown className="form-dropdown">
                    <Dropdown.Toggle id="dropdown-basic" className="formDdBtn">
                      <img 
                        src="https://flagcdn.com/iq.svg"
                        alt="Iraq"
                        width="24"
                        height="16"
                      />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">
                        <img
                          src="https://flagcdn.com/iq.svg"
                          alt="Iraq"
                          width="24"
                          height="16"
                        />
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        <img
                          src="https://flagcdn.com/iq.svg"
                          alt="Iraq"
                          width="24"
                          height="16"
                        />
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        <img
                          src="https://flagcdn.com/iq.svg"
                          alt="Iraq"
                          width="24"
                          height="16"
                        />
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Form.Control type="text" placeholder="770 123 4567" />
                </InputGroup>
              </Col>
            </Row>
            <Form.Group className="mb-3">
              <Form.Label className="fw-semibold mb-1">Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Please enter your message here"
              />
            </Form.Group>
            <Button className="greenBtn fw-semibold px-4 py-2 mb-3">
              Get in Touch
            </Button>
          </Form>
          <hr className="my-lg-5 my-4 text-muted "/>
          <div className=" mb-2">
            <div className="d-flex align-items-center gap-2 mb-2">
              <FaEnvelope className="text-muted" />
              <span className="text-muted">tiryaqsupport@tiryaq.com</span>
            </div>
            <div className="d-flex align-items-center gap-2 mb-2">
              <FaPhone className="text-muted" />
              <span className="text-muted">+964 7701 234 568</span>
            </div>
          </div>
          <div className="d-flex gap-3 mt-2 fw-semibold">
            <a href="#" className="text-primary text-decoration-none">
              Terms of Use
            </a>
            <span className="text-muted">&nbsp;|&nbsp;</span> 
            <a href="#" className="text-primary text-decoration-none">
              Privacy Policy
            </a>
          </div>
        </Col>
        <Col lg={6} md={12}>
          <div className="isoBg-color rounded-4 d-flex justify-content-center align-items-center h-100 p-5">
            <Image src={isoCertified} alt="ISO Certified" fluid />
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default ContactSection;

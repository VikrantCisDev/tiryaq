import React, { useRef, useState, useEffect } from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import "./TermsSection.css";
import { FaArrowRightLong } from "react-icons/fa6";



const termsSections = [
  { id: "eligibility", label: "1. Eligibility" },
  { id: "use-of-services", label: "2. Use of Services" },
  { id: "intellectual-property", label: "3. Intellectual Property" },
  { id: "user-content", label: "4. User Content" },
  { id: "disclaimers", label: "5. Disclaimers" },
  { id: "limitation-liability", label: "6. Limitation of Liability" },
  { id: "termination", label: "7. Termination" },
  { id: "governing-law", label: "8. Governing Law" },
  { id: "changes-to-terms", label: "9. Changes to Terms" },
  { id: "contact-us", label: "10. Contact Us" },
];

const TermsSection = () => {
  // Create refs for each section at the top level
  const eligibilityRef = useRef(null);
  const useOfServicesRef = useRef(null);
  const intellectualPropertyRef = useRef(null);
  const userContentRef = useRef(null);
  const disclaimersRef = useRef(null);
  const limitationLiabilityRef = useRef(null);
  const terminationRef = useRef(null);
  const governingLawRef = useRef(null);
  const changesToTermsRef = useRef(null);
  const contactUsRef = useRef(null);

  // Map section ids to refs
  const refs = {
    eligibility: eligibilityRef,
    "use-of-services": useOfServicesRef,
    "intellectual-property": intellectualPropertyRef,
    "user-content": userContentRef,
    disclaimers: disclaimersRef,
    "limitation-liability": limitationLiabilityRef,
    termination: terminationRef,
    "governing-law": governingLawRef,
    "changes-to-terms": changesToTermsRef,
    "contact-us": contactUsRef,
  };

  const [active, setActive] = useState(termsSections[0].id);

  useEffect(() => {
    const handleScrollActive = () => {
      let found = termsSections[0].id;
      for (let i = 0; i < termsSections.length; i++) {
        const ref = refs[termsSections[i].id].current;
        if (ref) {
          const rect = ref.getBoundingClientRect();
          if (rect.top <= 120) found = termsSections[i].id;
        }
      }
      setActive(found);
    };
    window.addEventListener("scroll", handleScrollActive, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollActive);
  }, [refs]);

  const handleScroll = (id) => {
    refs[id].current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="termsSec py-5">
      <Container className="customContainer ">
        <Row className="mt-lg-4 flex-lg-row flex-column-reverse gap-lg-0 gap-5">
          <Col lg={8} className="mb-4 mb-lg-0">
            <div className="pe-lg-4 ps-lg-5">
              <h2 className="fw-bold mb-1">Terms of Use</h2>
              <div className="text-muted mb-4 fs-6">
                Last Updated: 14 / 07 / 2025
              </div>
              <p>
                Welcome to Tiryaq! These Terms of Use ("Terms") govern your access to and use of our website, services, and content (collectively, the "Services"). Please read them carefully. By using our Services, you agree to these Terms. If you don’t agree, you may not use the Services.
              </p>
              <h5 ref={eligibilityRef} id="eligibility" className="fw-bold mt-4">1. Eligibility</h5>
              <p>
                You must be at least 18 years old (or the age of majority in your jurisdiction) to use our Services. By using the Services, you represent and warrant that you meet these requirements.
              </p>
              <h5 ref={useOfServicesRef} id="use-of-services" className="fw-bold mt-4">2. Use of Services</h5>
              <ul>
                <li>Violate any applicable laws or regulations.</li>
                <li>Attempt to gain unauthorized access.</li>
                <li>Interfere with the rights of others.</li>
                <li>Misuse or abuse the Services or any proper functioning of the Services.</li>
              </ul>
              <h5 ref={intellectualPropertyRef} id="intellectual-property" className="fw-bold mt-4">3. Intellectual Property</h5>
              <p>
                All content, trademarks, logos, and materials available on our Services are the property of Tiryaq or its licensors. You may not copy, distribute, or otherwise use without prior written permission.
              </p>
              <h5 ref={userContentRef} id="user-content" className="fw-bold mt-4">4. User Content</h5>
              <p>
                If you submit, post, or upload content through our Services, you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, and distribute such content for the purposes of providing the Services.
              </p>
              <h5 ref={disclaimersRef} id="disclaimers" className="fw-bold mt-4">5. Disclaimers</h5>
              <p>
                Our Services are provided "as is" and "as available" basis. We make no warranties or representations about the accuracy, reliability, or availability of the Services.
              </p>
              <h5 ref={limitationLiabilityRef} id="limitation-liability" className="fw-bold mt-4">6. Limitation of Liability</h5>
              <p>
                To the maximum extent permitted by law, Tiryaq is not liable for any damages arising from your use of the Services, including but not limited to indirect, incidental, or consequential damages.
              </p>
              <h5 ref={terminationRef} id="termination" className="fw-bold mt-4">7. Termination</h5>
              <p>
                We reserve the right to suspend or terminate your access to the Services at any time, without prior notice, for any reason.
              </p>
              <h5 ref={governingLawRef} id="governing-law" className="fw-bold mt-4">8. Governing Law</h5>
              <p>
                These terms and policies are governed and construed in accordance with the laws of Iraq, without regard to its conflict of law principles.
              </p>
              <h5 ref={changesToTermsRef} id="changes-to-terms" className="fw-bold mt-4">9. Changes to Terms</h5>
              <p>
                We reserve the right to update or change these Terms at any time. If we make material changes, we will notify you by posting the updated Terms on our website. Your continued use of the Services after changes are posted constitutes your acceptance of the updated Terms.
              </p>
              <h5 ref={contactUsRef} id="contact-us" className="fw-bold mt-4">10. Contact Us</h5>
              <p>
                If you have any questions about these Terms, please contact us at:<br />
                tiryaqsupport@tiryaq.com<br />
                +964 7701 234 568
              </p>
            </div>
          </Col>
          <Col lg={4}>
          <div className="sticky-sidebar px-lg-4 px-0">
              <div className="sidebar-box">
                <h3 className="fw-bold h3 mb-4 text-black">In This Section</h3>
                <ListGroup variant="flush">
                  {termsSections.map((section) => (
                    <ListGroup.Item
                      key={section.id}
                      action
                      onClick={() => handleScroll(section.id)}
                      active={active === section.id}
                      className={`mb-2 sidebar-link ${active === section.id ? "active-link" : ""}`}
                    >
                      <p className={`py-2 px-3  ${active === section.id ? "active-link" : ""}`}>{section.label}</p>
                      {/* {active === section.id && ( */}
                        <span className="rightIcon-arrow ">
                          <FaArrowRightLong />
                        </span>
                      {/* )} */}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </div>
              </div>
            
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TermsSection;
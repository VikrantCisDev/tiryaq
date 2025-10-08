import React from "react";
import "./Home.css"
import Header from "../../components/header/Header";
import HeroSection from "../../components/hero/HeroSection";
import ImageTextSection from "../../components/imageText/ImageTextSection";
import MissionValuesSection from "../../components/missionValue/MissionValue";
import PartnersSlider from "../../components/partners/Partners";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import WhyTiryak from "../../components/whyTiryak/WhyTiryak";
import SliderSec from "../../components/sliderSec/SliderSec";
import AboutImg from "../../assets/about.png";
import Product1 from "../../assets/product1.png";
import Product2 from "../../assets/product2.png";
import Product3 from "../../assets/product3.png";
import Product4 from "../../assets/product4.png";
import AppDownload from "../../components/appDownload/AppDownload";
import ContactSection from "../../components/contact/ContactSection";
import TrustSection from "../../components/trustSec/TrustSection";
import Footer from "../../components/footer/Footer";

const Home = () => {
  const aboutText = (
    <>
      <p>
        Tiryaq is an all-in-one digital healthcare and pharmacy platform
        designed to make healthcare simple, accessible, and reliable. We connect
        patients, doctors, pharmacists, and labs through a single, easy-to-use
        app — bringing the entire healthcare ecosystem to your fingertips.
      </p>
      <p>
        From uploading prescriptions and ordering medicines to booking doctor
        consultations and home lab tests, Tiryaq ensures you get the care you
        need, when you need it. With integrated insurance validation, secure
        payments, real-time order tracking, and loyalty rewards, we go beyond
        convenience to deliver trust and value.
      </p>
    </>
  );

  const loyaltyDescription = (
    <ul className="list-unstyled mb-0">
      <li className="mb-2 d-flex">
        <IoCheckmarkDoneSharp color="#00b6b6" className="me-2 mt-1" />
        <span>Earn loyalty points with every purchase</span>
      </li>
      <li className="mb-2 d-flex">
        <IoCheckmarkDoneSharp color="#00b6b6" className="me-2 mt-1" />
        <span>Redeem points for discounts and exclusive offers</span>
      </li>
      <li className="mb-2 d-flex">
        <IoCheckmarkDoneSharp color="#00b6b6" className="me-2 mt-1" />
        <span>Track your rewards easily in the Tiryaq app</span>
      </li>
    </ul>
  );

  const orderStatusDescription = (
    <ul className="list-unstyled mb-0">
      <li className="mb-2 d-flex">
        <IoCheckmarkDoneSharp color="#00b6b6" className="me-2 mt-1" />
        <span>Track your medicine and lab orders in real time</span>
      </li>
      <li className="mb-2 d-flex">
        <IoCheckmarkDoneSharp color="#00b6b6" className="me-2 mt-1" />
        <span>Get instant notifications for order updates</span>
      </li>
      <li className="mb-2 d-flex">
        <IoCheckmarkDoneSharp color="#00b6b6" className="me-2 mt-1" />
        <span>View detailed order history and tracking</span>
      </li>
    </ul>
  );

  const platformDescription = (
    <ul className="list-unstyled mb-0">
      <li className="mb-2 d-flex">
        <IoCheckmarkDoneSharp color="#00b6b6" className="me-2 mt-1" />
        <span>Consult doctors, order medicines, and book lab tests</span>
      </li>
      <li className="mb-2 d-flex">
        <IoCheckmarkDoneSharp color="#00b6b6" className="me-2 mt-1" />
        <span>All services available in one seamless platform</span>
      </li>
      <li className="mb-2 d-flex">
        <IoCheckmarkDoneSharp color="#00b6b6" className="me-2 mt-1" />
        <span>Integrated insurance and prescription management</span>
      </li>
    </ul>
  );

  const convenienceDescription = (
    <ul className="list-unstyled mb-0">
      <li className="mb-2 d-flex">
        <IoCheckmarkDoneSharp color="#00b6b6" className="me-2 mt-1" />
        <span>Easy-to-use app for all ages</span>
      </li>
      <li className="mb-2 d-flex">
        <IoCheckmarkDoneSharp color="#00b6b6" className="me-2 mt-1" />
        <span>Available in multiple languages</span>
      </li>
      <li className="mb-2 d-flex">
        <IoCheckmarkDoneSharp color="#00b6b6" className="me-2 mt-1" />
        <span>24/7 access to healthcare services</span>
      </li>
    </ul>
  );

  return (
    <>
      <Header />
      <HeroSection />
      <ImageTextSection
        title="About Tiryaq"
        description={aboutText}
        image={AboutImg}
        reverse={false}
        className="py-md-5 py-4"
      />
      <MissionValuesSection />
      <WhyTiryak reverse={false} />
      <PartnersSlider className="bg-light-green" />
      <SliderSec />
      <section className="productFeatures py-lg-5 py-4">
        <div className="productFeatures-top text-center">
          <h2 class="fw-bold">Product Features</h2>
          <p className="text-muted">Everything you need here in one app.</p>
        </div>

        <ImageTextSection
          subheading="Earn Loyalty Points"
          title="Loyalty & Discounts"
          description={loyaltyDescription}
          image={Product1}
          reverse={false}
          className="py-md-5 py-4"
        />
        <ImageTextSection
          subheading="Order Status"
          title="Real-Time Order Status Tracking"
          description={orderStatusDescription}
          image={Product2}
          reverse={true}
          className="py-md-5 py-4"
        />
        <ImageTextSection
          subheading="One Healthcare App"
          title="Doctor, Lab & Pharmacy in One Place"
          description={platformDescription}
          image={Product3}
          reverse={false}
          className="py-md-5 py-4"
        />
        <ImageTextSection
          subheading="Fast & Accessible"
          title="Convenience & Accessibility"
          description={convenienceDescription}
          image={Product4}
          reverse={true}
          className="py-md-5 py-4"
        />
      </section>
      <AppDownload/>
      <ContactSection/>
      <TrustSection/>
      <Footer/>
    </>
  );
};

export default Home;

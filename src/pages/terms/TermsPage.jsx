import React from "react";
import Header from "../../components/header/Header";
import AppDownload from "../../components/appDownload/AppDownload";
import TrustSection from "../../components/trustSec/TrustSection";
import Footer from "../../components/footer/Footer";
import TermsSection from "../../components/terms/TermsSection";

const TermsPage = () => {
  return (
    <>
      <Header />
      <TermsSection/>
      <AppDownload/>
      <TrustSection/>
      <Footer/>
    </>
  );
};

export default TermsPage;

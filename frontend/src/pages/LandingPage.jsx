import React from "react";
import Hero from "../sections/Hero";
import Navbar from "../components/Navbar";
import styles from "../style";
import Stats from "../sections/Stats";
import Business from "../sections/Business";
import Billing from "../sections/Billing";
import Footer from "../services/Footer";

const LandingPage = () => {
  return (
    <>
      <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Stats />
            <Business />
            <Billing />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;

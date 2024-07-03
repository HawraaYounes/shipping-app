import React from "react";
import Hero from "../sections/Hero";
import Navbar from "../components/Navbar";
import styles from "../style";
// Import other sections as needed

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
          <div className={`${styles.boxWidth}`}>Other sections clients cta</div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;

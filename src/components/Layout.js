import React, { useRef, useEffect } from "react";
import HomePage from "./HomePage/HomePage";
import Navbar from "./Navbar/Navbar";
import Stories from "./Stories/Stories";
import AboutUS from "./AboutUS/AboutUS";
import Legacy from "./Legacy/Legacy";
import OurBusiness from "./OurBusiness/OurBusiness";
import InvesterPage from "./InvesterPage/InvesterPage";
import Content1 from "./Content1/Content1";
import Footer from "./Footer/Footer";
import Overview from "./Overview/Overview";
import How_we from "./How_we/How_we";
import Who_we_are from "./Who_we_are/Who_we_are";
import OUREXPERTISE from "./OUREXPERTISE/OUREXPERTISE";
import "./Layout.css";

const Layout = () => {
  const whoWeAreRef = useRef(null);
  const howWeRef = useRef(null);
  const ourExpertiseRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    window.scrollTo({
      top: sectionRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    console.log(window.scrollY);
  }, []);

  return (
    <div className="Main_Layout_Container">
      <Navbar />
      <HomePage />
      <Overview />
      <Stories
        onWhoWeAreClick={() => scrollToSection(whoWeAreRef)}
        onHowWeClick={() => scrollToSection(howWeRef)}
        onOurExpertiseClick={() => scrollToSection(ourExpertiseRef)}
      />
      <div ref={whoWeAreRef}>
        <Who_we_are />
      </div>
      <div ref={howWeRef}>
        <How_we />
      </div>
      <div ref={ourExpertiseRef}>
        <OUREXPERTISE />
      </div>
      <AboutUS />
      <Legacy />
      <OurBusiness />
      <InvesterPage />
      <Content1 />
      {/* <Content2/> */}
      <Footer />
    </div>
  );
};

export default Layout;

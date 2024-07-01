import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [Navdisplay, setNavdisplay] = useState(false);
  const [Navdisplay2, setNavdisplay2] = useState(false);
  const [showMenu, setshowMenu] = useState(false);
  const [showinnovation, setshowinnovation] = useState(false);
  const [showwhatwedo, setshowwhatwedo] = useState(false);
  const [showAbout, setshowAbout] = useState(false);
  const [Navdisplay3, setNavdisplay3] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setScrolled(currentScrollPos > prevScrollPos && currentScrollPos > 50);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const leftParaRef = useRef(null);

  useEffect(() => {
    const leftPara = leftParaRef.current;

    gsap.fromTo(
      leftPara,
      { height: 0, opacity: 0 },
      {
        opacity: 1,
        height: 100,
        duration: 0.5,
      }
    );
  }, []);

  const handlelowernav1 = () => {
    setNavdisplay(!Navdisplay);
  };

  const handlelowernav1ononav2 = () => {
    setNavdisplay(false);
    setNavdisplay3(false);
  };

  const handlelowernav2ononav1 = () => {
    setNavdisplay2(false);
  };

  const handlelowernav2ononav3 = () => {
    setNavdisplay2(false);
    setNavdisplay3(true);
  };

  const handlelowernav3ononav3 = () => {
    setNavdisplay3(false);
  };

  const handlelowernav2 = () => {
    setNavdisplay2(!Navdisplay2);
  };

  const handlelowernav3 = () => {
    setNavdisplay3(true);
  };

  const handleMenuBar = () => {
    setshowMenu(!showMenu);
  };

  // console.log(scrolled);

  // console.log(Navdisplay);
  const handleshowinnovation = () => {
    console.log(showinnovation);
    setshowinnovation(!showinnovation);
  };

  const handleshowwhatwedo = () => {
    setshowwhatwedo(!showwhatwedo);
  };

  const handleshowAbout = () => {
    setshowAbout(!showAbout);
  };

  return (
    <div ref={leftParaRef} className="Navbar_main">
      <div className={` Navbar_upper_div`}>
        <span style={{ fontSize: "10px" }}>@Copyright</span>
      </div>
      <div
        className={`Navbar_main_div ${
          scrolled ? "" : "Navbar_fixed"
          // { /* Navbar_fixed */}
        }`}
      >
        <div className="Navbar_left_div"></div>
        <div className="Navbar_right_div">
          <div className="link_div">
            <Link to="/" className="navbar_link">
              Home
            </Link>
          </div>
          <div className="link_div">
            <Link
              onMouseEnter={handlelowernav2ononav1}
              onMouseOver={handlelowernav1}
              className="navbar_link"
            >
              Innovative Technologies
            </Link>
            <div
              onMouseLeave={handlelowernav1}
              className={`LowerNav_main ${
                Navdisplay ? "displaylowernav1" : "nodisplaylowernav1"
              }`}
            >
              <div className="LowerNav_main_block">
                <h6>ENERGY</h6>
                {/* SUNSUL_Technology */}
                <Link
                  to="/SUNSUL_Technology/Description"
                  className="lower_navbar_link"
                >
                  SUNSUL Technology
                </Link>
                <Link
                  to="/Sewage_sludge/Description"
                  className="lower_navbar_link"
                >
                  Sewage Sludge Incinerator
                </Link>
                <Link
                  to="/Basalt_Mining/Description"
                  className="lower_navbar_link"
                >
                  Basalt Mining
                </Link>
                {/* sewage sludge */}
                <Link
                  to="/Electric_Bus/Description"
                  className="lower_navbar_link"
                >
                  Electric Bus
                </Link>
                {/* Gasification */}
                <Link
                  to="/Gasification/Description"
                  className="lower_navbar_link"
                >
                  Gasification
                </Link>
              </div>
              <div className="LowerNav_main_block">
                <h6>CONSTRUCTION</h6>
                {/* Green_cement */}
                <Link
                  to="/Green_cement/Description"
                  className="lower_navbar_link"
                >
                  Green Cement
                </Link>
                {/* High Performanec Crete */}
                <Link
                  to="/High_Performanec_Crete/Description"
                  className="lower_navbar_link"
                >
                  High Performanec Crete
                </Link>
                <Link
                  to="/affortable_housing/Description"
                  className="lower_navbar_link"
                >
                  Affortable Housing
                </Link>
                <Link
                  to="/Basalt_Rebar/Description"
                  className="lower_navbar_link"
                >
                  Basalt Rebar
                </Link>
              </div>
              <div className="LowerNav_main_block">
                <h6>MEDICAL </h6>
                {/* Green_cement */}
                <Link
                  to="/Cholestrol/Description"
                  className="lower_navbar_link"
                >
                  Cholesterol Immunization
                </Link>
              </div>
            </div>
          </div>
          <div className="link_div">
            <Link
              onMouseEnter={handlelowernav1ononav2}
              onMouseOver={handlelowernav2}
              className="navbar_link"
            >
              What We Do
            </Link>
            <div
              onMouseLeave={handlelowernav2}
              className={`LowerNav_main2 ${
                Navdisplay2 ? "displaylowernav2" : "nodisplaylowernav2"
              }`}
            >
              <div className="LowerNav_main2_block">
                <Link to="/Patent_Monetization" className="lower_navbar_link">
                  Patent Monetization
                </Link>
                {/* Patent_Commercialization */}
                <Link
                  to="/Patent_Commercialization"
                  className="lower_navbar_link"
                >
                  Patent Commercialization
                </Link>
                {/* Invest */}
                <Link to="/Invest" className="lower_navbar_link">
                  Invest
                </Link>
              </div>
              <div className="LowerNav_main2_block">
                {/* Patents_Development_Program */}
                <Link
                  to="/Patents_Development_Program"
                  className="lower_navbar_link"
                >
                  Patents Development Program
                </Link>
                {/*  */}
                <Link to="/Research" className="lower_navbar_link">
                  Research
                </Link>
                {/* Technology Transfer */}
                <Link to="/TechnologyTransfer" className="lower_navbar_link">
                  Technology Transfer
                </Link>
              </div>
              <div className="LowerNav_main2_block">
                {/* Strategize */}
                <Link to="/Strategize" className="lower_navbar_link">
                  Strategize
                </Link>
                {/* PatentValuation */}
                <Link to="/PatentValuation" className="lower_navbar_link">
                  Patent Valuation
                </Link>
                {/* PatentLicensing */}
                <Link to="/PatentLicensing" className="lower_navbar_link">
                  Patent Licensing
                </Link>
              </div>
            </div>
          </div>
          <div
            onMouseEnter={handlelowernav2ononav3}
            onMouseOver={handlelowernav3}
            className="link_div"
          >
            <Link className="navbar_link">About Navrattan</Link>
            <div
              onMouseEnter={() => setNavdisplay3(true)}
              onMouseLeave={handlelowernav3}
              className={`LowerNav_main3 ${
                Navdisplay3 ? "displaylowernav3" : "nodisplaylowernav3"
              }`}
            >
              <div className="LowerNav_main3_block">
                <Link to="/Company_Overview" className="lower_navbar_link">
                  Company Overview
                </Link>
                {/* Patent_Commercialization */}
                <Link to="/Founder" className="lower_navbar_link">
                  Founder
                </Link>
                {/* Invest */}
                <Link to="/Carrier" className="lower_navbar_link">
                  Careers @Navrattan
                </Link>
              </div>
            </div>
          </div>
          <div className="link_div">
            <Link to="/News" className="navbar_link">
              News Updates
            </Link>
          </div>
          <div className="link_div">
            <Link to="/FAQS" className="navbar_link">
              FAQS
            </Link>
          </div>
          <div className="link_div">
            <Link className="navbar_link">Contact</Link>
          </div>
        </div>
        <div onClick={handleMenuBar} className="Navbar_menu_div">
          <div className="link_div">
            <Link className="navbar_link">
              <span
                style={{ fontSize: "40px", cursor: "pointer", color: "white" }}
              >
                <i class="bi bi-list"></i>
              </span>
            </Link>
          </div>
        </div>
      </div>
      {showMenu ? (
        <div className="Nav_responsive_div">
          <div className="Nav_responsive_link_div">
            <Link to="/" className="navbar_link">
              Home
            </Link>
          </div>
          <div className="Nav_responsive_link_div">
            <Link className="navbar_link">Innovative Technologies</Link>
            <span
              onClick={handleshowinnovation}
              className="Nav_responsive_Plus"
            >
              <i class="bi bi-plus"></i>
            </span>
          </div>
          {showinnovation ? (
            <div className={`Nav_responsive_LowerNav_main`}>
              <Link
                to="/SUNSUL_Technology/Description"
                className="lower_navbar_link"
              >
                SUNSUL Technology
              </Link>
              <Link
                to="/Sewage_sludge/Description"
                className="lower_navbar_link"
              >
                Sewage Sludge Incinerator
              </Link>
              <Link
                to="/Basalt_Mining/Description"
                className="lower_navbar_link"
              >
                Basalt Mining
              </Link>
              {/* sewage sludge */}
              <Link
                to="/Electric_Bus/Description"
                className="lower_navbar_link"
              >
                Electric Bus
              </Link>
              {/* Gasification */}
              <Link
                to="/Gasification/Description"
                className="lower_navbar_link"
              >
                Gasification
              </Link>
              <Link
                to="/Green_cement/Description"
                className="lower_navbar_link"
              >
                Green Cement
              </Link>
              {/* High Performanec Crete */}
              <Link
                to="/High_Performanec_Crete/Description"
                className="lower_navbar_link"
              >
                High Performanec Crete
              </Link>
              <Link
                to="/affortable_housing/Description"
                className="lower_navbar_link"
              >
                Affortable Housing
              </Link>
              <Link
                to="/Basalt_Rebar/Description"
                className="lower_navbar_link"
              >
                Basalt Rebar
              </Link>
              <Link to="/Cholestrol/Description" className="lower_navbar_link">
                Cholesterol Immunization
              </Link>
            </div>
          ) : null}
          <div className="Nav_responsive_link_div">
            <Link className="navbar_link">What We Do</Link>
            <span onClick={handleshowwhatwedo} className="Nav_responsive_Plus">
              <i class="bi bi-plus"></i>
            </span>
          </div>
          {showwhatwedo ? (
            <div className={`Nav_responsive_LowerNav_main `}>
              <Link to="/Patent_Monetization" className="lower_navbar_link">
                Patent Monetization
              </Link>
              {/* Patent_Commercialization */}
              <Link
                to="/Patent_Commercialization"
                className="lower_navbar_link"
              >
                Patent Commercialization
              </Link>
              {/* Invest */}
              <Link to="/Invest" className="lower_navbar_link">
                Invest
              </Link>
              <Link
                to="/Patents_Development_Program"
                className="lower_navbar_link"
              >
                Patents Development Program
              </Link>
              {/*  */}
              <Link to="/Research" className="lower_navbar_link">
                Research
              </Link>
              {/* Technology Transfer */}
              <Link to="/TechnologyTransfer" className="lower_navbar_link">
                Technology Transfer
              </Link>
              <Link to="/Strategize" className="lower_navbar_link">
                Strategize
              </Link>
              {/* PatentValuation */}
              <Link to="/PatentValuation" className="lower_navbar_link">
                Patent Valuation
              </Link>
              {/* PatentLicensing */}
              <Link to="/PatentLicensing" className="lower_navbar_link">
                Patent Licensing
              </Link>
            </div>
          ) : null}
          <div className="Nav_responsive_link_div">
            <Link className="navbar_link">About Navrattan</Link>
            <span onClick={handleshowAbout} className="Nav_responsive_Plus">
              <i class="bi bi-plus"></i>
            </span>
          </div>
          {showAbout ? (
            <div className={`Nav_responsive_LowerNav_main `}>
              <Link to="/Company_Overview" className="lower_navbar_link">
                Company Overview
              </Link>
              <Link to="/Founder" className="lower_navbar_link">
                Founder
              </Link>
              <Link to="/Carrier" className="lower_navbar_link">
                Careers @Navrattan
              </Link>
            </div>
          ) : null}
          <div className="Nav_responsive_link_div">
            <Link to="/News" className="navbar_link">News Updates</Link>
          </div>
          <div className="Nav_responsive_link_div">
            <Link to="/FAQS" className="navbar_link">FAQS</Link>
          </div>
          <div className="Nav_responsive_link_div">
            <Link  className="navbar_link">
              Contact
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;

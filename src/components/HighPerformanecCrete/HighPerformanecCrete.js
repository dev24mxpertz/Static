import React from "react";
import "./HighPerformanecCrete.css";

import Navbar from "../Navbar/Navbar";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import imag from "../../Assets/BasaltMining.avif";
import { Link, Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import InvesterPage from "../InvesterPage/InvesterPage";

const HighPerformanecCrete = () => {
  const leftParaRef = useRef(null);
  const centerParaRef = useRef(null);
  const rightParaRef = useRef(null);

  useEffect(() => {
    const leftPara = leftParaRef.current;
    const centerPara = centerParaRef.current;
    const rightPara = rightParaRef.current;

    const t1 = gsap.timeline();

    t1.fromTo(
      leftPara,
      { y: "50%", opacity: 0 },
      {
        // top: 250,
        y: 40,
        opacity: 1,
        duration: 1,
      }
    )
      // .fromTo(
      //   centerPara,
      //   { y: "50%", opacity: 0 },
      //   {
      //     y: 0,
      //     opacity: 1,
      //     duration: 1,
      //   }
      // )
      .fromTo(
        rightPara,
        { y: "100%", opacity: 0 },
        {
          y: -50,
          opacity: 1,
          duration: 1,
        }
      );
  }, []);

  return (
    <div className="Main_Layout_Container">
      <Navbar />
      <div className="HighPerformanecCrete_main">
        <h4 className="HighPerformanecCrete_main_h4" ref={leftParaRef}>
          High Performance Crete
        </h4>
        {/* <h2 ref={centerParaRef} className="HighPerformanecCrete_main_h2">
          Precast Concrete Element Products
        </h2> */}
        <div ref={rightParaRef} className="scroller_circle">
          <span className="scroller_circle_span">
            <i class="bi bi-arrow-down"></i>
          </span>
        </div>
      </div>
      <div className="HighPerformanecCrete_main_content">
        <div className="HighPerformanecCrete_main_content_left_box">
          <img src={imag} alt={imag} />
        </div>
        <div className="HighPerformanecCrete_main_content_right_box">
          <h4 className="HighPerformanecCrete_main_content_right_box_h4">
            High Performance Crete
          </h4>
          <p className="HighPerformanecCrete_main_content_right_box_p">
            Navrattan’s High-Performance Crete is based on the compressive
            strength; Crete is normally classified as normal strength Crete,
            high strength Crete and ultra-strength Crete. Indian standard
            recommended methods of mix design denote the boundary at 35 Mpa
            between normal strength and high strength Crete. The advent of
            pre-stressed Crete techniques has given impetus for making Crete of
            higher strength. High strength Crete is necessary for the
            construction of high rise building and long spans bridges. To
            achieve high strength, it is necessary to use high cement content
            with the lowest possible W/C ratio which invariably affects the
            workability of the mix.{" "}
          </p>
          <p className="HighPerformanecCrete_main_content_right_box_p">
            It should be remembered that high cement content may liberate large
            heat of hydration causing a rise in temperature which may affect the
            setting and may result in excessive shrinkage. Navrattan
            High-Performance Crete is specially manufactured cement that has
            revolutionized the development of architectural designs. The use of
            High-Performance Crete provides many building and construction
            applications with a wide range of aesthetic and decorative
            opportunities.{" "}
          </p>
          <button className="btn btn-outline-warning">KNOW MORE</button>
          <div className="HighPerformanecCrete_main_content_right_box_line"></div>
          <div className="HighPerformanecCrete_main_content_right_box_tag_div">
            <p className="HighPerformanecCrete_main_content_right_box_tag">
              <span style={{ color: "#F9E488", fontSize: "16px" }}>
                Technology :{" "}
              </span>
              Gasification
            </p>
            <p className="HighPerformanecCrete_main_content_right_box_tag">
              <span style={{ color: "#F9E488", fontSize: "16px" }}>
                Company :{" "}
              </span>
              Navrattan Green Cement Industries Pvt. Ltd.
            </p>
            <p className="HighPerformanecCrete_main_content_right_box_tag">
              <span style={{ color: "#F9E488", fontSize: "16px" }}>
                Website :{" "}
              </span>
              www.navrattaninfra.com
            </p>
            <p className="HighPerformanecCrete_main_content_right_box_tag">
              <span style={{ color: "#F9E488", fontSize: "16px" }}>
                Tags :{" "}
              </span>
              Gasification, Green Energy, Navrattan Group
            </p>
          </div>
        </div>
      </div>
      <div className="HighPerformanecCrete_Discription_content_div">
        <div className="HighPerformanecCrete_Discription_content_header">
          <Link
            className="HighPerformanecCrete_Discription_content_header_link"
            to="/High_Performanec_Crete/Description"
          >
            Description
          </Link>
          <Link
            className="HighPerformanecCrete_Discription_content_header_link"
            to="/High_Performanec_Crete/Advantage"
          >
            Advantage
          </Link>
          <Link
            className="HighPerformanecCrete_Discription_content_header_link"
            to="/High_Performanec_Crete/Characteristics"
          >
            Characteristics
          </Link>
        </div>
        <div className="HighPerformanecCrete_Discription_content_outlet_div">
          <Outlet />
        </div>
        <InvesterPage/>
        <Footer />
      </div>
    </div>
  );
};

export default HighPerformanecCrete;

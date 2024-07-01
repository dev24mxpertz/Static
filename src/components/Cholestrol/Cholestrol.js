import React from "react";

import "./Cholestrol.css";
import Navbar from "../Navbar/Navbar";

import gsap from "gsap";
import { useRef, useEffect } from "react";
import imag from "../../Assets/cholesterol-immunization.jpg";
import { Link, Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import InvesterPage from "../InvesterPage/InvesterPage";

const Cholestrol = () => {
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
    <div className=".Main_Layout_Container">
      <Navbar />
      <div className="Cholestrol_main">
        <h4 className="Cholestrol_main_h4" ref={leftParaRef}>
          Cholesterol Immunization
        </h4>
        {/* <h2 ref={centerParaRef} className="Cholestrol_main_h2">
          Precast Concrete Element Products
        </h2> */}
        <div ref={rightParaRef} className="scroller_circle">
          <span className="scroller_circle_span">
            <i class="bi bi-arrow-down"></i>
          </span>
        </div>
      </div>
      <div className="Cholestrol_main_content">
        <div className="Cholestrol_main_content_left_box">
          <img src={imag} alt={imag} />
        </div>
        <div className="Cholestrol_main_content_right_box">
          <h4 className="Cholestrol_main_content_right_box_h4">
            Cholesterol Immunization
          </h4>
          <p className="Cholestrol_main_content_right_box_p">
            Cholesterol immunization is a vaccine developed to prevent and treat
            atherosclerosis. Arteriosclerosis (or atherosclerosis) is the last
            stage of a kind of vasoconstriction that involves the thickening and
            hardening of arteries. More specifically, this condition involves
            the accumulation of plaques inside our blood vessel walls that lead
            to calcification, making the arteries less flexible and more
            fragile. Finally, as blood pressure increases (due to the small
            diameter) and walls become more vulnerable to cracking, thrombosis
            happens which can lead to a serious medical condition or even death.
            Once treated, the vaccine prevents it from coming back
          </p>
          <button className="btn btn-outline-warning">KNOW MORE</button>
          <div className="Cholestrol_main_content_right_box_line"></div>
          <div className="Cholestrol_main_content_right_box_tag_div">
            <p className="Cholestrol_main_content_right_box_tag">
              <span style={{ color: "#F9E488", fontSize: "16px" }}>
                Technology :{" "}
              </span>
              Gasification
            </p>
            <p className="Cholestrol_main_content_right_box_tag">
              <span style={{ color: "#F9E488", fontSize: "16px" }}>
                Company :{" "}
              </span>
              Navrattan Green Power CorporationLtd.
            </p>
            <p className="Cholestrol_main_content_right_box_tag">
              <span style={{ color: "#F9E488", fontSize: "16px" }}>
                Website :{" "}
              </span>
              www.navrattaninfra.com
            </p>
            <p className="Cholestrol_main_content_right_box_tag">
              <span style={{ color: "#F9E488", fontSize: "16px" }}>
                Tags :{" "}
              </span>
              Gasification, Green Energy, Navrattan Group
            </p>
          </div>
        </div>
      </div>
      <div className="Cholestrol_Discription_content_div">
        <div className="Cholestrol_Discription_content_header">
          <Link
            className="Cholestrol_Discription_content_header_link"
            to="/Cholestrol/Description"
          >
            Description
          </Link>
          <Link
            className="Cholestrol_Discription_content_header_link"
            to="/Cholestrol/Advantage"
          >
            Benefits Of The Vaccine
          </Link>
          <Link
            className="Cholestrol_Discription_content_header_link"
            to="/Cholestrol/charateristics"
          >
            Composition
          </Link>
        </div>
        <div className="Cholestrol_Discription_content_outlet_div">
          <Outlet />
        </div>
        <InvesterPage/>
        <Footer />
      </div>
    </div>
  );
};

export default Cholestrol;

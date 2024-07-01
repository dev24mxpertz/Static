import React from 'react'
import "./PatentValuation.css"


import Navbar from "../Navbar/Navbar";

import gsap from "gsap";
import { useRef, useEffect } from "react";
import imag from "../../Assets/valuation.png";
import { Link, Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import InvesterPage from '../InvesterPage/InvesterPage';




const PatentValuation = () => {
  
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
      <div className="PatentValuation_main">
        <h4 className="PatentValuation_main_h4" ref={leftParaRef}>
          Patent Valuation
        </h4>
        {/* <h2 ref={centerParaRef} className="PatentValuation_main_h2">
          Precast Concrete Element Products
        </h2> */}
        <div ref={rightParaRef} className="scroller_circle">
          <span className="scroller_circle_span">
            <i class="bi bi-arrow-down"></i>
          </span>
        </div>
      </div>
      <div className="PatentValuation_main_content">
        <div className="PatentValuation_main_content_left_box">
          <img src={imag} alt={imag} />
        </div>
        <div className="PatentValuation_main_content_right_box">
          <h4 className="PatentValuation_main_content_right_box_h4">
            Patent Valuation
            <br />
            <span style={{ fontSize: "14px", color: "#f9e488" }}>
              Mining portfolio and IP marketplace.
            </span>
          </h4>
          <p className="PatentValuation_main_content_right_box_p">
            Navrattan Holdings Limited offers customized Patent Portfolio
            Evaluation services for companies to unearth the hidden gems. As a
            part of patent portfolio evaluation, patents are analyzed to develop
            a valuable insight helping in the assessment of R&D scenario and
            prospects of commercialization. It also helps in fully exploiting
            your company’s patent assets by identifying new licensing
            opportunities and mitigating litigation risk. In a typical patent
            portfolio evaluation, our research team conducts an assignee based
            search to uncover all patents and uses other strategies also to
            uncover patents according to client requirements.
          </p>
          <p className="PatentValuation_main_content_right_box_p">
            As an add-on service, our team can assist you in identifying the
            most promising patents in your patent portfolio to take a business
            decision on commercialization of your patent assets.
          </p>
          {/* <button className="btn btn-outline-warning">KNOW MORE</button>
          <div className="PatentValuation_main_content_right_box_line"></div>
          <div className="PatentValuation_main_content_right_box_tag_div">
            <p className="PatentValuation_main_content_right_box_tag">
              <span style={{ color: "#F9E488", fontSize: "16px" }}>
                Technology :{" "}
              </span>
              Precast Concrete Element Products
            </p>
            <p className="PatentValuation_main_content_right_box_tag">
              <span style={{ color: "#F9E488", fontSize: "16px" }}>
                Company :{" "}
              </span>
              Navrattan Infra Pvt. Ltd.
            </p>
            <p className="PatentValuation_main_content_right_box_tag">
              <span style={{ color: "#F9E488", fontSize: "16px" }}>
                Website :{" "}
              </span>
              www.navrattaninfra.com
            </p>
            <p className="PatentValuation_main_content_right_box_tag">
              <span style={{ color: "#F9E488", fontSize: "16px" }}>
                Tags :{" "}
              </span>
              Affordable Housing, Precast Concrete Element Products, Plant
              Design, Construction India
            </p>
          </div> */}
        </div>
      </div>
      <div className="PatentValuation_Discription_content_div">
        {/* <div className="PatentValuation_Discription_content_header">
          <Link
            className="PatentValuation_Discription_content_header_link"
            to="/Basalt_Mining/Description"
          >
            Description
          </Link>
          <Link
            className="PatentValuation_Discription_content_header_link"
            to="/Basalt_Mining/benefits"
          >
            Benefits
          </Link>
        </div>
        <div className="PatentValuation_Discription_content_outlet_div">
          <Outlet />
        </div> */}
        <InvesterPage/>
        <Footer />
      </div>
    </div>
  );
}

export default PatentValuation
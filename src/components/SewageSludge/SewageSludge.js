import React from "react";
import "./SewageSludge.css";

import Navbar from "../Navbar/Navbar";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import imag from "../../Assets/sewage-sludge-incinerator.jpg";
import { Link, Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import InvesterPage from "../InvesterPage/InvesterPage";

const SewageSludge = () => {
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
      <div className="SewageSludge_main">
        <h4 className="SewageSludge_main_h4" ref={leftParaRef}>
          Sewage Sludge Incinerator
        </h4>
        <div ref={rightParaRef} className="scroller_circle">
          <span className="scroller_circle_span">
            <i class="bi bi-arrow-down"></i>
          </span>
        </div>
      </div>
      <div className="SewageSludge_main_content">
        <div className="SewageSludge_main_content_left_box">
          <img src={imag} alt={imag} />
        </div>
        <div className="SewageSludge_main_content_right_box">
          <h4 className="SewageSludge_main_content_right_box_h4">
            Sewage Sludge Incinerator
          </h4>
          <p className="SewageSludge_main_content_right_box_p">
            Land filling and land application of sewage sludge is not a feasible
            solution and also is no longer allowed in many countries. The better
            the wastewater treatment process, the more toxic, or grubby is the
            sludge. Incineration of sewage sludge is the safest and the most
            recommended way of turning a problem waste into an opportunity.
            Sludge incineration remains the only viable method for sludge
            treatment. Bio-solids such as industrial, municipal sludge and fine
            solids can be incinerated with the power packed advantages of
            eliminating the sludge. The heat and energy produced during the
            incineration process can be harnessed and used as Green energy
            source.
          </p>
          <p className="SewageSludge_main_content_right_box_p">
            Navrattan’s Sewage Sludge Incinerator burns wet sewage sludge to
            produce heat and electricity. The technology is such developed to
            solve the sewage sludge disposal problem, destruction of biogas
            residues and solid waste destruction problem in India.
          </p>
          <button className="btn btn-outline-warning">KNOW MORE</button>
          <div className="SewageSludge_main_content_right_box_line"></div>
          <div className="SewageSludge_main_content_right_box_tag_div">
            <p className="SewageSludge_main_content_right_box_tag">
              <span style={{ color: "#F9E488", fontSize: "16px" }}>
                Technology :{" "}
              </span>
              Sewage Sludge Incinerator
            </p>
            <p className="SewageSludge_main_content_right_box_tag">
              <span style={{ color: "#F9E488", fontSize: "16px" }}>
                Company :{" "}
              </span>
              Navrattan Green Power Corporation Ltd.
            </p>
            <p className="SewageSludge_main_content_right_box_tag">
              <span style={{ color: "#F9E488", fontSize: "16px" }}>
                Website :{" "}
              </span>
              www.navrattaninfra.com
            </p>
            <p className="SewageSludge_main_content_right_box_tag">
              <span style={{ color: "#F9E488", fontSize: "16px" }}>
                Tags :{" "}
              </span>
              Sewage Sludge Incinerator, Waste Management, Green Energy,
              Navrattan Group
            </p>
          </div>
        </div>
      </div>
      <div className="SewageSludge_Discription_content_div">
        <div className="SewageSludge_Discription_content_header">
          <Link
            className="SewageSludge_Discription_content_header_link"
            to="/Sewage_sludge/Description"
          >
            Description
          </Link>
          {/* Sewage_sludge/Advantage */}
          <Link
            className="SewageSludge_Discription_content_header_link"
            to="/Sewage_sludge/Advantage"
          >
            Advantage
          </Link>
          <Link
            className="SewageSludge_Discription_content_header_link"
            to="/Sewage_sludge/charateristics"
          >
            Charateristics
          </Link>
        </div>
        <div className="SewageSludge_Discription_content_outlet_div">
          <Outlet />
        </div>
        <InvesterPage/>
        <Footer />
      </div>
    </div>
  );
};

export default SewageSludge;

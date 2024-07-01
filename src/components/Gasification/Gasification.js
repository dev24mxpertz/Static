import React from "react";
import "./Gasification.css";

import Navbar from "../Navbar/Navbar";

import gsap from "gsap";
import { useRef, useEffect } from "react";
import imag from "../../Assets/gasificationim.jpg";
import { Link, Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import InvesterPage from "../InvesterPage/InvesterPage";

const Gasification = () => {
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
      <div className="Gasification_main">
        <h4 className="Gasification_main_h4" ref={leftParaRef}>
          Thermo Chemical Gasification
        </h4>
        {/* <h2 ref={centerParaRef} className="Gasification_main_h2">
          Precast Concrete Element Products
        </h2> */}
        <div ref={rightParaRef} className="scroller_circle">
          <span className="scroller_circle_span">
            <i class="bi bi-arrow-down"></i>
          </span>
        </div>
      </div>
      <div className="Gasification_main_content">
        <div className="Gasification_main_content_left_box">
          <img src={imag} alt={imag} />
        </div>
        <div className="Gasification_main_content_right_box">
          <h4 className="Gasification_main_content_right_box_h4">
            Thermo Chemical Gasification
          </h4>
          <p className="Gasification_main_content_right_box_p">
            India has become one of the fastest-growing economies in the world.
            The fast-paced growth of the economy which is the 3rd largest in
            terms of GDP has resulted in a surging demand for energy. The ever
            increasing demand for energy is projected to grow at a rate of 3%
            over the next two decades. The increase in demand for energy to
            cater to a large population; we are inclined to develop and harness
            environmentally friendly clean and ‘green’ energy resources in-line
            with the global trend.
          </p>
          <p className="Gasification_main_content_right_box_p">
            Navrattan Holdings Limited has become the first company to introduce
            Navrattan Thermo Chemical Gasification Technology in India. The
            revolutionary technology is capable of converting any
            carbon-containing feedstock such as biomass, coke, sewage,
            agricultural, animal, medical, and municipal solid waste into
            ‘Green’ electricity, natural gas, and biofuel. The gas thus produced
            is called the ‘Syngas’. SYNGAS is a shortened name for Synthetic Gas
            that commonly deals with the blend of hydrogen and carbon monoxide.
            It is a clean, dry, flexible fuel.
          </p>
          <button className="btn btn-outline-warning">KNOW MORE</button>
          <div className="Gasification_main_content_right_box_line"></div>
          <div className="Gasification_main_content_right_box_tag_div">
            <p className="Gasification_main_content_right_box_tag">
              <span style={{ color: "#F9E488", fontSize: "16px" }}>
                Technology :{" "}
              </span>
              Thermo Chemical Gasification
            </p>
            <p className="Gasification_main_content_right_box_tag">
              <span style={{ color: "#F9E488", fontSize: "16px" }}>
                Company :{" "}
              </span>
              Navrattan Green Power CorporationLtd.
            </p>
            <p className="Gasification_main_content_right_box_tag">
              <span style={{ color: "#F9E488", fontSize: "16px" }}>
                Website :{" "}
              </span>
              www.navrattaninfra.com
            </p>
            <p className="Gasification_main_content_right_box_tag">
              <span style={{ color: "#F9E488", fontSize: "16px" }}>
                Tags :{" "}
              </span>
              Gasification, Green Energy, Navrattan Group
            </p>
          </div>
        </div>
      </div>
      <div className="Gasification_Discription_content_div">
        <div className="Gasification_Discription_content_header">
          <Link
            className="Gasification_Discription_content_header_link"
            to="/Gasification/Description"
          >
            Description
          </Link>
          {/* Gasification/Advantage */}
          <Link
            className="Gasification_Discription_content_header_link"
            to="/Gasification/Advantage"
          >
            Advantage
          </Link>
          <Link
            className="Gasification_Discription_content_header_link"
            to="/Gasification/charateristics"
          >
            Charateristics
          </Link>
        </div>
        <div className="Gasification_Discription_content_outlet_div">
          <Outlet />
        </div>
        <InvesterPage/>
        <Footer />
      </div>
    </div>
  );
};

export default Gasification;

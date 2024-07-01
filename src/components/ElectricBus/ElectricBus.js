import React from 'react'
import "./ElectricBus.css"

import Navbar from "../Navbar/Navbar";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import imag from "../../Assets/navrattan-electric-bus-1.jpg";
import { Link, Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import InvesterPage from '../InvesterPage/InvesterPage';

const ElectricBus = () => {
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
  <div className="Main_Layout_Container">
    <Navbar />
    <div className="ElectricBus_main">
      <h4 className="ElectricBus_main_h4" ref={leftParaRef}>
        Composite Electric Bus
      </h4>
      <div ref={rightParaRef} className="scroller_circle">
        <span className="scroller_circle_span">
          <i class="bi bi-arrow-down"></i>
        </span>
      </div>
    </div>
    <div className="ElectricBus_main_content">
      <div className="ElectricBus_main_content_left_box">
        <img src={imag} alt={imag} />
      </div>
      <div className="ElectricBus_main_content_right_box">
        <h4 className="ElectricBus_main_content_right_box_h4">
          Composite Electric Bus
        </h4>
        <p className="ElectricBus_main_content_right_box_p">
          E-Bus is manufactured using high-quality glass fiber composite
          technology and modular manufacturing processes. Navrattan’s E – Bus is
          made up of composite plastic & has higher efficiency than other
          available electric buses. Fast and rapid AC and DC charging system for
          all types of electric transport significantly provide cross-selling
          opportunities for the present products & services of traditional gas
          stations, large supermarkets, and plazas.
        </p>
        <p className="ElectricBus_main_content_right_box_p">
          The arrowhead framework provides for compatible management remote
          diagnosis, RFID identification, standard remote supervision system,
          central accounting system, and measurement of real power consumption,
          status query via mobile application along with many direct and
          personalized connections with the consumers. E-Bus is a 3-in-1
          innovation providing the electric drive with worldwide best
          parameters, composite body, and modularity.
        </p>
        <button className="btn btn-outline-warning">KNOW MORE</button>
        <div className="ElectricBus_main_content_right_box_line"></div>
        <div className="ElectricBus_main_content_right_box_tag_div">
          <p className="ElectricBus_main_content_right_box_tag">
            <span style={{ color: "#F9E488", fontSize: "16px" }}>
              Technology :{" "}
            </span>
            Composite Electric Bus
          </p>
          <p className="ElectricBus_main_content_right_box_tag">
            <span style={{ color: "#F9E488", fontSize: "16px" }}>
              Company :{" "}
            </span>
            Navrattan Green Power CorporationLtd.
          </p>
          <p className="ElectricBus_main_content_right_box_tag">
            <span style={{ color: "#F9E488", fontSize: "16px" }}>
              Website :{" "}
            </span>
            www.navrattaninfra.com
          </p>
          <p className="ElectricBus_main_content_right_box_tag">
            <span style={{ color: "#F9E488", fontSize: "16px" }}>Tags : </span>
            Navrattan Composite Electric Bus, Electric Bus, Green Energy, India
          </p>
        </div>
      </div>
    </div>
    <div className="ElectricBus_Discription_content_div">
      <div className="ElectricBus_Discription_content_header">
        <Link
          className="ElectricBus_Discription_content_header_link"
          to="/Electric_Bus/Description"
        >
          Description
        </Link>
        <Link
          className="ElectricBus_Discription_content_header_link"
          to="/Electric_Bus/Advantage"
        >
          Advantage
        </Link>
        <Link
          className="ElectricBus_Discription_content_header_link"
          to="/Electric_Bus/benefits"
        >
          Benefits
        </Link>
      </div>
      <div className="ElectricBus_Discription_content_outlet_div">
        <Outlet />
      </div>
      <InvesterPage/>
      <Footer />
    </div>
  </div>
);
}

export default ElectricBus
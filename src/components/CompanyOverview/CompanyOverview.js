import React from 'react'
import "./CompanyOverview.css"
import Navbar from "../Navbar/Navbar";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import imag from "../../Assets/overview.jpg";
import Footer from "../Footer/Footer";
import Navrattanfreepower from "../../Assets/Navrattan-free-power.gif.png"
import NavrattanCement from "../../Assets/Navrattan-Cement.png";
import Green from "../../Assets/green.png";
import usaicon from "../../Assets/usa-icon.png";
import nscience from "../../Assets/nscience.png";
import navratninfra from "../../Assets/navratninfra.png";

const CompanyOverview = () => {
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
        centerPara,
        { y: "50%", opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
        }
      )
      .fromTo(
        rightPara,
        { y: "50%", opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
        }
      );
  }, []);

  return (
    <div className=".Main_Layout_Container">
      <Navbar />
      {/* <div className="CompanyOverview_main">
        <h4 className="CompanyOverview_main_h4" ref={leftParaRef}>
          Company Overview
        </h4>
        <h2 ref={centerParaRef} className="CompanyOverview_main_h2">
          Precast Concrete Element Products
        </h2>
        <div ref={rightParaRef} className="scroller_circle">
          <span className="scroller_circle_span">
            <i class="bi bi-arrow-down"></i>
          </span>
        </div>
      </div> */}
      <div className="CompanyOverview_main_content">
        <div className="CompanyOverview_main_content_left_box">
          <img src={imag} alt={imag} />
        </div>
        <div className="CompanyOverview_main_content_right_box">
          <h4 className="CompanyOverview_main_content_right_box_h4">
            Company Overview
          </h4>
          <h5 className="CompanyOverview_main_content_right_box_h5">
            We Believe In Quality, Innovation, And Performance
          </h5>
          <p className="CompanyOverview_main_content_right_box_p">
            Based out of Budapest, Hungary, Navrattan Holdings Limited (NHL) was
            established with a very strong focus on sustainable and innovative
            technologies. The Science & Technology Company deals in developing
            and acquiring patents of various innovations from across the globe.
            The company was conceived with a notion to commercialize
            technological inventions for business and domestic purposes.{" "}
          </p>
          <p className="CompanyOverview_main_content_right_box_p">
            Our multidisciplinary teams of expert scientists and engineers lead
            fundamental and applied research projects. The research and
            development facility is supported by state-of-the-art laboratory and
            equipment; set in one-of-a-kind technology-led environment. The
            company undertakes Research & Development projects to commercialize
            technologies for the Navrattan group’s businesses in collaboration
            with its technology, production, and marketing divisions.{" "}
          </p>
          <p className="CompanyOverview_main_content_right_box_p">
            Navrattan Holdings Limited has generated extensive Intellectual
            Property Rights and Patents for the Navrattan Group. NHL holds
            exclusive IPRs to more than 60 patents of technological advancements
            from all across the globe. The facility comprises modern
            laboratories, multipurpose scale-up facilities, and modeling and
            simulation areas to commercialize the IP’s into usable products.
            Navrattan Holdings Ltd. provides independent advisory and advanced
            product development services focused on science and technology
            initiatives.
          </p>
          <p className="CompanyOverview_main_content_right_box_p">
            Our innovations include Navrattan Green Crete, Composite Electric
            Bus (E-Bus), Cholesterol Immunization, SUNSUL Technology, Sewage
            Sludge Incineration, Thermo Chemical Gasification technology to name
            a few. Navrattan Holdings Limited is the only Company in the world
            to acquire and develop Patents that are environmentally friendly in
            nature and aims at reducing our carbon footprint.
          </p>
          <p className="CompanyOverview_main_content_right_box_p">
            Our state-of-the-art equipment is set in a one-of-its-kind
            technology-led environment facilities the development of innovative
            products, processes, and applications.
          </p>
        </div>
        <div className="CompanyOverview_main_content_right_box">
          <h4 className="CompanyOverview_main_content_right_box_h4">
            Vision & Values
          </h4>
          <h5 className="CompanyOverview_main_content_right_box_h5">
            “Building Greener, Cleaner & Better Tomorrow”
          </h5>
          <p className="CompanyOverview_main_content_right_box_p_center">
            Navrattan Holdings Limited is all about revolutionary innovative
            technologies, ground-breaking ideas, unparalleled business model,
            and environmentally conscious decisions. The companies under the
            group constantly work on delivering breakthrough ecological products
            to build a boundless world, develop alternative energy sources, and
            completely suppress pollution. The business is spread across various
            industries like construction, infrastructure, alternative energy,
            mining, science & technology, medical, and agriculture
          </p>
          <div className="CompanyOverview_main_content_center_div">
            <div className="CompanyOverview_main_content_center_div_content1">
              <div className="CompanyOverview_main_content_center_div_content1_circle">
                <i class="bi bi-camera-fill"></i>
              </div>
              <h4 className="CompanyOverview_main_content_center_div_content1_h4">
                Our Vision
              </h4>
              <p className="CompanyOverview_main_content_center_div_content1_p">
                To be a leader in innovating and developing ‘GREEN’ Technology.
                A healthy environment supporting a sustainable economy.
                Achieving client satisfaction through integrated team efforts.
                Reducing the amount of waste and making a “Zero Waste Future.”
                To work towards more efficient utilization of energy.
              </p>
            </div>
            <div className="CompanyOverview_main_content_center_div_content2">
              <div className="CompanyOverview_main_content_center_div_content1_circle">
                <i class="bi bi-telephone-fill"></i>
              </div>
              <h4 className="CompanyOverview_main_content_center_div_content1_h4">
                Our Values
              </h4>
              <p className="CompanyOverview_main_content_center_div_content1_p">
                <ul>
                  <li>Committed</li>
                  <li>Green</li>
                  <li>Sustainable</li>
                  <li>Affordable</li>
                  <li>Transparency</li>
                  <li>Integrity</li>
                </ul>
              </p>
            </div>
          </div>
          <div className="CompanyOverview_main_content_banner_div">
            <h4 className="CompanyOverview_main_content_banner_div_h4">
              OUR SISTER CONCERNS
            </h4>
            <div className="CompanyOverview_main_content_banner_div_line"></div>
            <div className="CompanyOverview_main_content_banner_div_content_div">
              <div className="CompanyOverview_main_content_banner_div_content">
                <img src={Navrattanfreepower} alt="Navrattan-free-power" />
              </div>
              <div className="CompanyOverview_main_content_banner_div_content">
                <img src={NavrattanCement} alt="NavrattanCement" />
              </div>
              <div className="CompanyOverview_main_content_banner_div_content">
                <img src={Green} alt="Navrattan-Green" />
              </div>
              <div className="CompanyOverview_main_content_banner_div_content">
                <img src={usaicon} alt="Navrattan-usa" />
              </div>
              <div className="CompanyOverview_main_content_banner_div_content">
                <img src={nscience} alt="Navrattan-nscience" />
              </div>
              <div className="CompanyOverview_main_content_banner_div_content">
                <img src={navratninfra} alt="navratninfra" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="CompanyOverview_Discription_content_div">
        <Footer />
      </div>
    </div>
  );
}

export default CompanyOverview
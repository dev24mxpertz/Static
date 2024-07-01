import React from 'react'


import Navbar from "../Navbar/Navbar";
import "./TechnologyTransfer.css";

import gsap from "gsap";
import { useRef, useEffect } from "react";
import imag from "../../Assets/techtransfer.avif";
import { Link, Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import InvesterPage from '../InvesterPage/InvesterPage';


const TechnologyTransfer = () => {
  
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
      <div className="TechnologyTransfer_main">
        <h4 className="TechnologyTransfer_main_h4" ref={leftParaRef}>
          Technology Transfer
        </h4>
        {/* <h2 ref={centerParaRef} className="TechnologyTransfer_main_h2">
          Precast Concrete Element Products
        </h2> */}
        <div ref={rightParaRef} className="scroller_circle">
          <span className="scroller_circle_span">
            <i class="bi bi-arrow-down"></i>
          </span>
        </div>
      </div>
      <div className="TechnologyTransfer_main_content">
        <div className="TechnologyTransfer_main_content_left_box">
          <img src={imag} alt={imag} />
        </div>
        <div className="TechnologyTransfer_main_content_right_box">
          <h4 className="TechnologyTransfer_main_content_right_box_h4">
            Technology Transfer
          </h4>
          <p className="TechnologyTransfer_main_content_right_box_p">
            In a high paced and high adrenaline competition, technology has been
            growing at a frenetic pace. The advancements in the technology space
            have helped numerous businesses to grow and thrive in the
            marketplace. Intellectual property rights play a crucial role in
            protecting new technologies and monetizing through licensing revenue
            streams. Intellectual property can be in the form of patents,
            trademarks, industrial designs, copyrights, and geographical
            indications. Intellectual property, especially patents help in
            protecting an invention or new technology, thus excluding other to
            make, manufacture, and sell without the consent of the inventor for
            a period of 20 years. The term technology transfer is defined as a
            process in which a firm obtains access to a particular technology
            developed in another country.
          </p>
          <p className="TechnologyTransfer_main_content_right_box_p">
            Whether you wish to give away a technology free of charge or to
            license it, you cannot do so unless you can identify what it is that
            you want to transfer. You are not entitled to give away something
            that you do not own. IPRs provide legal clarity and certainty.
            Whether that IPR bears a price is a subsequent decision. IPRs
            provide the framework around which legal agreements for technology
            transfer can be structured. Without IPRs, agreements cannot be
            properly defined.
          </p>
          <p className="TechnologyTransfer_main_content_right_box_p">
            An adequate IPR protection can result in a significant impact on
            technology diffusion and depends on the country’s resources for
            domestic innovation and development. However, it can also restrict
            technology diffusion with patents preventing others to make or sell
            the proprietary knowledge and allowing the inventor to sell at
            higher prices. On the other hand, IPR can encourage technology
            transfer through a number of formal channels such as international
            trade, FDI, joint ventures, and licensing.
          </p>
          {/* <button className="btn btn-outline-warning">KNOW MORE</button>
          <div className="TechnologyTransfer_main_content_right_box_line"></div>
          <div className="TechnologyTransfer_main_content_right_box_tag_div">
            <p className="TechnologyTransfer_main_content_right_box_tag">
              <span style={{ color: "#F9E488", fontSize: "16px" }}>
                Technology :{" "}
              </span>
              Precast Concrete Element Products
            </p>
            <p className="TechnologyTransfer_main_content_right_box_tag">
              <span style={{ color: "#F9E488", fontSize: "16px" }}>
                Company :{" "}
              </span>
              Navrattan Infra Pvt. Ltd.
            </p>
            <p className="TechnologyTransfer_main_content_right_box_tag">
              <span style={{ color: "#F9E488", fontSize: "16px" }}>
                Website :{" "}
              </span>
              www.navrattaninfra.com
            </p>
            <p className="TechnologyTransfer_main_content_right_box_tag">
              <span style={{ color: "#F9E488", fontSize: "16px" }}>
                Tags :{" "}
              </span>
              Affordable Housing, Precast Concrete Element Products, Plant
              Design, Construction India
            </p>
          </div> */}
        </div>
      </div>
      <div className="TechnologyTransfer_Discription_content_div">
        {/* <div className="TechnologyTransfer_Discription_content_header">
          <Link
            className="TechnologyTransfer_Discription_content_header_link"
            to="/Basalt_Mining/Description"
          >
            Description
          </Link>
          <Link
            className="TechnologyTransfer_Discription_content_header_link"
            to="/Basalt_Mining/benefits"
          >
            Benefits
          </Link>
        </div>
        <div className="TechnologyTransfer_Discription_content_outlet_div">
          <Outlet />
        </div> */}
        <InvesterPage/>
        <Footer />
      </div>
    </div>
  );
}

export default TechnologyTransfer
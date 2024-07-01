import React from 'react'
import "./GreenCement.css"
import Navbar from "../Navbar/Navbar";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import imag from "../../Assets/navrattan-green-cement.jpg";
import { Link, Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import InvesterPage from '../InvesterPage/InvesterPage';


const GreenCement = () => {
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
        <div className="GreenCement_main">
          <h4 className="GreenCement_main_h4" ref={leftParaRef}>
            Navrattan Green Crete
          </h4>
          {/* <h2 ref={centerParaRef} className="GreenCement_main_h2">
            Precast Concrete Element Products
          </h2> */}
          <div ref={rightParaRef} className="scroller_circle">
            <span className="scroller_circle_span">
              <i class="bi bi-arrow-down"></i>
            </span>
          </div>
        </div>
        <div className="GreenCement_main_content">
          <div className="GreenCement_main_content_left_box">
            <img src={imag} alt={imag} />
          </div>
          <div className="GreenCement_main_content_right_box">
            <h4 className="GreenCement_main_content_right_box_h4">
              Navrattan Green Crete
            </h4>
            <p className="GreenCement_main_content_right_box_p">
              Navrattan Green Cement Industries Pvt. Ltd was conceived with a
              strong notion to create such alternative ways of energy generation
              which are high performance, sustainable and Green. The company is
              producing ‘Geopolymeric’ cement that is Eco-friendly cement that
              transforms an enzyme of the algae into a highly concentrated
              Elastic Polymeric powder.
            </p>
            <p className="GreenCement_main_content_right_box_p">
              The most significant advantages of Navrattan Green Crete is its
              momentous reduction of CO2 emission into the atmosphere,
              affordability, increased strength, and durability, good
              compressive strength and impermeability, does not corrode as
              compared to traditional OPC thereby reducing the environmental
              impact and lowering the cost. NGCIPL’s business strategy is
              centered on providing green concrete products that conserve energy
              resources, reduce pollutants and bring green foundations to all
              type of concrete constructions.
            </p>
            <button className="btn btn-outline-warning">KNOW MORE</button>
            <div className="GreenCement_main_content_right_box_line"></div>
            <div className="GreenCement_main_content_right_box_tag_div">
              <p className="GreenCement_main_content_right_box_tag">
                <span style={{ color: "#F9E488", fontSize: "16px" }}>
                  Technology :{" "}
                </span>
                Navrattan Green Crete
              </p>
              <p className="GreenCement_main_content_right_box_tag">
                <span style={{ color: "#F9E488", fontSize: "16px" }}>
                  Company :{" "}
                </span>
                Navrattan Green Cement Industries Pvt. Ltd.
              </p>
              <p className="GreenCement_main_content_right_box_tag">
                <span style={{ color: "#F9E488", fontSize: "16px" }}>
                  Website :{" "}
                </span>
                www.navrattancement.com
              </p>
              <p className="GreenCement_main_content_right_box_tag">
                <span style={{ color: "#F9E488", fontSize: "16px" }}>
                  Tags :{" "}
                </span>
                Green Cement India, Reduce CO2 Emission, Environment Friendly
                Cement
              </p>
            </div>
          </div>
        </div>
        <div className="GreenCement_Discription_content_div">
          <div className="GreenCement_Discription_content_header">
            <Link
              className="GreenCement_Discription_content_header_link"
              to="/Green_cement/Description"
            >
              Description
            </Link>
            <Link
              className="GreenCement_Discription_content_header_link"
              to="/Green_cement/Quality"
            >
              Structural Qualities
            </Link>
            <Link
              className="GreenCement_Discription_content_header_link"
              to="/Green_cement/benefits"
            >
              Benefits
            </Link>
          </div>
          <div className="GreenCement_Discription_content_outlet_div">
            <Outlet />
          </div>
          <InvesterPage/>
          <Footer />
        </div>
      </div>
    );
}

export default GreenCement
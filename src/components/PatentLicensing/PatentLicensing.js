import React from 'react'
import Navbar from "../Navbar/Navbar";
import "./PatentLicensing.css";

import gsap from "gsap";
import { useRef, useEffect } from "react";
import imag from "../../Assets/licensing.png";
import { Link, Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import InvesterPage from '../InvesterPage/InvesterPage';




const PatentLicensing = () => {
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
      <div className="PatentLicensing_main">
        <h4 className="PatentLicensing_main_h4" ref={leftParaRef}>
          Patent Licensing
        </h4>
        {/* <h2 ref={centerParaRef} className="PatentLicensing_main_h2">
          Precast Concrete Element Products
        </h2> */}
        <div ref={rightParaRef} className="scroller_circle">
          <span className="scroller_circle_span">
            <i class="bi bi-arrow-down"></i>
          </span>
        </div>
      </div>
      <div className="PatentLicensing_main_content">
        <div className="PatentLicensing_main_content_left_box">
          <img src={imag} alt={imag} />
        </div>
        <div className="PatentLicensing_main_content_right_box">
          <h4 className="PatentLicensing_main_content_right_box_h4">
            Patent Licensing
            <br />
            <span style={{ fontSize: "14px", color: "#f9e488" }}>
              Best way to monetize your patent is to license it.
            </span>
          </h4>
          <p className="PatentLicensing_main_content_right_box_p">
            Patents are a valuable asset whose value depends upon several
            factors including the qualities and representation of the claims,
            whether or not the invention is being used today or it will be in
            the future, and the size of the impinged market and its Related
            revenues. A thorough understanding of several factors like licenses,
            similar prior art, or issues with the prosecution history from a
            business, the legal and technical perspective will ensure that we
            realize the maximum and efficient value of your assets.
          </p>
          <p className="PatentLicensing_main_content_right_box_p">
            Licensing of patents is a standard method of monetization, but this
            requires careful, thorough, and precise structuring to avoid any
            damage to the value or loss of IP rights. There are two ways to
            license a patent. If your patent is being used without your
            permission, that is patent infringement, so you can decisively or
            assertively license your patent, you can enforce your patent.
          </p>
          <p className="PatentLicensing_main_content_right_box_p">
            If a company is not using your patent, but it makes sense for that
            business to take benefit of making profit of the technology your
            patent offers, you may then want to non-assertively license your
            patent or patents to the company.{" "}
          </p>
          <p className="PatentLicensing_main_content_right_box_p">
            After studying the patent to determine its utilization in industry,
            we identify specific prospective licensees, put together a marketing
            package for the patent that promotes its applications and
            technology, and present the package to pre-qualified prospects.{" "}
          </p>
          {/* <button className="btn btn-outline-warning">KNOW MORE</button>
          <div className="PatentLicensing_main_content_right_box_line"></div>
          <div className="PatentLicensing_main_content_right_box_tag_div">
            <p className="PatentLicensing_main_content_right_box_tag">
              <span style={{ color: "#F9E488", fontSize: "16px" }}>
                Technology :{" "}
              </span>
              Precast Concrete Element Products
            </p>
            <p className="PatentLicensing_main_content_right_box_tag">
              <span style={{ color: "#F9E488", fontSize: "16px" }}>
                Company :{" "}
              </span>
              Navrattan Infra Pvt. Ltd.
            </p>
            <p className="PatentLicensing_main_content_right_box_tag">
              <span style={{ color: "#F9E488", fontSize: "16px" }}>
                Website :{" "}
              </span>
              www.navrattaninfra.com
            </p>
            <p className="PatentLicensing_main_content_right_box_tag">
              <span style={{ color: "#F9E488", fontSize: "16px" }}>
                Tags :{" "}
              </span>
              Affordable Housing, Precast Concrete Element Products, Plant
              Design, Construction India
            </p>
          </div> */}
        </div>
      </div>
      <div className="PatentLicensing_Discription_content_div">
        {/* <div className="PatentLicensing_Discription_content_header">
          <Link
            className="PatentLicensing_Discription_content_header_link"
            to="/Basalt_Mining/Description"
          >
            Description
          </Link>
          <Link
            className="PatentLicensing_Discription_content_header_link"
            to="/Basalt_Mining/benefits"
          >
            Benefits
          </Link>
        </div>
        <div className="PatentLicensing_Discription_content_outlet_div">
          <Outlet />
        </div> */}
        <InvesterPage/>
        <Footer />
      </div>
    </div>
  );
}

export default PatentLicensing
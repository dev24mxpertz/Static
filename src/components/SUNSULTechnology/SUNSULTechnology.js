import React from "react";
import "./SUNSULTechnology.css";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import imag from "../../Assets/BasaltMining.avif";
import { Link, Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import InvesterPage from "../InvesterPage/InvesterPage";


const SUNSULTechnology = () => {
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
      <div className="SUNSULTechnology_main">
        <h4 className="SUNSULTechnology_main_h4" ref={leftParaRef}>
          SUNSUL Technology
        </h4>
        {/* <h2 ref={centerParaRef} className="SUNSULTechnology_main_h2">
          Precast Concrete Element Products
        </h2> */}
        <div ref={rightParaRef} className="scroller_circle">
          <span className="scroller_circle_span">
            <i class="bi bi-arrow-down"></i>
          </span>
        </div>
      </div>
      <div className="SUNSULTechnology_main_content">
        <div className="SUNSULTechnology_main_content_left_box">
          <img src={imag} alt={imag} />
        </div>
        <div className="SUNSULTechnology_main_content_right_box">
          <h4 className="SUNSULTechnology_main_content_right_box_h4">
            SUNSUL Technology
          </h4>
          <p className="SUNSULTechnology_main_content_right_box_p">
            SUNSUL is an innovative technology introduced for the first time in
            India. It is a mega green power project based on solar energy. The
            product is an Eco-friendly self-looped motor generator which is able
            to provide continuous electricity support without polluting the
            environment. It is a far-sighted initiative brought alive to build
            the foundations of greener and cleaner tomorrow.{" "}
          </p>
          <p className="SUNSULTechnology_main_content_right_box_p">
            SUNSUL Technology can produce incredible amounts of electricity
            without a constant feed stock of fossil fuels, atomic energy or
            hydro powered means. It can recycle its own energy feed stock in a
            self-looped system-breakthrough technology in the renewable energy
            sector produces ‘GREEN’ electricity 24x7. The system is a
            self-looped motor generator using sulfur (available as an industrial
            waste product) and solar power. The technology is much more
            efficient than Solar PV cells as it works even in no sun conditions.{" "}
          </p>
          <p className="SUNSULTechnology_main_content_right_box_tag">
            <span
              style={{
                color: "#F9E488",
                fontSize: "12px",
                marginRight: "20px",
              }}
            >
              <i class="bi bi-chevron-right"></i>
            </span>
            Renewable energy project
          </p>
          <p className="SUNSULTechnology_main_content_right_box_tag">
            <span
              style={{
                color: "#F9E488",
                fontSize: "12px",
                marginRight: "20px",
              }}
            >
              <i class="bi bi-chevron-right"></i>
            </span>
            Does not require huge land and heavy investments to set-up
          </p>
          <p className="SUNSULTechnology_main_content_right_box_tag">
            <span
              style={{
                color: "#F9E488",
                fontSize: "12px",
                marginRight: "20px",
              }}
            >
              <i class="bi bi-chevron-right"></i>
            </span>
            It is an affordable alternative to generate electricity.
          </p>
          <button className="btn btn-outline-warning">KNOW MORE</button>
          <div className="SUNSULTechnology_main_content_right_box_line"></div>
          <div className="SUNSULTechnology_main_content_right_box_tag_div">
            <p className="SUNSULTechnology_main_content_right_box_tag">
              <span style={{ color: "#F9E488", fontSize: "16px" }}>
                Technology :{" "}
              </span>
              SUNSUL Technology
            </p>
            <p className="SUNSULTechnology_main_content_right_box_tag">
              <span style={{ color: "#F9E488", fontSize: "16px" }}>
                Company :{" "}
              </span>
              Navrattan Green Power Corporation Ltd.
            </p>
            <p className="SUNSULTechnology_main_content_right_box_tag">
              <span style={{ color: "#F9E488", fontSize: "16px" }}>
                Website :{" "}
              </span>
              www.ngpcl.com
            </p>
            <p className="SUNSULTechnology_main_content_right_box_tag">
              <span style={{ color: "#F9E488", fontSize: "16px" }}>
                Tags :{" "}
              </span>
              Alternative Energy, SUNSUL Technology, Green, Advanced Electric
              Amplification System{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="SUNSULTechnology_Discription_content_div">
        <div className="SUNSULTechnology_Discription_content_header">
          <Link
            className="SUNSULTechnology_Discription_content_header_link"
            to="/SUNSUL_Technology/Description"
          >
            Description
          </Link>
          <Link
            className="SUNSULTechnology_Discription_content_header_link"
            to="/SUNSUL_Technology/Advantage"
          >
            Advantage
          </Link>
          <Link
            className="SUNSULTechnology_Discription_content_header_link"
            to="/SUNSUL_Technology/benefits"
          >
            Reviews
          </Link>
        </div>
        <div className="SUNSULTechnology_Discription_content_outlet_div">
          <Outlet />
        </div>
        <InvesterPage />
        <Footer />
      </div>
    </div>
  );
};

export default SUNSULTechnology;

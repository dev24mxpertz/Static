import Navbar from "../Navbar/Navbar";
import "./BasaltMining.css";

import gsap from "gsap";
import { useRef, useEffect } from "react";
import imag from "../../Assets/basalt-mining.jpg";
import { Link, Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import InvesterPage from "../InvesterPage/InvesterPage";

const BasaltMining = () => {

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
      <div className="BasaltMining_main">
        <h4 className="BasaltMining_main_h4" ref={leftParaRef}>
          Basalt Mining
        </h4>
        <div ref={rightParaRef} className="scroller_circle">
          <span className="scroller_circle_span">
            <i class="bi bi-arrow-down"></i>
          </span>
        </div>
      </div>
      <div className="BasaltMining_main_content">
        <div className="BasaltMining_main_content_left_box">
          <img src={imag} alt={imag} />
        </div>
        <div className="BasaltMining_main_content_right_box">
          <h4 className="BasaltMining_main_content_right_box_h4">
            Basalt Mining
          </h4>
          <p className="BasaltMining_main_content_right_box_p">
            Navrattan USA Inc. owns over 169 acre of Basalt Quarry in Bozeman
            Montana, USA. Navrattan USA Inc is a global Endeavour and the
            organization is set up in Bozeman Montana, USA. Himansh Verma
            further added, it is effectively associated with the Basalt Rebar
            process. Basalt originates from magma.
          </p>
          <button className="btn btn-outline-warning">KNOW MORE</button>
          <div className="BasaltMining_main_content_right_box_line"></div>
          <div className="BasaltMining_main_content_right_box_tag_div">
            <p className="BasaltMining_main_content_right_box_tag">
              <span style={{ color: "#F9E488", fontSize: "16px" }}>
                Technology :{" "}
              </span>
              Gasification
            </p>
            <p className="BasaltMining_main_content_right_box_tag">
              <span style={{ color: "#F9E488", fontSize: "16px" }}>
                Company :{" "}
              </span>
              Navrattan Green Power CorporationLtd.
            </p>
            <p className="BasaltMining_main_content_right_box_tag">
              <span style={{ color: "#F9E488", fontSize: "16px" }}>
                Website :{" "}
              </span>
              www.navrattaninfra.com
            </p>
            <p className="BasaltMining_main_content_right_box_tag">
              <span style={{ color: "#F9E488", fontSize: "16px" }}>
                Tags :{" "}
              </span>
              Gasification, Green Energy, Navrattan Group
            </p>
          </div>
        </div>
      </div>
      <div className="BasaltMining_Discription_content_div">
        <div className="BasaltMining_Discription_content_header">
          <Link
            className="BasaltMining_Discription_content_header_link"
            to="/Basalt_Mining/Description"
          >
            Description
          </Link>
          <Link
            className="BasaltMining_Discription_content_header_link"
            to="/Basalt_Mining/benefits"
          >
            Sources of Basalt
          </Link>
        </div>
        <div className="BasaltMining_Discription_content_outlet_div">
          <Outlet />
        </div>
        <InvesterPage/>
        <Footer />
      </div>
    </div>
  );
};

export default BasaltMining;

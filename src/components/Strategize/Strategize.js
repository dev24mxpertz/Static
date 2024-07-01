import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Strategize.css";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import imag from "../../Assets/strategizeimage.png";
import Footer from "../Footer/Footer";
import InvesterPage from "../InvesterPage/InvesterPage";


const Strategize = () => {
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
      <div className="Strategize_main">
        <h4 className="Strategize_main_h4" ref={leftParaRef}>
          Strategize
        </h4>
        {/* <h2 ref={centerParaRef} className="Strategize_main_h2">
          Precast Concrete Element Products
        </h2> */}
        <div ref={rightParaRef} className="scroller_circle">
          <span className="scroller_circle_span">
            <i class="bi bi-arrow-down"></i>
          </span>
        </div>
      </div>
      <div className="Strategize_main_content">
        <div className="Strategize_main_content_left_box">
          <img src={imag} alt={imag} />
        </div>
        <div className="Strategize_main_content_right_box">
          <h4 className="Strategize_main_content_right_box_h4">Strategize</h4>
          <p className="Strategize_main_content_right_box_p">
            Strategize your intellectual property assets and get market-centered
            claims Patents are not obtained easily; you need to get them
            granted.
          </p>
          <p className="Strategize_main_content_right_box_p">
            When you get a rejection for your IP application, you have two
            options – abandon the application or go for IP prosecution. The
            latter option provides you the opportunity to protect your
            intellectual property and narrow claims that distinguish your
            invention from prior arts.{" "}
          </p>
          <p className="Strategize_main_content_right_box_p">
            We work with small and medium-sized businesses, individual
            inventors, academicians, and universities are helping them prosecute
            their patents. At Navrattan Holdings Limited, we have a team of
            professional patent and market analysts who develop a complete
            understanding of clients’ IP assets to deliver the best patent
            prosecution services. Our professionals understand the fact that
            patents with market sound claims are monetized easily. Thus, we
            develop the IP prosecution strategy in such a way that clients get
            only the claims that align with the latest technology trends. As an
            investor, you have the right to protect and monetize your invention
            in the way you want to, and we help you for that by providing
            in-depth market research to get information about the top players,
            existing products and the latest trends in the targeted markets work
            directly with the clients to create detailed descriptions and
            claims, and carrying out detailed research to check the validity of
            the claims and develop IP monetization strategy.
          </p>
       </div>
      </div>
      <div className="Strategize_Discription_content_div">
          <InvesterPage/>
        <Footer />
      </div>
    </div>
  );
};

export default Strategize;

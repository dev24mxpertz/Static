import React from 'react'
import "./Research.css"
import Navbar from "../Navbar/Navbar";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import imag from "../../Assets/monetization.png";
import Footer from "../Footer/Footer";
import InvesterPage from '../InvesterPage/InvesterPage';



const Research = () => {
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
    <div className="Research_main">
      <h4 className="Research_main_h4" ref={leftParaRef}>
        Research
      </h4>
      {/* <h2 ref={centerParaRef} className="Research_main_h2">
        Precast Concrete Element Products
      </h2> */}
      <div ref={rightParaRef} className="scroller_circle">
        <span className="scroller_circle_span">
          <i class="bi bi-arrow-down"></i>
        </span>
      </div>
    </div>
    <div className="Research_main_content">
      <div className="Research_main_content_left_box">
        <img src={imag} alt={imag} />
      </div>
      <div className="Research_main_content_right_box">
        <h4 className="Research_main_content_right_box_h4">Research</h4>
        <p className="Research_main_content_right_box_p">
          At Navrattan Holdings Limited, we deliver personalized patent research
          and analytics services ranging from generating, protecting, managing,
          and monetization. Getting patents not only protect your IP assets form
          infringement activities but also increases your chances to earn big.
          At Navrattan Holdings Limited, we do a detailed study on clients'
          inventions and help them get complete intellectual property protection
          with the broadest possible claims. Customer satisfaction is our prime
          objective, and we always provide customized services tailored to the
          needs of clients.
        </p>
        <p className="Research_main_content_right_box_p">
          A patent search is the first step when filing the IP application. We
          believe that analyzing market parameters related to the invention is
          also necessary when checking its uniqueness standards. Thus, our IP
          search report includes information about the novelty of your invention
          and complete market research for building a sound monetization
          strategy. This helps you get details about target markets, top
          players, existing and upcoming products aligning with the technologies
          being patented.{" "}
        </p>
      </div>
    </div>
    <div className="Research_Discription_content_div">
        <InvesterPage/>
      <Footer />
    </div>
  </div>
);
}

export default Research
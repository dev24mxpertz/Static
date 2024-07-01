import React from 'react'
import "./PatentCommercialization.css"


import Navbar from "../Navbar/Navbar";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import imag from "../../Assets/commercialization.png";
import Footer from "../Footer/Footer";
import InvesterPage from '../InvesterPage/InvesterPage';

const PatentCommercialization = () => {
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
      <div className="PatentCommercialization_main">
        <h4 className="PatentCommercialization_main_h4" ref={leftParaRef}>
          Patent Commercialization
        </h4>
        {/* <h2 ref={centerParaRef} className="PatentCommercialization_main_h2">
          Precast Concrete Element Products
        </h2> */}
        <div ref={rightParaRef} className="scroller_circle">
          <span className="scroller_circle_span">
            <i class="bi bi-arrow-down"></i>
          </span>
        </div>
      </div>
      <div className="PatentCommercialization_main_content">
        <div className="PatentCommercialization_main_content_left_box">
          <img src={imag} alt={imag} />
        </div>
        <div className="PatentCommercialization_main_content_right_box">
          <h4 className="PatentCommercialization_main_content_right_box_h4">
            Patent Commercialization
          </h4>
          <p className="PatentCommercialization_main_content_right_box_p">
            Our expertise is in protecting and enhancing the value of technology
            and business through skillful IP planning and execution, and in
            assisting clients as they manage the profitability of their patent
            portfolios. We provide experienced planning and execution of
            strategies to gather a return on the value of innovations vital to
            ongoing business success. With extensive expertise in alternative
            energy generation technologies and environmentally-friendly
            innovations, our team of patent lawyers has helped research-based
            organizations and businesses create huge revenue.
          </p>
          <p className="PatentCommercialization_main_content_right_box_p">
            We have worked with many research and development-oriented clients
            since the inception of their successful technology transfer and
            licensing programs. We have also worked to develop IP strategies for
            the participation in standards organizations and patent pools.
            Although these strategies can present significant business
            opportunities and reduced legal exposure, recent litigation
            histories show that a failure to steer clear of the numerous
            antitrust and related issues can have devastating consequences. Our
            expertise includes working with corporate clients to gain the
            business advantages of IP cooperation while avoiding potential legal
            pitfalls.
          </p>
          <p className="PatentCommercialization_main_content_right_box_p">
            Regardless of the size of an entity's patent portfolio or individual
            licensing opportunities, our expertise allows us to provide advice
            at critical stages to grow and attain a highly-profitable patent
            licensing program. Once a licensing program is established, we work
            alongside our clients as they manage the program efficiently and
            effectively. We are the sounding board that provides fresh
            perspectives, giving advice and guidance to research-and-development
            staff in the development of licensable technologies.
          </p>
        </div>
      </div>
      <div className="PatentCommercialization_Discription_content_div">
       <InvesterPage/>
        <Footer />
      </div>
    </div>
  );
}

export default PatentCommercialization
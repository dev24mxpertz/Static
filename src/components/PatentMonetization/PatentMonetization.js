import React from 'react'
import "./PatentMonetization.css"

import Navbar from "../Navbar/Navbar";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import imag from "../../Assets/PatentMonetization.avif";
import Footer from "../Footer/Footer";
import InvesterPage from '../InvesterPage/InvesterPage';

const PatentMonetization = () => {
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
        <div className="PatentMonetization_main">
          <h4 className="PatentMonetization_main_h4" ref={leftParaRef}>
            Patent Monetization
          </h4>
          {/* <h2 ref={centerParaRef} className="PatentMonetization_main_h2">
            Precast Concrete Element Products
          </h2> */}
          <div ref={rightParaRef} className="scroller_circle">
            <span className="scroller_circle_span">
              <i class="bi bi-arrow-down"></i>
            </span>
          </div>
        </div>
        <div className="PatentMonetization_main_content">
          <div className="PatentMonetization_main_content_left_box">
            <img src={imag} alt={imag} />
          </div>
          <div className="PatentMonetization_main_content_right_box">
            <h4 className="PatentMonetization_main_content_right_box_h4">
              Patent Monetization
            </h4>
            <p className="PatentMonetization_main_content_right_box_p">
              Generating revenue by selling or directly / indirectly licensing
              the patents.
            </p>
            <p className="PatentMonetization_main_content_right_box_p">
              The development of intellectual property assets is crucial to the
              innovation, competitiveness and sustained growth of an entity.
              These assets may also be leveraged as another source of revenue,
              strengthening overall profits and diversifying risk. Often,
              intangible assets are developed as a part of a company's overall
              productivity and growth. While some intangible assets contribute
              to the main economic benefit of the company, additional means of
              revenue may be generated through supplementary monetization means.
              To profit from your Intellectual Property assets, you don’t have
              to manage all of them yourself. Just like any other assets,
              patents and trademarks can be traded, strengthening overall
              productivity and profits. Our global network is your access point
              to the global IP market. IP monetization process is different for
              every technological field. At Navrattan Holdings Ltd., we analyze
              your portfolio and do a thorough patent infringement analysis, and
              ascertain which of your assets have a definite potential to
              generate better near-term revenue through either the sale of the
              asset or the enforcement of the patents.{" "}
            </p>
          </div>
        </div>
        <div className="PatentMonetization_Discription_content_div">
          <InvesterPage/>
          <Footer />
        </div>
      </div>
    );
}

export default PatentMonetization
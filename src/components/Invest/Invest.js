import React from 'react'
import "./Invest.css"

import Navbar from "../Navbar/Navbar";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import imag from "../../Assets/invest.png";
import Footer from "../Footer/Footer";
import InvesterPage from '../InvesterPage/InvesterPage';

const Invest = () => {
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
        <div className="Invest_main">
          <h4 className="Invest_main_h4" ref={leftParaRef}>
            Invest
          </h4>
          {/* <h2 ref={centerParaRef} className="Invest_main_h2">
            Precast Concrete Element Products
          </h2> */}
          <div ref={rightParaRef} className="scroller_circle">
            <span className="scroller_circle_span">
              <i class="bi bi-arrow-down"></i>
            </span>
          </div>
        </div>
        <div className="Invest_main_content">
          <div className="Invest_main_content_left_box">
            <img src={imag} alt={imag} />
          </div>
          <div className="Invest_main_content_right_box">
            <h4 className="Invest_main_content_right_box_h4">Invest</h4>
            <p className="Invest_main_content_right_box_p">
              Investment in IP for Companies: Operating companies have a strong
              desire to produce a strategic return on their IP investment. This
              investment may comprise acquisition of patents in an area where
              the company possesses few patents, an investment or strategic
              alliance in a key technology whether it be software or hardware
              that differentiates an operating company’s current product
              offering or adds an offering to target a growing or new market.
              The acquisition of key technology or business that expands the
              operating company’s reaches adding to increased market share or
              profits or revenues or all of the above. Senior consultants at
              Navrattan Holdings Limited are well equipped to help your company
              search for and scout out appropriate technologies and IP for
              investment and acquisitions purposes. We have worked for a number
              of tech investor operating companies to research, locate/scan,
              offer, negotiate and help close strategically significant
              investments and acquisitions.
            </p>
            <p className="Invest_main_content_right_box_p">
              For investing in IP for investors, we have implemented patent
              investment strategies for several investors who have desired a
              financial return on their investment. This return may be created
              through Navrattan Holdings Ltd. bringing investors and IP owners
              together and helping negotiate an agreement for the mutual benefit
              of the parties concerned.{" "}
            </p>
          </div>
        </div>
        <div className="Invest_Discription_content_div">
          <InvesterPage/>
          <Footer />
        </div>
      </div>
    );
}

export default Invest
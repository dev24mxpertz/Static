import React from 'react'
import "./PatentsDevelopmentProgram.css"

import Navbar from "../Navbar/Navbar";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import imag from "../../Assets/development-program.png";
import Footer from "../Footer/Footer";
import InvesterPage from '../InvesterPage/InvesterPage';

const PatentsDevelopmentProgram = () => {
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
      <div className="PatentsDevelopmentProgram_main">
        <h4 className="PatentsDevelopmentProgram_main_h4" ref={leftParaRef}>
          Patents Development Program
        </h4>
        {/* <h2 ref={centerParaRef} className="PatentsDevelopmentProgram_main_h2">
          Precast Concrete Element Products
        </h2> */}
        <div ref={rightParaRef} className="scroller_circle">
          <span className="scroller_circle_span">
            <i class="bi bi-arrow-down"></i>
          </span>
        </div>
      </div>
      <div className="PatentsDevelopmentProgram_main_content">
        <div className="PatentsDevelopmentProgram_main_content_left_box">
          <img src={imag} alt={imag} />
        </div>
        <div className="PatentsDevelopmentProgram_main_content_right_box">
          <h4 className="PatentsDevelopmentProgram_main_content_right_box_h4">
            Patents Development Program
          </h4>
          <p className="PatentsDevelopmentProgram_main_content_right_box_p">
            Innovation is crucial to the development and deployment of
            technologies. A widely deployed model to understand technology
            builds on the concept of the technology life cycle. The life cycle
            of technologies can be divided into stages – from invention, through
            research, development, and dissemination (RD&D) and market
            development, to commercial diffusion. Different processes occur at
            each stage of the technology life cycle, providing various
            opportunities to employ instruments that promote innovation.
          </p>
          <p className="PatentsDevelopmentProgram_main_content_right_box_p">
            Traditionally, IPR is divided into two forms: industrial property
            rights and copyright. In general, copyright is a legal term
            describing rights given to creators over their literary and artistic
            creations, while the term ‘industrial property rights’ refers to
            certain exclusive rights regarding innovative ideas or
            distinguishing signs in the industrial or commercial field. The
            industrial property takes a range of forms and includes patents to
            protect inventions, trademarks, industrial designs, and commercial
            names.
          </p>
        </div>
      </div>
      <div className="PatentsDevelopmentProgram_Discription_content_div">
        <InvesterPage/>
        <Footer />
      </div>
    </div>
  );
}

export default PatentsDevelopmentProgram


import React, { useRef, useEffect } from "react";
import "./How_we.css";
import image from "../../Assets/howwedo.png";
import Navbar from "../Navbar/Navbar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const How_we = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      leftRef.current,
      {  opacity: 0 },
      {
        // x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: leftRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      rightRef.current,
      { y: 200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: rightRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <>
      {/* <Navbar /> */}
      <div className="How_we_main">
        <div className="How_we_main_left" ref={leftRef}>
          <img
            className="How_we_main_left_img"
            src={image}
            alt="How we function"
          />
        </div>
        <div className="How_we_main_right" ref={rightRef}>
          <h3 className="How_we_main_right_h3">HOW WE FUNCTION</h3>
          <div className="How_we_main_right_line"></div>
          <h3 className="How_we_main_right_header">
            We believe in quality, innovation, and performance.
          </h3>
          <p className="How_we_main_right_p">
            Navrattan Holdings Limited is a leading science and technology
            company, active in developing and acquiring innovative technologies
            from all across the globe. Since our establishment, the company has
            worked upon many breakthrough technologies across various industries
            and continue working on many more. Conceptualizing forms the bases
            of any research. Mr. Himansh Verma, the Founder & Chairman of
            Navrattan group saw the problem of pollution, landfills and
            extensive exploitation of non-renewable resources. Soon he came up
            with an idea and has worked day and night with some of the best
            scientists and researchers to give shape to his ideas. The research
            and development, and technology formulation follow. The technology
            then has to pass through various testing standards to grant
            validation. Simulation and prototyping from the next step in
            changing a dream to reality. Once the technology qualifies on all
            parameters it is then commercialized.
          </p>
          <p className="How_we_main_right_p">
            Our vast network of scientists, experts, and thorough leaders is
            driven by the passion to explore and the prospect of making a
            meaningful difference in people’s lives. As a leading science and
            technology company, we discover and develop for life in all its
            vibrancy. Our ideas are everywhere, across a wide range of
            industries. Curiosity has been our driving force since our
            inception.
          </p>
          <div className="How_we_main_right_footer_div">
            <div className="How_we_main_right_footer_div_box">
              <span className="How_we_main_right_footer_div_box_span">
                <span style={{ color: "#f9e488", marginRight: "20px" }}>
                  <i class="bi bi-arrow-clockwise"></i>
                </span>
                First-Class Facilities
              </span>
              <p className="How_we_main_right_footer_div_box_p">
                First class facilities like state-of-the-art laboratories, the
                latest technology and machinery are all available to help R&D
                team deliver utmost results.
              </p>
            </div>
            {/* ---------------------------------------------------------- */}
            <div className="How_we_main_right_footer_div_box">
              <span className="How_we_main_right_footer_div_box_span">
                <span style={{ color: "#f9e488", marginRight: "20px" }}>
                  <i class="bi bi-arrow-clockwise"></i>
                </span>
                Quality Checks
              </span>
              <p className="How_we_main_right_footer_div_box_p">
                We at Navrattan Holdings Ltd. strive hard to achieve the best
                quality product that delivers superior performance.
              </p>
            </div>
            {/* ---------------------------------------------------------- */}
            <div className="How_we_main_right_footer_div_box">
              <span className="How_we_main_right_footer_div_box_span">
                <span style={{ color: "#f9e488", marginRight: "20px" }}>
                  <i class="bi bi-arrow-clockwise"></i>
                </span>
                Training & Development
              </span>
              <p className="How_we_main_right_footer_div_box_p">
                At regular intervals we provide our staff and new entrants with
                the latest and up-to-date training and development workshops to
                help increase their awareness about the latest trends in the
                market.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default How_we;

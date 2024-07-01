import React, { useRef, useEffect } from "react";
import "./OUREXPERTISE.css";
import Navbar from "../Navbar/Navbar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OUREXPERTISE = () => {
  const expertiseRef = useRef([]);

  useEffect(() => {
    expertiseRef.current.forEach((box, index) => {
      gsap.fromTo(
        box,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.2, // Stagger the animation
          scrollTrigger: {
            trigger: box,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <>
      {/* <Navbar /> */}
      <div className="OUREXPERTISE_main">
        <h3 className="OUREXPERTISE_h3">OUREXPERTISE</h3>
        <div className="OUREXPERTISE_line"></div>
        <div className="OUREXPERTISE_box">
          <div
            className="OUREXPERTISE_content_box"
            ref={(el) => (expertiseRef.current[0] = el)}
          >
            <div className="OUREXPERTISE_content_box_img_div">
              <h3>
                <i class="bi bi-body-text"></i>
              </h3>
            </div>
            <div className="OUREXPERTISE_content_box_content_div">
              <h3 className="OUREXPERTISE_content_box_content_div_h3">
                MONETIZATION
              </h3>
              <p className="OUREXPERTISE_content_box_content_div_p">
                Divesting their patent or applications yet retaining the right
                to practice the inventions in their products through a grant
                back license.
              </p>
            </div>
          </div>
          <div
            className="OUREXPERTISE_content_box"
            ref={(el) => (expertiseRef.current[1] = el)}
          >
            <div className="OUREXPERTISE_content_box_img_div">
              <h3>
                <i class="bi bi-body-text"></i>
              </h3>
            </div>
            <div className="OUREXPERTISE_content_box_content_div">
              <h3 className="OUREXPERTISE_content_box_content_div_h3">
                Patent Licensing
              </h3>
              <p className="OUREXPERTISE_content_box_content_div_p">
                One way to monetize your patent or patent portfolio is to
                license it. If your patent is being used without your
                permission, that is patent infringement, so you can assertively
                license your patent.
              </p>
            </div>
          </div>
          <div
            className="OUREXPERTISE_content_box"
            ref={(el) => (expertiseRef.current[2] = el)}
          >
            <div className="OUREXPERTISE_content_box_img_div">
              <h3>
                <i class="bi bi-body-text"></i>
              </h3>
            </div>
            <div className="OUREXPERTISE_content_box_content_div">
              <h3 className="OUREXPERTISE_content_box_content_div_h3">
                STRATEGIZE
              </h3>
              <p className="OUREXPERTISE_content_box_content_div_p">
                Business level assessment of patent strategy and pay back.
                Understanding the strengths, weaknesses and gaps of the
                Portfolio.
              </p>
            </div>
          </div>
          <div
            className="OUREXPERTISE_content_box"
            ref={(el) => (expertiseRef.current[3] = el)}
          >
            <div className="OUREXPERTISE_content_box_img_div">
              <h3>
                <i class="bi bi-body-text"></i>
              </h3>
            </div>
            <div className="OUREXPERTISE_content_box_content_div">
              <h3 className="OUREXPERTISE_content_box_content_div_h3">
                INVEST
              </h3>
              <p className="OUREXPERTISE_content_box_content_div_p">
                Creation of an acquisition plan and roadmap based on identified
                priorities – include performance measures{" "}
              </p>
            </div>
          </div>
          <div
            className="OUREXPERTISE_content_box"
            ref={(el) => (expertiseRef.current[4] = el)}
          >
            <div className="OUREXPERTISE_content_box_img_div">
              <h3>
                <i class="bi bi-body-text"></i>
              </h3>
            </div>
            <div className="OUREXPERTISE_content_box_content_div">
              <h3 className="OUREXPERTISE_content_box_content_div_h3">
                PATENTS DEVELOPMENT PROGRAM
              </h3>
              <p className="OUREXPERTISE_content_box_content_div_p">
                Develop patent portfolios with a view to creating intrinsic
                market value.
              </p>
            </div>
          </div>
          <div
            className="OUREXPERTISE_content_box"
            ref={(el) => (expertiseRef.current[5] = el)}
          >
            <div className="OUREXPERTISE_content_box_img_div">
              <h3>
                <i class="bi bi-body-text"></i>
              </h3>
            </div>
            <div className="OUREXPERTISE_content_box_content_div">
              <h3 className="OUREXPERTISE_content_box_content_div_h3">
                RESEARCH
              </h3>
              <p className="OUREXPERTISE_content_box_content_div_p">
                At Navrattan Holdings we do appropiate public research papers,
                comparisons and presentations.
              </p>
            </div>
          </div>
          <div
            className="OUREXPERTISE_content_box"
            ref={(el) => (expertiseRef.current[6] = el)}
          >
            <div className="OUREXPERTISE_content_box_img_div">
              <h3>
                <i class="bi bi-body-text"></i>
              </h3>
            </div>
            <div className="OUREXPERTISE_content_box_content_div">
              <h3 className="OUREXPERTISE_content_box_content_div_h3">
                TECHNOLOGY TRANSFER
              </h3>
              <p className="OUREXPERTISE_content_box_content_div_p">
                Technology transfer is the use of a technology know-how
                developed for one application or industry in a totally new
                application or industry.
              </p>
            </div>
          </div>
          <div
            className="OUREXPERTISE_content_box"
            ref={(el) => (expertiseRef.current[7] = el)}
          >
            <div className="OUREXPERTISE_content_box_img_div">
              <h3>
                <i class="bi bi-body-text"></i>
              </h3>
            </div>
            <div className="OUREXPERTISE_content_box_content_div">
              <h3 className="OUREXPERTISE_content_box_content_div_h3">
                COMMERCIALISATION
              </h3>
              <p className="OUREXPERTISE_content_box_content_div_p">
                Patent sales opportunities are provided with introductory
                materials that highlight exemplary patents and all analyses are
                available post NDA.
              </p>
            </div>
          </div>
          <div
            className="OUREXPERTISE_content_box"
            ref={(el) => (expertiseRef.current[8] = el)}
          >
            <div className="OUREXPERTISE_content_box_img_div">
              <h3>
                <i class="bi bi-body-text"></i>
              </h3>
            </div>
            <div className="OUREXPERTISE_content_box_content_div">
              <h3 className="OUREXPERTISE_content_box_content_div_h3">
                PATENT VALUATION
              </h3>
              <p className="OUREXPERTISE_content_box_content_div_p">
                Patent valuation is not an exact science and it’s not even an
                art. It is a very specialized activity and can vary somewhat
                depending on the assumptions and the methods employed
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OUREXPERTISE;

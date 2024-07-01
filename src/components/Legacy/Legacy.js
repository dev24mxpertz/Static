import React, { useRef, useEffect } from "react";
import "./Legacy.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Legacy = () => {
  const headerRef = useRef(null);
  const buttonRef = useRef(null);
  const workProcessRefs = useRef([]);
  workProcessRefs.current = [];

  const addToWorkProcessRefs = (el) => {
    if (el && !workProcessRefs.current.includes(el)) {
      workProcessRefs.current.push(el);
    }
  };

  useEffect(() => {
    const header = headerRef.current;
    const button = buttonRef.current;
    const workProcess = workProcessRefs.current;

    // Animate the header
    gsap.fromTo(
      header,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: header,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate the button
    gsap.fromTo(
      button,
      { opacity: 0, scale: 0.5 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: button,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate each work process step
    workProcess.forEach((step, index) => {
      gsap.fromTo(
        step,
        { opacity: 0, x: 20 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          delay: index * 0.2, // Stagger the animation of each step
          scrollTrigger: {
            trigger: step,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div className="Legacy_main_div">
      <div className="Legacy_main_upper">
        <h2 className="Legacy_main_upper_h2" ref={headerRef}>
          <span style={{ color: "#f9e488" }}>Technologies</span> That makes
          Navrattan Holdings standout from the crowd.
        </h2>
        <button
          ref={buttonRef}
          className="btn btn-outline-secondary Legacy_main_upper_button"
        >
          Check Out Now!!
        </button>
      </div>
      <div className="Legacy_main_lower">
        <h4 className="Legacy_main_lower_h4">WORK PROCESS</h4>
        <div className="Legacy_main_lower_line"></div>
        <div className="Legacy_main_lower_content_div">
          <div
            className="Legacy_main_lower_content_div_circle"
            ref={addToWorkProcessRefs}
          >
            <h5>Analysis</h5>
            <div className="Legacy_main_lower_content_div_circle_line"></div>
            <p className="Legacy_main_lower_content_div_circle_p">
              Requirement gathering and research
            </p>
          </div>
          <div
            className="Legacy_main_lower_content_div_circle"
            ref={addToWorkProcessRefs}
          >
            <h5>Design</h5>
            <div className="Legacy_main_lower_content_div_circle_line"></div>
            <p className="Legacy_main_lower_content_div_circle_p">
              Giving the innovation a design form
            </p>
          </div>
          <div
            className="Legacy_main_lower_content_div_circle"
            ref={addToWorkProcessRefs}
          >
            <h5>Development</h5>
            <div className="Legacy_main_lower_content_div_circle_line"></div>
            <p className="Legacy_main_lower_content_div_circle_p">
              Technology or product development & testing
            </p>
          </div>
          <div
            className="Legacy_main_lower_content_div_circle"
            ref={addToWorkProcessRefs}
          >
            <h5>Commercialization</h5>
            <div className="Legacy_main_lower_content_div_circle_line"></div>
            <p className="Legacy_main_lower_content_div_circle_p">
              Bring the technology in the market.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legacy;

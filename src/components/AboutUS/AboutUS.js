import { Link } from "react-router-dom";
import "./AboutUS.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const AboutUS = () => {
  const leftParaRef = useRef(null);
  const centerParaRef = useRef(null);
  const rightParaRef = useRef(null);

  useEffect(() => {
    const leftPara = leftParaRef.current;
    const centerPara = centerParaRef.current;
    const rightPara = rightParaRef.current;

    gsap.fromTo(
      leftPara,
      { left: "-20%", opacity: 0 },
      {
        left: 180,
        opacity: 1,
        duration: 3,
        scrollTrigger: {
          trigger: leftPara,
          start: "top 95%",
          end: "top 40%", 
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      centerPara,
      { y: "50%", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: centerPara,
          start: "top 95%",
          end: "top 40%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      rightPara,
      { right: "-60%", opacity: 0 },
      {
        right: -140,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: rightPara,
          start: "top 95%",
          end: "top 40%",
          scrub: true,
        },
      }
    );

  }, []);

  return (
    <div className="col-md-12 AboutUS_main_div">
      {/* <div className="Aboutus_Para_div"> */}
      <div className="Para_left_div" ref={leftParaRef}>
        <h3 style={{ color: "#f9e488" }}>1 Million+</h3>
        <h4>Vehicles sold annually</h4>
      </div>
      <div className="Para_center_div" ref={centerParaRef}>
        <h3 className="Aboutus_subheading">AboutUS</h3>
        <h1 className="Aboutus_heading">INNOVATING THE FUTURE</h1>
        <p>
          Navrattan Holdings Ltd. is the Research & Development hub of Navrattan
          Group’s diverse businesses and verticals. The Company specializes in
          solving complex problems by bringing together the fundamentals of
          science with the pragmatism and application of engineering to create
          groundbreaking innovations.
        </p>
        <Link className="Para_center_div_link">READ MORE</Link>
      </div>
      <div className="Para_right_div" ref={rightParaRef}>
        <h3 style={{ color: "#f9e488" }}>81,000+</h3>
        <h4>Collective workforce strength</h4>
      </div>
      {/* </div> */}
    </div>
  );
};

export default AboutUS;

import React, { useRef, useEffect } from "react";
import "./InvesterPage.css";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const InvesterPage = () => {
  const spanRef = useRef(null);
  const linkRef = useRef(null);

  useEffect(() => {
    const span = spanRef.current;
    const link = linkRef.current;

    // Animate the span element
    gsap.fromTo(
      span,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: span,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate the link element
    gsap.fromTo(
      link,
      { opacity: 0, scale: 0.5 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: link,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div className="InvesterPage_main" ref={spanRef}>
      <span className="InvesterPage_main_span">
        For More Information on Our Technologies{" "}
        <Link ref={linkRef} className="InvesterPage_main_span_link">
          Contact US
        </Link>
      </span>
    </div>
  );
};

export default InvesterPage;

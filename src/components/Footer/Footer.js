import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const [Email, setEmail] = useState("");

  const footerSectionsRef = useRef([]);
  const socialMediaIconsRef = useRef([]);
  const subscribeSectionRef = useRef(null);

  useEffect(() => {
    // Animate the main footer sections
    footerSectionsRef.current.forEach((section, index) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: section,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Animate the social media icons
    socialMediaIconsRef.current.forEach((icon, index) => {
      gsap.fromTo(
        icon,
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: icon,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Animate the subscribe section
    gsap.fromTo(
      subscribeSectionRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: subscribeSectionRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div className="Footer_main_div">
      <div className="Footer_upper_div">
        <div
          className="Footer_sqaure"
          ref={(el) => (footerSectionsRef.current[0] = el)}
        >
          <div className="Footer_wing">
            <Link className="Footer_link_header">ABOUT US</Link>
          </div>
          <p className="Footer_link_header_p">
            Navrattan Holdings Ltd. is the Research & Development hub of
            Navrattan Group’s diverse businesses and verticals.
          </p>
          <p className="Footer_link_header_p">
            <span style={{ color: "#f9e488" }}>Office : </span> Navrattan Group{" "}
            <br /> 604, Trade Centre, 6th Floor, <br />
            BKC, Bandra(E), Mumbai - 400051. INDIA.
          </p>
          <p className="Footer_link_header_p">
            <span style={{ color: "#f9e488" }}>Call US : </span> +
            91-22-41040000
          </p>
        </div>
        {/* -------------------------------------------------------------------------------- */}
        <div
          className="Footer_sqaure"
          ref={(el) => (footerSectionsRef.current[1] = el)}
        >
          <div className="Footer_wing">
            <Link className="Footer_link_header">BLOGROLL</Link>
          </div>
          <Link className="Footer_link_tag">Renewable Technologies</Link>
          <Link className="Footer_link_tag">
            Innovations In Construction Sector
          </Link>
          <Link className="Footer_link_tag">Future Transportation</Link>
          <Link className="Footer_link_tag">Waste Management</Link>{" "}
        </div>
        {/* ------------------------------------------------------------------------------------ */}
        <div
          className="Footer_sqaure"
          ref={(el) => (footerSectionsRef.current[2] = el)}
        >
          <div className="Footer_wing">
            <Link className="Footer_link_header">LATEST NEWS</Link>
          </div>
          <p className="Footer_link_header_p">
            <Link
              target="_blank"
              to="https://www.indiatvnews.com/business/news-the-indian-cement-industry-is-all-set-to-evolve-539477"
              className="Footer_link_tag"
            >
              The Indian Cement Industry is all set to evolve.
            </Link>
          </p>
          <p className="Footer_link_header_p">
            <Link className="Footer_link_tag">
              India is all set to have its first e-bus by Navrattan Holdings Ltd
            </Link>
          </p>
        </div>
        {/* ---------------------------------------------------------------------------------------- */}
        <div
          className="Footer_sqaure"
          ref={(el) => (footerSectionsRef.current[3] = el)}
        >
          <div className="Footer_wing">
            <Link className="Footer_link_header">NEWSLETTER SIGNUP</Link>
          </div>
          <p className="Footer_link_header_p">
            Subscribe to Our Newsletter to get Important News, Amazing Offers &
            Inside Scoops:
          </p>
          <Link className="Footer_link_tag">Disclaimer</Link>
        </div>
      </div>
      <div className="Footer_lower_div">
        <div className="Footer_lower_left">
          <h6>SOCAIL MEDIA</h6>
          <div className="Footer_line"></div>
          <div className="Footer_SocialMediadiv">
            <Link
              ref={(el) => (socialMediaIconsRef.current[0] = el)}
              style={{ textDecoration: "none", color: "white" }}
              to="https://www.facebook.com/navrattangroup"
              target="_blank"
            >
              <i className="bi bi-facebook"></i>
            </Link>
            <Link
              ref={(el) => (socialMediaIconsRef.current[1] = el)}
              style={{ textDecoration: "none", color: "white" }}
              to="https://in.pinterest.com/navrattangroup/"
              target="_blank"
            >
              {/* <i className="bi bi-instagram"></i> */}
              <i class="bi bi-pinterest"></i>
            </Link>

            <Link
              ref={(el) => (socialMediaIconsRef.current[2] = el)}
              style={{ textDecoration: "none", color: "white" }}
              to="https://twitter.com/HimanshVerma1"
              target="_blank"
            >
              <i className="bi bi-twitter-x"></i>
            </Link>

            <Link
              ref={(el) => (socialMediaIconsRef.current[3] = el)}
              style={{ textDecoration: "none", color: "white" }}
              to="https://www.linkedin.com/company/navrattan-group?trk=public_profile_topcard_current_company"
              target="_blank"
            >
              <i className="bi bi-linkedin"></i>
            </Link>

            <Link
              ref={(el) => (socialMediaIconsRef.current[4] = el)}
              style={{ textDecoration: "none", color: "white" }}
              to="https://www.youtube.com/channel/UCw6KR8ZQI10L00JbHq48DSA"
              target="_blank"
            >
              <i className="bi bi-youtube"></i>
            </Link>
          </div>
          <div className="Footer_disclamer">
            <Link>Legal Disclaimer</Link> <h6>|</h6>
            <Link>Open Source License Disclaimer</Link>
          </div>
        </div>
        <div className="Footer_lower_right" ref={subscribeSectionRef}>
          <h6>SUBSCRIBE</h6>
          <div className="Footer_line"></div>
          <div className="Footer_lower_right_input_div">
            <i className="bi bi-envelope-arrow-down-fill"></i>
            <input
              type="email"
              className="Footer_lower_right_input"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
            />
            <button className="btn btn-primary Footer_lower_right_input_button">
              Subscribe
            </button>
          </div>
          <div className="Footer_disclamer">
            <p>© Copyright 2024. All rights reserved. Navrattan Holdings Ltd</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

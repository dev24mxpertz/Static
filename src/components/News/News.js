import React from "react";
import "./News.css";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import news18nov from "../../Assets/news18-nov.jpg"
import babushahinov from "../../Assets/babushahi-nov.jpg"
import prnov from "../../Assets/pr-nov.jpg"
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const News = () => {
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
      <Navbar />
      <div className="News_main">
        <h3 className="News_h3">News</h3>
        <div className="News_line"></div>
        <div className="News_box">
          <div
            className="News_content_box"
            ref={(el) => (expertiseRef.current[0] = el)}
          >
            <div className="News_content_box_img_div">
              <img src={news18nov} alt={news18nov} />
            </div>
            <Link
              to="https://www.news18.com/news/press-release/going-green-is-what-indians-are-demanding-contemporary-2396585.html"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <div className="News_content_box_content_div">
                <h3 className="News_content_box_content_div_h3">
                  Going Green is What Indians are Demanding Contemporary
                </h3>
                <p className="News_content_box_content_div_p">
                  With several breakthrough innovations, Indian entrepreneurs
                  are paralleling the high pace of zero-harm technology epoch.
                  From going green in farming to producing electricity 24*7 by
                  not playing with the environment and buying the science and
                  technology, IPRs is the initiative towards the environment.
                </p>
                <p className="News_content_box_content_div_p">
                  <span style={{ color: "#f9e488", marginRight: "20px" }}>
                    <i class="bi bi-calendar3"></i>
                  </span>
                  November 22, 2019
                </p>
              </div>
            </Link>
          </div>
          <div
            className="News_content_box"
            ref={(el) => (expertiseRef.current[0] = el)}
          >
            <div className="News_content_box_img_div">
              <img src={babushahinov} alt={babushahinov} />
            </div>
            <Link
              to="https://www.babushahi.com/business.php?id=93779&headline=Green-Crete-can-help-construction-Industry-move-towards-sustainability"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <div className="News_content_box_content_div">
                <h3 className="News_content_box_content_div_h3">
                  Green Crete can help construction Industry move towards
                  sustainability: Himansh Verma
                </h3>
                <p className="News_content_box_content_div_p">
                  Green Crete is the word we have heard for long, but the
                  question is always raised that how many construction
                  industries in India are going on the right path of
                  sustainability. As the business keeps on extending and the
                  world's stockpile of non-inexhaustible assets gradually become
                  rarer and increasingly costly...
                </p>
                <p className="News_content_box_content_div_p">
                  <span style={{ color: "#f9e488", marginRight: "20px" }}>
                    <i class="bi bi-calendar3"></i>
                  </span>
                  November 15, 2019
                </p>
              </div>
            </Link>
          </div>
          <div
            className="News_content_box"
            ref={(el) => (expertiseRef.current[0] = el)}
          >
            <div className="News_content_box_img_div">
              <img src={prnov} alt={prnov} />
            </div>
            <Link
              to="https://www.prunderground.com/green-crete-can-help-construction-industry-move-towards-sustainability-himansh-verma/00171952/"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <div className="News_content_box_content_div">
                <h3 className="News_content_box_content_div_h3">
                  Green Crete Can Help Construction Industry Move Towards
                  Sustainability: Himansh Verma
                </h3>
                <p className="News_content_box_content_div_p">
                  Navrattan Green Cement Industries Pvt. Ltd. (NGCIPL) is a
                  venture of Navrattan Group, a business group involved in
                  sustainable green technologies. The company is soon launching
                  the Navrattan Green Crete in the world markets. Himansh Verma
                  Chairman of the Group said, “Green development isn’t a typical
                  term among homebuyers; be that as it may, it is a dynamic idea
                  in private just as a business area.
                </p>
                <p className="News_content_box_content_div_p">
                  <span style={{ color: "#f9e488", marginRight: "20px" }}>
                    <i class="bi bi-calendar3"></i>
                  </span>
                  November 15, 2019
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;

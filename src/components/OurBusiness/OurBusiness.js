import React, { useRef, useEffect } from "react";
import "./OurBusiness.css";
import image from "../../Assets/navrattan-companies.jpg";
import img from "../../Assets/latestnew1.jpg";
import img2 from "../../Assets/latestnew2.jpg";
import img3 from "../../Assets/latestnew3.jpg";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OurBusiness = () => {
  const latestPostsRef = useRef([]);
  const imageRef = useRef(null);

  useEffect(() => {
    // Animate the latest posts
    latestPostsRef.current.forEach((post, index) => {
      gsap.fromTo(
        post,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.2, // Stagger the animation
          scrollTrigger: {
            trigger: post,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Animate the main image
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div className="overBusiness_main_div">
      <div className="overBusiness_main_left">
        <h3 className="overBusiness_main_left_h3">LATEST POSTS</h3>
        <div className="overBusiness_main_left_line"></div>
        <div
          className="overBusiness_main_left_content_box"
          ref={(el) => (latestPostsRef.current[0] = el)}
        >
          <div className="overBusiness_main_left_content_box_img_div">
            <img
              className="overBusiness_main_left_content_box_img_div_img"
              src={img}
              alt="Composite E-Bus"
            />
          </div>
          <div className="overBusiness_main_left_content_box_right">
            <Link
              target="_blank"
              to="https://www.behance.net/gallery/83938999/Composite-E-Bus-by-Navrattan-Holdings-Ltd"
              className="overBusiness_main_left_content_box_h3"
            >
              Composite E-Bus by Navrattan Holdings Ltd.
            </Link>
            <span className="overBusiness_main_left_content_box_right_span">
              <span style={{ marginRight: "20px" }}>
                <i className="bi bi-calendar3"></i>
              </span>
              August, 8th 2019
            </span>
          </div>
        </div>
        <div
          className="overBusiness_main_left_content_box"
          ref={(el) => (latestPostsRef.current[1] = el)}
        >
          <div className="overBusiness_main_left_content_box_img_div">
            <img
              className="overBusiness_main_left_content_box_img_div_img"
              src={img2}
              alt="How to Save Depleting Resources"
            />
          </div>
          <div className="overBusiness_main_left_content_box_right">
            <Link
              target="_blank"
              to="https://medium.com/@shefali.singh210/how-to-save-depleting-resources-fd1d7fb575cf"
              className="overBusiness_main_left_content_box_h3"
            >
              How to Save Depleting Resources
            </Link>
            <span className="overBusiness_main_left_content_box_right_span">
              <span style={{ marginRight: "20px" }}>
                <i className="bi bi-calendar3"></i>
              </span>
              July, 25th 2019
            </span>
          </div>
        </div>
        <div
          className="overBusiness_main_left_content_box"
          ref={(el) => (latestPostsRef.current[2] = el)}
        >
          <div className="overBusiness_main_left_content_box_img_div">
            <img
              className="overBusiness_main_left_content_box_img_div_img"
              src={img3}
              alt="Navrattan Holdings Limited"
            />
          </div>
          <div className="overBusiness_main_left_content_box_right">
            <Link
              target="_blank"
              to="https://www.slideshare.net/slideshow/navrattan-holdings-limited/154892631"
              className="overBusiness_main_left_content_box_h3"
            >
              Navrattan Holdings Limited
            </Link>
            <span className="overBusiness_main_left_content_box_right_span">
              <span style={{ marginRight: "20px" }}>
                <i className="bi bi-calendar3"></i>
              </span>
              July, 11th 2019
            </span>
          </div>
        </div>
      </div>
      <div className="overBusiness_main_right">
        <img
          className="overBusiness_main_right_img"
          src={image}
          alt="Navrattan Companies"
          ref={imageRef}
        />
      </div>
    </div>
  );
};

export default OurBusiness;

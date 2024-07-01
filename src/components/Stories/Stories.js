import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Stories.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="nextArrow" onClick={onClick}>
      <i className="bi bi-chevron-right"></i>
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="prevArrow" onClick={onClick}>
      <i className="bi bi-chevron-left"></i>
    </div>
  );
};

const Stories = ({ onWhoWeAreClick, onHowWeClick, onOurExpertiseClick }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const cardRefs = useRef([]);
  cardRefs.current = [];

  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: card,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div className="col-md-12 Stories_div">
      <div className="StoriesSlider_div">
        <Slider {...settings}>
          <div
            className="Stories_card_1"
            ref={addToRefs}
            onClick={onWhoWeAreClick}
          >
            <div className="Stories_content_div">
              <span className="Stories_content_div_span">WHO WE ARE</span>
              <Link className="stories_link">Explore</Link>
            </div>
          </div>
          <div
            className="Stories_card_2"
            ref={addToRefs}
            onClick={onHowWeClick}
          >
            <div className="Stories_content_div">
              <span className="Stories_content_div_span">HOW WE FUNCTION</span>
              <Link className="stories_link">Explore</Link>
            </div>
          </div>
          <div
            className="Stories_card_3"
            ref={addToRefs}
            onClick={onOurExpertiseClick}
          >
            <div className="Stories_content_div">
              <span className="Stories_content_div_span">OUR EXPERTISE</span>
              <Link className="stories_link">Explore</Link>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Stories;

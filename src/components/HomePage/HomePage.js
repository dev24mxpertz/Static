import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import "./HomePage.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image from "../../Assets/homepagetab1.avif";
import image2 from "../../Assets/homepagetab2.avif";
import image3 from "../../Assets/homepagetab3.avif";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    pauseOnHover: false, // Continue autoplay on hover
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
// navrattanholdings_static;
  const slideRefs = useRef([]);
  slideRefs.current = [];

  const addToRefs = (el) => {
    if (el && !slideRefs.current.includes(el)) {
      slideRefs.current.push(el);
    }
  };

  useEffect(() => {
    slideRefs.current.forEach((slide, index) => {
      const [leftPara, centerPara, rightPara] = slide.children;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: slide,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        leftPara,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 }
      )
        .fromTo(
          centerPara,
          { opacity: 0 },
          { opacity: 1, duration: 1.2 },
          "-=0.5"
        )
        .fromTo(
          rightPara,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 2 },
          "-=0.5"
        );
    });
  }, []);

  return (
    <div className="HomePage_main_div">
      <Slider {...settings}>
        <div className="slide1home_content_div" ref={addToRefs}>
          <img
            className="slide1home_content_div_img"
            src={image}
            alt="Slide 1"
          />
          <div className="slide1_content_box">
            <h3 className="slide1_content_box_h3">Welcome To Navrattan.</h3>
            <h3 className="slide1_content_box_h3">HOLDING LTD.</h3>
            <span className="slide1_content_box_p">
              The Science & Technology venture of Navrattan Group
            </span>
            <span className="slide1_content_box_span">
              Navrattan Holdings Ltd is here to develop some of the best
              technological innovations in the fields of alternative energy,
              construction, infrastructure, power, science & technology,
              medical, agriculture, and transportation.
            </span>
          </div>
        </div>
        <div className="slide1home_content_div" ref={addToRefs}>
          <img
            className="slide1home_content_div_img2"
            src={image2}
            alt="Slide 2"
          />
          <div className="slide2_content_box">
            <h3 className="slide2_content_box_h3">
              Business Success via high-performance Patent
            </h3>
            <span className="slide2_content_box_span">
              Navrattan Holdings Ltd is in the business of healthcare,
              agriculture, construction, alternative energy. We are leaders in
              science and technology and offer high quality products in all
              these sectors.
            </span>
          </div>
        </div>
        <div className="slide1home_content_div" ref={addToRefs}>
          <img
            className="slide1home_content_div_img3"
            src={image3}
            alt="Slide 3"
          />
          <div className="slide3_content_box">
            <h3 className="slide3_content_box_h3">Strengthening IPRs</h3>
            <span className="slide3_content_box_span">
              We have developed and acquired some of the world’s best
              sustainable technological innovations and hold the IPRs for their
              commercialization in India. We believe in building foundations for
              a ‘Greener’ tomorrow.
            </span>
          </div>
        </div>
      </Slider>
    </div>
  );
};

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

export default HomePage;

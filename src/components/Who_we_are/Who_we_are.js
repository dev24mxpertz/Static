import React, { useRef, useEffect } from "react";
import "swiper/css";
import "swiper/css/bundle";
import "./Who_we_are.css";
import Navbar from "../Navbar/Navbar";
import YouTube from "react-youtube";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules"; // Import Autoplay module

const Who_we_are = () => {
  const videoOptions = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  const slideRefs = useRef([]);
  slideRefs.current = [];

  const addToRefs = (el) => {
    if (el && !slideRefs.current.includes(el)) {
      slideRefs.current.push(el);
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

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
    <>
      {/* <Navbar /> */}
      <div className="Who_we_are_main">
        <div className="Who_we_are_main_left">
          <YouTube
            className="Who_we_are_main_left_video"
            videoId="mITuhUc53RM"
            opts={videoOptions}
          />
        </div>
        <div className="Who_we_are_main_right">
          <h3 className="Who_we_are_main_right_h3">WHO WE ARE</h3>
          <div className="Who_we_are_main_right_line"></div>
          <div className="Who_we_are_main_right_slider">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              pagination={{ clickable: true }}
              autoplay={{ delay: 2000 }} // Autoplay with 2 seconds delay
              loop={true} // Loop the slides
              modules={[Pagination, Navigation, Autoplay]} // Include Autoplay module
            >
              <SwiperSlide>
                <div
                  className="Who_we_are_main_right_slider_box"
                  ref={addToRefs}
                >
                  <span className="Who_we_are_main_right_slider_box_header">
                    Our history
                  </span>
                  <span className="Who_we_are_main_right_slider_box_span">
                    Navrattan Holdings Ltd is the Science & Technology venture
                    of Navrattan Group. Based out of Mumbai, India, the company
                    has over 60 innovations and patents to its name.
                  </span>
                  <span className="Who_we_are_main_right_slider_box_span">
                    The company is the result of undying effort and a clear
                    vision of Mr. Himansh Verma, the Founder & Chairman of the
                    business group. The company provides the best technological
                    advancements and innovations across various industries.
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="Who_we_are_main_right_slider_box"
                  ref={addToRefs}
                >
                  <span className="Who_we_are_main_right_slider_box_header">
                    Our philosophy
                  </span>
                  <span className="Who_we_are_main_right_slider_box_span">
                    Navrattan Holdings Ltd. is actively involved in developing,
                    acquiring, licensing and selling IPRs. At present, the
                    company owns over 60 patents of various revolutionary
                    innovative technologies from all over the world.{" "}
                  </span>
                  <span className="Who_we_are_main_right_slider_box_span">
                    The company has some of the best team of scientists and
                    researchers who research and develop quality innovative
                    solutions that deliver superior performance. Based out of
                    Mumbai, Navrattan Holdings Ltd. has state-of-the-art
                    research labs and modern technology facilities to ease
                    science and technology initiatives.
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="Who_we_are_main_right_slider_box"
                  ref={addToRefs}
                >
                  <span className="Who_we_are_main_right_slider_box_header">
                    Mission
                  </span>
                  <span className="Who_we_are_main_right_slider_box_span">
                    To develop and deliver superior value-added technologies for
                    businesses and society at large
                  </span>
                  <span className="Who_we_are_main_right_slider_box_header">
                    Vision
                  </span>
                  <span className="Who_we_are_main_right_slider_box_span">
                    To become one of the leading companies in providing the best
                    innovative technologies to every industrial sector.{" "}
                  </span>
                  <span className="Who_we_are_main_right_slider_box_header">
                    Values
                  </span>
                  <span className="Who_we_are_main_right_slider_box_span">
                    Taking fair and honest decisions and creating a unique
                    environment in which business can thrive{" "}
                  </span>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Who_we_are;

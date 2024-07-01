import Navbar from "../Navbar/Navbar";
import "./AffortableHousing.css";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import imag from "../../Assets/affortablehousing.avif";
import { Link, Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import InvesterPage from "../InvesterPage/InvesterPage";

const AffortableHousing = () => {
  const leftParaRef = useRef(null);
  // const centerParaRef = useRef(null);
  const rightParaRef = useRef(null);

  useEffect(() => {
    const leftPara = leftParaRef.current;
    // const centerPara = centerParaRef.current;
    const rightPara = rightParaRef.current;

    const t1 = gsap.timeline();

    t1.fromTo(
      leftPara,
      { y: "50%", opacity: 0 },
      {
        // top: 250,
        y:40,
        opacity: 1,
        duration: 1,
      }
    )
      // .fromTo(
      //   centerPara,
      //   { y: "50%", opacity: 0 },
      //   {
      //     y: 0,
      //     opacity: 1,
      //     duration: 1,
      //   }
      // )
      .fromTo(
        rightPara,
        { y: "100%", opacity: 0 },
        {
          y: -50,
          opacity: 1,
          duration: 1,
        }
      );
  }, []);

  return (
    <div className="Main_Layout_Container">
      <Navbar />
      <div className="AffortableHousing_main">
        <h4 className="AffortableHousing_main_h4" ref={leftParaRef}>
          Affordable Housing
        </h4>
        {/* <h2 ref={centerParaRef} className="AffortableHousing_main_h2">
          Precast Concrete Element Products
        </h2> */}
        <div ref={rightParaRef} className="scroller_circle">
          <span className="scroller_circle_span">
            <i class="bi bi-arrow-down"></i>
          </span>
        </div>
      </div>
      <div className="AffortableHousing_main_content">
        <div className="AffortableHousing_main_content_left_box">
          <img src={imag} alt={imag} />
        </div>
        <div className="AffortableHousing_main_content_right_box">
          <h4 className="AffortableHousing_main_content_right_box_h4">
            Affordable Housing
          </h4>
          <p className="AffortableHousing_main_content_right_box_p">
            Navrattan Group is first in india to introduce precast construction
            techniques for speedy construction. This new product development
            construction technique allows the production of flat precast
            concrete parts in the immediate vicinity of the construction site.
          </p>
          <p className="AffortableHousing_main_content_right_box_p">
            Navrattan group is emerging as the first infrastructure group
            considering the modern ways of development which looks for the
            advancements in the living standards of present living beings
            without affecting the surroundings. Recently the company has
            confirmed to build affordable accommodations for the lower income
            group and people living below the poverty line.
          </p>
          <button className="btn btn-outline-warning">KNOW MORE</button>
          <div className="AffortableHousing_main_content_right_box_line"></div>
          <div className="AffortableHousing_main_content_right_box_tag_div">
            <p className="AffortableHousing_main_content_right_box_tag">
              <span style={{ color: "#F9E488", fontSize: "16px" }}>
                Technology :{" "}
              </span>
              Precast Concrete Element Products
            </p>
            <p className="AffortableHousing_main_content_right_box_tag">
              <span style={{ color: "#F9E488", fontSize: "16px" }}>
                Company :{" "}
              </span>
              Navrattan Infra Pvt. Ltd.
            </p>
            <p className="AffortableHousing_main_content_right_box_tag">
              <span style={{ color: "#F9E488", fontSize: "16px" }}>
                Website :{" "}
              </span>
              www.navrattaninfra.com
            </p>
            <p className="AffortableHousing_main_content_right_box_tag">
              <span style={{ color: "#F9E488", fontSize: "16px" }}>
                Tags :{" "}
              </span>
              Affordable Housing, Precast Concrete Element Products, Plant
              Design, Construction India
            </p>
          </div>
        </div>
      </div>
      <div className="AffortableHousing_Discription_content_div">
        <div className="AffortableHousing_Discription_content_header">
          <Link
            className="AffortableHousing_Discription_content_header_link"
            to="/affortable_housing/Description"
          >
            Description
          </Link>
          <Link
            className="AffortableHousing_Discription_content_header_link"
            to="/affortable_housing/Affordable_housing"
          >
            Affordable Housing
          </Link>
          <Link
            className="AffortableHousing_Discription_content_header_link"
            to="/affortable_housing/benefits"
          >
            Benefits
          </Link>
        </div>
        <div className="AffortableHousing_Discription_content_outlet_div">
          <Outlet />
        </div>
        <InvesterPage/>
        <Footer />
      </div>
    </div>
  );
};

export default AffortableHousing;

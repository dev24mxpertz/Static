// import React from "react";
// import "./Overview.css";

// const Overview = () => {
//   return (
//     <div className="overview_main_div">
//       <h3 className="overview_main_h3">INNOVATING THE FUTURE</h3>
//       <div className="overview_main_line"></div>
//       <p className="overview_main_p">
//         Navrattan Holdings Ltd. is the Research & Development hub of Navrattan
//         Group’s diverse businesses and verticals. The Company specializes in
//         solving complex problems by bringing together the fundamentals of
//         science with the pragmatism and application of engineering to create
//         groundbreaking innovations.
//       </p>
//       <div className="overview_content_div">
//         <div className="overview_content_div_outlet">
//           <div className="overview_content_div_outlet_upperdiv">
//             <span className="overview_content_div_outlet_upperdiv_span">
//               <i className="bi bi-balloon-heart"></i>
//             </span>
//             <h5 className="overview_content_div_outlet_upperdiv_h5">
//               Alternative Energy
//             </h5>
//           </div>
//           <div className="overview_content_div_outlet_lower">
//             <span className="overview_content_div_outlet_lower_span">
//               <i className="bi bi-balloon-heart"></i>
//             </span>
//             <h5 className="overview_content_div_outlet_lower_h5">
//               Alternative Energy
//             </h5>
//             <div className="overview_content_div_outlet_lower_line"></div>
//             <p className="overview_content_div_outlet_lower_p">
//               We believe in fostering such innovative technologies that help to
//               substantially reduce our carbon footprint.
//             </p>
//           </div>
//         </div>
//         {/* ----------------------------------------------------------------------- */}
//         <div className="overview_content_div_outlet">
//           <div className="overview_content_div_outlet_upperdiv">
//             <span className="overview_content_div_outlet_upperdiv_span">
//               <i className="bi bi-balloon-heart"></i>
//             </span>
//             <h5 className="overview_content_div_outlet_upperdiv_h5">
//               Alternative Energy
//             </h5>
//           </div>
//           <div className="overview_content_div_outlet_lower">
//             <span className="overview_content_div_outlet_lower_span">
//               <i className="bi bi-balloon-heart"></i>
//             </span>
//             <h5 className="overview_content_div_outlet_lower_h5">
//               Alternative Energy
//             </h5>
//             <div className="overview_content_div_outlet_lower_line"></div>
//             <p className="overview_content_div_outlet_lower_p">
//               We believe in fostering such innovative technologies that help to
//               substantially reduce our carbon footprint.
//             </p>
//           </div>
//         </div>
//         {/* ----------------------------------------------------------------------- */}
//         <div className="overview_content_div_outlet">
//           <div className="overview_content_div_outlet_upperdiv">
//             <span className="overview_content_div_outlet_upperdiv_span">
//               <i className="bi bi-balloon-heart"></i>
//             </span>
//             <h5 className="overview_content_div_outlet_upperdiv_h5">
//               Alternative Energy
//             </h5>
//           </div>
//           <div className="overview_content_div_outlet_lower">
//             <span className="overview_content_div_outlet_lower_span">
//               <i className="bi bi-balloon-heart"></i>
//             </span>
//             <h5 className="overview_content_div_outlet_lower_h5">
//               Alternative Energy
//             </h5>
//             <div className="overview_content_div_outlet_lower_line"></div>
//             <p className="overview_content_div_outlet_lower_p">
//               We believe in fostering such innovative technologies that help to
//               substantially reduce our carbon footprint.
//             </p>
//           </div>
//         </div>
//         {/* -------------------------------------------------------------------------------- */}
//         <div className="overview_content_div_outlet">
//           <div className="overview_content_div_outlet_upperdiv">
//             <span className="overview_content_div_outlet_upperdiv_span">
//               <i className="bi bi-balloon-heart"></i>
//             </span>
//             <h5 className="overview_content_div_outlet_upperdiv_h5">
//               Alternative Energy
//             </h5>
//           </div>
//           <div className="overview_content_div_outlet_lower">
//             <span className="overview_content_div_outlet_lower_span">
//               <i className="bi bi-balloon-heart"></i>
//             </span>
//             <h5 className="overview_content_div_outlet_lower_h5">
//               Alternative Energy
//             </h5>
//             <div className="overview_content_div_outlet_lower_line"></div>
//             <p className="overview_content_div_outlet_lower_p">
//               We believe in fostering such innovative technologies that help to
//               substantially reduce our carbon footprint.
//             </p>
//           </div>
//         </div>
//         {/* ----------------------------------------------------------------------------- */}
//       </div>
//     </div>
//   );
// };

// export default Overview;


import React, { useRef, useEffect } from "react";
import "./Overview.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Overview = () => {
  const overviewRef = useRef();
  const contentRefs = useRef([]);
  contentRefs.current = [];

  const addToRefs = (el) => {
    if (el && !contentRefs.current.includes(el)) {
      contentRefs.current.push(el);
    }
  };

  useEffect(() => {
    gsap.fromTo(
      overviewRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: overviewRef.current,
          start: "top 95%",
          toggleActions: "play none none reverse",
        },
      }
    );

    contentRefs.current.forEach((content, index) => {
      gsap.fromTo(
        content,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: content,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div className="overview_main_div" ref={overviewRef}>
      <h3 className="overview_main_h3">INNOVATING THE FUTURE</h3>
      <div className="overview_main_line"></div>
      <p className="overview_main_p">
        Navrattan Holdings Ltd. is the Research & Development hub of Navrattan
        Group’s diverse businesses and verticals. The Company specializes in
        solving complex problems by bringing together the fundamentals of
        science with the pragmatism and application of engineering to create
        groundbreaking innovations.
      </p>
      <div className="overview_content_div">
        <div className="overview_content_div_outlet" ref={addToRefs}>
          <div className="overview_content_div_outlet_upperdiv">
            <span className="overview_content_div_outlet_upperdiv_span">
              <i className="bi bi-balloon-heart"></i>
            </span>
            <h5 className="overview_content_div_outlet_upperdiv_h5">
              Alternative Energy
            </h5>
          </div>
          <div className="overview_content_div_outlet_lower">
            <span className="overview_content_div_outlet_lower_span">
              <i className="bi bi-balloon-heart"></i>
            </span>
            <h5 className="overview_content_div_outlet_lower_h5">
              Alternative Energy
            </h5>
            <div className="overview_content_div_outlet_lower_line"></div>
            <p className="overview_content_div_outlet_lower_p">
              We believe in fostering such innovative technologies that help to
              substantially reduce our carbon footprint.
            </p>
          </div>
        </div>
        {/* Repeat for other sections */}
        <div className="overview_content_div_outlet" ref={addToRefs}>
          <div className="overview_content_div_outlet_upperdiv">
            <span className="overview_content_div_outlet_upperdiv_span">
              <i class="bi bi-magic"></i>
            </span>
            <h5 className="overview_content_div_outlet_upperdiv_h5">
              Construction
            </h5>
          </div>
          <div className="overview_content_div_outlet_lower">
            <span className="overview_content_div_outlet_lower_span">
              <i class="bi bi-magic"></i>
            </span>
            <h5 className="overview_content_div_outlet_lower_h5">
              Construction
            </h5>
            <div className="overview_content_div_outlet_lower_line"></div>
            <p className="overview_content_div_outlet_lower_p">
              ‘Going Green’ is our mission & we are dedicated to bringing such
              construction materials that are Eco-friendly and help reduce
              carbon emission.
            </p>
          </div>
        </div>
        <div className="overview_content_div_outlet" ref={addToRefs}>
          <div className="overview_content_div_outlet_upperdiv">
            <span className="overview_content_div_outlet_upperdiv_span">
              <i class="bi bi-code-slash"></i>
            </span>
            <h5 className="overview_content_div_outlet_upperdiv_h5">Medical</h5>
          </div>
          <div className="overview_content_div_outlet_lower">
            <span className="overview_content_div_outlet_lower_span">
              <i class="bi bi-code-slash"></i>
            </span>
            <h5 className="overview_content_div_outlet_lower_h5">Medical</h5>
            <div className="overview_content_div_outlet_lower_line"></div>
            <p className="overview_content_div_outlet_lower_p">
              Our goal is to help improve, and prolong life by creating
              futuristic and advanced healthcare technologies. We are dedicated
              to developing medical technologies.
            </p>
          </div>
        </div>
        <div className="overview_content_div_outlet" ref={addToRefs}>
          <div className="overview_content_div_outlet_upperdiv">
            <span className="overview_content_div_outlet_upperdiv_span">
              <i class="bi bi-send-fill"></i>
            </span>
            <h5 className="overview_content_div_outlet_upperdiv_h5">
              Agriculture
            </h5>
          </div>
          <div className="overview_content_div_outlet_lower">
            <span className="overview_content_div_outlet_lower_span">
              <i class="bi bi-send-fill"></i>
            </span>
            <h5 className="overview_content_div_outlet_lower_h5">
              Agriculture
            </h5>
            <div className="overview_content_div_outlet_lower_line"></div>
            <p className="overview_content_div_outlet_lower_p">
              We are determined to develop and innovate farm mechanization and
              technology. We firmly believe that agricultural growth is a
              significant step towards economic development and transformation
              of a country.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;

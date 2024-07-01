// import React, { useRef, useEffect } from "react";
// import "./Content1.css";
// import gsap from "gsap";

// const Content1 = () => {
//   const overlayRef = useRef(null);

//   useEffect(() => {
//     // Animating the overlay
//     gsap.fromTo(
//       overlayRef.current,
//       { opacity: 0, y: 20 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 1,
//       }
//     );
//   }, []);

//   return (
//     // <div className="Content1_main">
//     //   <div className="Content1_main_overlay" ref={overlayRef}>
//     //     <h3 className="Content1_main_overlay_h3">Follow us on Twitter</h3>
//     //     <div className="Content1_main_overlay_circle">
//     //       <i className="bi bi-twitter-x"></i>
//     //     </div>
//     //   </div>
//     // </div>
//     <div className="wrapper_outer">
//       <div className="wrapper">
//         <div className="parallax_section">
//           <div className="parllax_bg">
//             <h2>Follow us on Twitter</h2>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Content1;


import React, { useRef, useEffect } from "react";
import "./Content1.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Content1 = () => {
  const overlayRef = useRef(null);

  useEffect(() => {
    // Set up the ScrollTrigger animation
    gsap.fromTo(
      overlayRef.current,
      { y: "100%" },
      {
        y: "0%",
        ease: "none",
        scrollTrigger: {
          trigger: overlayRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="wrapper_outer">
      <div className="parallax_section">
        <div className="parallax_bg"></div>
        <div className="overlay">
          <h2>Follow us on Twitter</h2>
          <div className="circle_twitter">
            <i class="bi bi-twitter-x"></i> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content1;

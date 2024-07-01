import React, { useState } from "react";
import "./Carrier.css";

import Navbar from "../Navbar/Navbar";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import imag from "../../Assets/overview.jpg";
import Footer from "../Footer/Footer";
import Navrattanfreepower from "../../Assets/Navrattan-free-power.gif.png";
import NavrattanCement from "../../Assets/Navrattan-Cement.png";
import Green from "../../Assets/green.png";
import usaicon from "../../Assets/usa-icon.png";
import nscience from "../../Assets/nscience.png";
import navratninfra from "../../Assets/navratninfra.png";
import { Link } from "react-router-dom";

const Carrier = () => {
  const [information, setinformation] = useState(false);
  const [Corporate, setCorporate] = useState(false);
  const [Employee, setEmployee] = useState(false);
  const [Close, setClose] = useState(false);

  const leftParaRef = useRef(null);
  const centerParaRef = useRef(null);
  const rightParaRef = useRef(null);

  useEffect(() => {
    const leftPara = leftParaRef.current;
    const centerPara = centerParaRef.current;
    const rightPara = rightParaRef.current;

    const t1 = gsap.timeline();

    t1.fromTo(
      leftPara,
      { y: "50%", opacity: 0 },
      {
        // top: 250,
        y: 40,
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
        { y: "50%", opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
        }
      );
  }, []);

  return (
    <div className=".Main_Layout_Container">
      <Navbar />
      <div className="Careers_main">
        <h4 className="Careers_main_h4" ref={leftParaRef}>
          Careers
        </h4>
        {/* <h2 ref={centerParaRef} className="Careers_main_h2">
          Precast Concrete Element Products
        </h2> */}
        <div ref={rightParaRef} className="scroller_circle">
          <span className="scroller_circle_span">
            <i class="bi bi-arrow-down"></i>
          </span>
        </div>
      </div>
      <div className="Careers_main_content">
        <div className="Careers_main_content_left_box">
          <form className="Careers_main_content_left_box_form">
            <h5>Apply Now</h5>
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Name"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <div class="input-group mb-3">
              <input
                type="email"
                class="form-control"
                placeholder="Email"
                aria-label="Email"
                aria-describedby="basic-addon1"
              />
            </div>
            <div class="input-group mb-3">
              <input
                type="number"
                class="form-control"
                placeholder="Phone"
                aria-label="Phone"
                aria-describedby="basic-addon1"
              />
            </div>
            <div class="input-group mb-3">
              <input
                type="number"
                class="form-control"
                placeholder="Age"
                aria-label="Age"
                aria-describedby="basic-addon1"
              />
              <input
                type="text"
                class="form-control"
                placeholder="City"
                aria-label="City"
                aria-describedby="basic-addon1"
              />
            </div>
            <div class="input-group mb-3">
              <input
                type="number"
                class="form-control"
                placeholder="Expected Salary"
                aria-label="Expected Salary"
                aria-describedby="basic-addon1"
              />
              <input
                type="number"
                class="form-control"
                placeholder="Experience"
                aria-label="Experience"
                aria-describedby="basic-addon1"
              />
            </div>
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Website"
                aria-label="Website"
                aria-describedby="basic-addon1"
              />
            </div>
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Other Details"
                aria-label="Other Details"
                aria-describedby="basic-addon1"
              />
            </div>
            <button type="submit" className="btn btn-outline-warning">Submit</button>
          </form>
        </div>
        <div className="Careers_main_content_right_box">
          <h4 className="Careers_main_content_right_box_h4">Careers</h4>
          <p className="Careers_main_content_right_box_p">
            Welcome to the world of opportunities. Navrattan Holding offers a
            wide range of career opportunities to join in the creation of
            technologies that change the world. Spread over Nine verticals
            Navrattan offers fast-paced environment with great work
            opportunities to grow professionally with job profiles ranging from
            technical to non-technical and administrative jobs.
          </p>
          <p
            onClick={() => setinformation(!information)}
            style={{ cursor: "pointer" }}
            className="Careers_main_content_right_box_h4"
          >
            <span style={{ color: "#f9e488", fontSize: "14px" }}>
              <i class="bi bi-chevron-right"></i>
            </span>{" "}
            Information
          </p>
          {information ? (
            <>
              <p className="Careers_main_content_right_box_p">
                Welcome to the world of opportunities. Navrattan Holding offers
                a wide range of career opportunities to join in the creation of
                technologies that change the world. Spread over Nine verticals
                Navrattan offers fast-paced environment with great work
                opportunities to grow professionally with job profiles ranging
                from technical to non-technical and administrative jobs.
              </p>
              <p className="Careers_main_content_right_box_p">
                Our focus is not only professional enrichment but also creating
                an eco system for nurturing long-term relationship with our
                members. We also provide the Training and Development facilities
                for our employees to grow their skills and learn new methods and
                technology.
              </p>
              <p className="Careers_main_content_right_box_p">
                Here we are looking for people who are thinkers and doers.
                People who are passionate, have the desired curiosity and
                conviction to do some conventional roles and play an important
                part in the growth of the organization
              </p>
              <p className="Careers_main_content_right_box_p">
                The best way to get in touch with us. Write to us at
                <Link
                  to="mailto:info@navrattanholding.com"
                  // target="_blank"
                  style={{ color: "#f9e488", marginLeft: "10px" }}
                >
                  info@navrattanholding.com
                </Link>
              </p>
            </>
          ) : null}
          <p
            onClick={() => setCorporate(!Corporate)}
            style={{ cursor: "pointer" }}
            className="Careers_main_content_right_box_h4"
          >
            <span style={{ color: "#f9e488", fontSize: "14px" }}>
              <i class="bi bi-chevron-right"></i>
            </span>{" "}
            Corporate Culture
          </p>
          {Corporate ? (
            <>
              <p className="Careers_main_content_right_box_p">
                At Navrattan Holdings We Embrace Cultural Diversity To Build
                Strong Teams In A Highly Conducive And Sustainable Environment.
              </p>
              <p className="Careers_main_content_right_box_p">
                Navrattan Holdings is one of the leading sustainable solutions
                company in India. When you work for Navrattan , you work for a
                company which really does have a commitment to treat colleagues
                with respect and to prioritize their safety.
              </p>
              <p className="Careers_main_content_right_box_p">
                We firmly believe in challenging the status quo, and constantly
                work to come out of our comfort zones and take to do things
                differently. We believe in offering our employees opportunities
                to develop within their capabilities, and believe in nurturing
                talent and promoting from within wherever possible.
              </p>
              <p className="Careers_main_content_right_box_p">
                The corporate culture at Navrattan empowers people to perform to
                the best of their abilities and provide a diverse range of
                exciting and challenging roles across our organization. It is
                because of our employee centered corporate culture that are
                contented employees have worked day and night to make Navrattan
                the leading Eco-friendly cement construction company in the
                country. It is by our collective efforts that we are able to
                offer high quality, innovative and sustainable materials which
                are then used to create homes, roads, hospitals, offices and
                much more.
              </p>
              <p className="Careers_main_content_right_box_p">
                Navrattan Holdings is committed to create a diverse environment
                and is proud to be an equal opportunity employer. We welcome
                applications from all suitably qualified candidates.
              </p>
            </>
          ) : null}
          <p
            onClick={() => setEmployee(!Employee)}
            style={{ cursor: "pointer" }}
            className="Careers_main_content_right_box_h4"
          >
            <span style={{ color: "#f9e488", fontSize: "14px" }}>
              <i class="bi bi-chevron-right"></i>
            </span>{" "}
            Employee Welfares
          </p>
          {Employee ? (
            <>
              <p className="Careers_main_content_right_box_p">
                Employee welfare receives prime attention at Navrattan Group. We
                have several schemes for general welfare of employees and their
                families. These cover education, healthcare, retirement
                benefits, loans and financial assistance and recreation
                facilities. Keeping in mind a strong talent pipeline, we hire
                talent with an eye to appreciate not just the immediate and
                tangible value in terms of salary and benefits but the perceived
                value that goes beyond mere numbers.
              </p>
              <p className="Careers_main_content_right_box_p">
                Educational facilities and special scholarship allowances are
                offered to the meritorious children of our employees. Liberal
                medical benefits are made available to employees and their
                family members by way of reimbursements towards normal medical
                treatment, domiciliary treatments and special sanctions for
                serious illness. In addition, there are regular health checkups,
                camps and programs.
              </p>
              <p className="Careers_main_content_right_box_p">
                Employees are eligible to apply for loans and financial
                assistance for various purposes such as purchase of assets,
                residential premises as well as a scheme that provides for
                supply of cement at subsidized rates to those building their own
                houses. When travelling out of India or to any other country,
                our employees are provided with fully furnished accommodations
                based on their entitlements.
              </p>
              <p
                style={{ fontStyle: "Bold" }}
                className="Careers_main_content_right_box_p"
              >
                We also take care of providing our employed with updated
                training programs to keep pace with the latest technologies and
                practices in the industry.
              </p>
            </>
          ) : null}
          <p
            onClick={() => setClose(!Close)}
            style={{ cursor: "pointer" }}
            className="Careers_main_content_right_box_h4"
          >
            <span style={{ color: "#f9e488", fontSize: "14px" }}>
              <i class="bi bi-chevron-right"></i>
            </span>{" "}
            Close Knit Teams
          </p>
          {Close ? (
            <>
              <p className="Careers_main_content_right_box_p">
                Behind the success of Navrattan Group is a team of highly
                motivated and dynamic employees working hard to take this
                organization to greater heights. People are the most valuable
                resource at Navrattan Group.
              </p>
              <p className="Careers_main_content_right_box_p">
                Decentralization is a core element at Navrattan Blue Crete
                Industries Pvt. Ltd. The group is made up of small units in
                which the performance of each employee matters. A quality
                distribution of authority brings responsibility with it where
                every employee is responsible for their work. The various teams
                at Navrattan work independently as well as in a big group. The
                employees are dedicated to achieve targets and contribute to the
                overall profitability of the organization.{" "}
              </p>
              <p className="Careers_main_content_right_box_p">
                The laboratories, production or the plant as a whole is run by
                close-knit teams where you will rapidly take on responsibilities
                and your initiatives can quickly be put into practice. The
                organizational culture at Navrattan Blue Crete Industries
                facilitates building social, cultural and professional bonds and
                enable a motivated and independent environment. Thereby,
                enhancing individual performance. This concept empowers
                employees to continuously improve performance and innovate.{" "}
              </p>
              <p
                style={{ fontStyle: "bold" }}
                className="Careers_main_content_right_box_p"
              >
                We firmly believe in encouraging a spirit of solidarity which
                helps create careers that are personally rewarding and
                professionally enriching.
              </p>
            </>
          ) : null}
          <button className="btn btn-outline-warning">Apply Now</button>
        </div>
      </div>
      <div className="Careers_Discription_content_div">
        <Footer />
      </div>
    </div>
  );
};

export default Carrier;

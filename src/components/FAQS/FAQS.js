import React, { useRef, useEffect } from "react";
import "./FAQS.css";
import Navbar from "../Navbar/Navbar";
import gsap from "gsap";
import Footer from "../Footer/Footer";
import FAQItem from "./FAQItem";
import InvesterPage from "../InvesterPage/InvesterPage";

const FAQS = () => {
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
        y: 40,
        opacity: 1,
        duration: 1,
      }
    )
      .fromTo(
        centerPara,
        { y: "50%", opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
        }
      )
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

  const faqs = [
    {
      question: "How does Tata Motors support me as an employee?",
      answer:
        "Tata Motors supports its employees through various initiatives such as training programs, career development opportunities, and a supportive work environment.",
    },
    {
      question: "How does Tata Motors support me as an employee?",
      answer:
        "Tata Motors supports its employees through various initiatives such as training programs, career development opportunities, and a supportive work environment.",
    },
    // Add more FAQ items here
  ];

  return (
    <div className="Main_Layout_Container">
      <Navbar />
      <div className="FAQS_main">
        <h4 className="FAQS_main_h4" ref={leftParaRef}>
          FAQS
        </h4>
        <h2 ref={centerParaRef} className="FAQS_main_h2">
          Frequently asked questions
        </h2>
        <div ref={rightParaRef} className="scroller_circle">
          <span className="scroller_circle_span">
            <i className="bi bi-arrow-down"></i>
          </span>
        </div>
      </div>
      <div className="FAQS_main_content">
        <div className="FAQS_main_content_right_box">
          <h5 className="FAQS_main_content_right_box_h5">
            Your pathway to joining our dynamic team
          </h5>
          <p className="FAQS_main_content_right_box_p">
            Have questions about joining our team? Our comprehensive FAQs
            address common inquiries about job applications, interview
            processes, benefits, and more. Find the answers you need to make an
            informed decision and take the next step in your career.
          </p>
        </div>
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
      <div className="FAQS_Discription_content_div">
        <InvesterPage/>
        <Footer />
      </div>
    </div>
  );
};

export default FAQS;

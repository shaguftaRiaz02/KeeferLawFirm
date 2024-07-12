import React, { useState } from "react";
import "./Keefer.css";
import AvoRatingLarge from "./images/avo_rating_large.gif";
import AvoRatingSmall from "./images/qqq.gif";
import RedBullet from "./images/bullet_red.gif";
import WhiteBullet from "./images/bullet_white.gif";
import facebook from "./images/fb_icon.gif";
// import FormBackground from "./images/form_bg.jpg";
import Google from "./images/google_icon.gif";
import Twitter from "./images/twitter_icon.gif";
import LinkedIn from "./images/linked_icon.gif";
import NationalCollegeSmall from "./images/national_college_small.gif";
import NationalCollegeLarge from "./images/national_college_large.gif";
import OrderIcon from "./images/order_icon.gif";
import PasteBoard from "./images/paste_board.gif";
import Pic1 from "./images/pic1.gif";
import Logo from "./images/logo.png";
import HeroImage from "./images/hero-img.gif";
import hr from "./images/lf_bt_hr_shadow.png";
import "./keeferResponsive.css";
import menuIcon from "./images/responsive_menu_icon.png";
const Keefer = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      {/* Logo Section */}
      <div className="logo-section">
        <div className="logo-img">
          <img src={Logo} alt="logo" className="logo" />
        </div>
        <div className="call-header">
          <h2>CALL OUR OFFICE NOW!</h2>
          <hr />
          <h1>540.433.6906</h1>
          <h4>Get Your Questions Answered Fast</h4>
        </div>
      </div>

      {/* Navbar */}
      <div className="navbar">
        <img
          src={menuIcon}
          alt="Menu Icon"
          className="menu-icon"
          onClick={toggleMenu}
        />
        <nav>
          <ul className={menuOpen ? "open" : ""}>
            <li className="home">HOME</li>
            <li>BIOGRAPHY</li>
            <li>BLOG</li>
            <li>AREAS WE SERVE</li>
            <li>LIBRARY</li>
            <li>CONTACT</li>
          </ul>
        </nav>
      </div>

      {/* Hero Section */}
      <div className="hero">
        <div className="hero-img">
          <img className="heroimg" src={HeroImage} alt="hero-img" />
        </div>
        <div className="hero-form">
          <div className="form-heading">
            <span>
              <h1>QUESTIONS?</h1>
            </span>
            <h2>
              Have a <span className="question">Question</span> About Your Case?
            </h2>
          </div>
          <div className="text">
            <p>
              Enter your information and get your questions answered quickly
            </p>
            and discreetly or call us at <b>540-433-6906</b>
          </div>
          <div className="form-inputs">
            <label htmlFor="name">
              Name : <input type="text" name="" id="" />
            </label>
            <label htmlFor="email">
              Email : <input type="email" name="" id="" />
            </label>
            <label htmlFor="phone">
              Phone : <input type="text" name="" id="" />
            </label>
            <textarea
              placeholder="Tell us about your case here...."
              rows={4}
              cols={70}
              defaultValue={""}
            />
          </div>
          <div className="form-end">
            <br />
            <div className="form-end-text1">
              <p>
                <i>100% Privacy Guaranteed</i>
              </p>
            </div>
            <button className="form-end-text2">
              <div>
                <span>
                  Ask Us About Your Case
                  <img src={WhiteBullet} alt="" />
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <div className="blog">
        {/* blog1 */}
        <div className="blog1">
          <h2>
            CHARGED WITH<span style={{ color: "rgb(147, 5, 5)" }}> DUI?</span>
          </h2>
          <h2 style={{ color: "rgb(147, 5, 5)" }}>FREE CASE EVALUATION</h2>
          <div className="blog1-content">
            <div className="blog1Text">
              <p>
                Being charged with DUI can be scary. Get the help you deserve.
              </p>
              <p>
                <br />
                Click here to let us know how we can help you with your case.
              </p>
            </div>
            <div className="blog1Image">
              <img src={PasteBoard} alt="" />
            </div>
          </div>
          <div className="blog1Footer">
            <div>
              <hr />
            </div>
            <div>
              <span>
                <button>
                  Click Here <img src={WhiteBullet} alt="" />
                </button>
              </span>
            </div>
          </div>
        </div>

        {/* blog2 */}
        <div className="blog2">
          <div className="blog2a">
            <div className="blog2aText">
              <h2>
                LAW <span style={{ color: "rgb(147, 5, 5)" }}>BLOG</span>
              </h2>
              <p>Learn more about Pakistan Traffic Laws.</p>
              <div className="blog2aFooter">
                <div>
                  <hr />
                </div>
                <div>
                  <span>
                    <button>
                      Click Here <img src={WhiteBullet} alt="" />
                    </button>
                  </span>
                </div>
              </div>
            </div>
            <div className="blog2aImage">
              <img src={Pic1} alt="" />
            </div>
          </div>

          <div className="blog2b">
            <div className="blog2bContent">
              <div className="blog2bText">
                <h2>
                  CASE<span style={{ color: "rgb(147, 5, 5)" }}> RESULTS</span>
                </h2>
                <p>
                  See how we help our clients.
                  <br />
                  Read our latest case results
                  <br />
                </p>
              </div>
              <div className="blog2bButton">
                <div>
                  <hr />
                </div>
                <button>
                  Click Here
                  <span>
                    <img src={WhiteBullet} alt="" />
                  </span>
                </button>
              </div>
            </div>
            <div className="blog2bImage">
              <img src={OrderIcon} alt="" />
            </div>
          </div>
        </div>

        {/* blog3 */}
        <div className="blog3">
          <div className="blog3a">
            <img src={AvoRatingSmall} alt="" />
            <img className="imgy" src={NationalCollegeSmall} alt="" />
          </div>
          <div className="blog3b">
            <h2>
              CERTIFICATES &amp;{" "}
              <span style={{ color: "rgb(147, 5, 5)" }}>
                <br />
                CREDENTIALS
              </span>
            </h2>
          </div>
          <div className="blog3c">
            <p>
              Keefer Law Firm has protected the
              <br /> rights of Virginians for over 30 years.
            </p>
          </div>
          <div className="blog3footer">
            <div>
              <hr />
            </div>
            <div>
              <span>
                <button>
                  LEARN MORE <img src={WhiteBullet} alt="" />
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="blogHR">
        {/* <img src={hr} alt="" /> */}
        <hr />
      </div>

      {/* Content Section */}
      <div className="content">
        <div className="content1">
          <div className="practiceAreas">
            <h2>
              PRACTICE <span style={{ color: "rgb(147, 5, 5)" }}> AREAS</span>
            </h2>
            <div className="p1">
              <h2>DUI &amp; DIWI</h2>
              <span>
                Learn More <img src={RedBullet} alt="" />
              </span>
            </div>
            <div className="p1">
              <h2>RECKLESS DRIVING</h2>
              <span>
                Learn More <img src={RedBullet} alt="" />
              </span>
            </div>
            <div className="p1">
              <h2>SPEEDING TICKETS</h2>
              <span>
                Learn More <img src={RedBullet} alt="" />
              </span>
            </div>
            <div className="p1 t">
              <h2>TRAFFIC VIOLATIONS</h2>
              <span>
                Learn More <img src={RedBullet} alt="" />
              </span>
            </div>
          </div>
          <div className="Footer">
            <div className="FooterText">
              <h2>
                LEARN<span style={{ color: "rgb(147, 5, 5)" }}> MORE </span>
                ABOUT
              </h2>
              <br />
              <br />
              <br />
              <div className="FooterLight">
                <ul>
                  <li>MENU</li>
                  <li>AREA</li>
                  <li>HERE</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="content2">
          <h1>Keefer Law Firm</h1>
          <br />
          <p>
            Welcome to Keefer Law Firm, where we prioritize your legal needs
            with expertise and discretion. Our dedicated team is here to assist
            you with a wide range of legal challenges, from DUI and traffic
            violations to comprehensive case evaluations. Whether you're seeking
            clarity on Virginia's traffic laws or need immediate legal counsel,
            we provide personalized solutions tailored to your circumstances.
            With over 30 years of defending Virginians' rights, we ensure your
            privacy and deliver results you can trust. Explore our practice
            areas, client testimonials, and valuable resources to discover how
            Keefer Law Firm can support you today.
           <br/> 
            <hr/>
           <br/> Discover how Keefer Law Firm
            combines decades of legal experience with a commitment to client
            privacy and satisfaction. Our firm specializes in DUI, reckless
            driving, speeding tickets, and other traffic violations, offering
            detailed insights and expert guidance. Whether you're facing a legal
            challenge or seeking comprehensive legal advice, our team is
            dedicated to providing clear answers and effective solutions.
            Navigate our site to explore our case results, certifications, and
            detailed practice areas. Contact us today to schedule a free
            consultation and learn how Keefer Law Firm can protect your rights
            and navigate legal complexities with integrity and expertise.
          </p>
        </div>

        {/* Content 3 */}
        <div className="content3">
          <li>
            <div className="blog3b">
              <h2>
                CLIENT{" "}
                <span style={{ color: "rgb(147, 5, 5)" }}>
                  <br />
                  TESTIMONIALS
                </span>
              </h2>
            </div>
            <div className="blog3c">
              <p>
                Read what others say
                <br />
                about Keefer Law Firm
              </p>
            </div>
            <div className="blog3footer">
              <div>
                <hr />
              </div>
              <div>
                <span>
                  <button>
                    CLICK HERE <img src={WhiteBullet} alt="" />
                  </button>
                </span>
              </div>
            </div>
          </li>
          <li>
            <div className="blog3b">
              <h2>
                DOWNLOAD{" "}
                <span style={{ color: "rgb(147, 5, 5)" }}>
                  <br />
                  FREE
                </span>{" "}
                REPORTS
              </h2>
            </div>
            <div className="blog3c">
              <p>
                Discover the truth about
                <br />
                Virginia Law.
              </p>
            </div>
            <div className="blog3footer">
              <div>
                <hr />
              </div>
              <div>
                <span>
                  <button>
                    CLICK HERE <img src={WhiteBullet} alt="" />
                  </button>
                </span>
              </div>
            </div>
          </li>
          <li>
            <div className="blog3b">
              <h2>
                CONTACT<span style={{ color: "rgb(147, 5, 5)" }}> OUR</span>
                <br />
                OFFICES
              </h2>
            </div>
            <div className="blog3c">
              <p>
                Get your questions
                <br /> answered right now.
              </p>
            </div>
            <div className="blog3footer">
              <div>
                <hr />
              </div>
              <div>
                <span>
                  <button>
                    CLICK HERE <img src={WhiteBullet} alt="" />
                  </button>
                </span>
              </div>
            </div>
          </li>
          {/* images */}
          <div className="content3-images">
            <div className="img1">
              <img src={AvoRatingLarge} alt="" />
            </div>
            <div className="img2">
              <img src={NationalCollegeLarge} alt="" />
            </div>
          </div>
          {/* links */}
          <div className="content3-links">
            <div className="follow">
              <h2>
                FOLLOW <span style={{ color: "rgb(147, 5, 5)" }}> US</span>
              </h2>
            </div>
            <div className="hr">
              <img src={hr} alt="" />
            </div>
            <div className="social-icons">
              <div className="fb">
                <img src={facebook} alt="" />
              </div>
              <div className="google">
                <img src={Google} alt="" />
              </div>
              <div className="twitter">
                <img src={Twitter} alt="" />
              </div>
              <div className="linkedin">
                <img src={LinkedIn} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Keefer;

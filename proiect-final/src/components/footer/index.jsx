import React, { useState, useEffect } from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import Button03 from "../button/Button03";

import logo from "../../assets/images/logo/logo-footer.png";

function Footer(props) {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <footer className="footer">
      <div className="action-box">
        <div className="tf-container">
          <div className="row">
            <div className="col-md-12">
              <div className="action-box-inner">
                <h2 className="title">JOIN US</h2>
                <p className="content">FOLLOW ME FOR MORE</p>
                <div className="group-btn">
                  <Button03 title="SEND ME A MESSAGE" path="/contact" />

                  <Button title="COLLECTION" path="/collection" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-inner">
        <div className="tf-container">
          <div className="row">
            <div className="col-xl-4 col-lg-3 col-md-12">
              <div className="widget widget-infor">
                <div className="logo">
                  <img id="logo_footer" src={logo} alt="Binabox" />
                </div>
                <p className="content">
                  Follow me on INSTAGRAM, TIKTOK and YOUTUBE!
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-12">
              <div className="widget widget-menu">
                <div className="menu menu-1">
                  <h6 className="widget-title">SUBSCRIBE</h6>
                  <ul>
                    <li>
                      <Link to="/">HOME</Link>
                    </li>
                    <li>
                      <Link to="/about-v1">ABOUT</Link>
                    </li>
                    <li>
                      <Link to="/roadmap-v1">SHOP</Link>
                    </li>
                    <li>
                      <Link to="/our-team">MUSIC</Link>
                    </li>
                    <li>
                      <Link to="/faq-v1">FAQs</Link>
                    </li>
                  </ul>
                </div>
                <div className="menu menu-2">
                  <h6 className="widget-title">COMPANY</h6>
                  <ul>
                    <li>
                      <Link to="/our-team">BAND</Link>
                    </li>
                    <li>
                      <Link to="/testimonial">COMMUNITY</Link>
                    </li>
                    <li>
                      <Link to="/blog-details">TV SHOWS</Link>
                    </li>
                    <li>
                      <Link to="/comming-soon">COMMING SOON</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5 col-md-12">
              <div className="widget widget-subcribe">
                <h6 className="widget-title">SUBSCRIBE</h6>
                <form action="#" id="subscribe-form">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required=""
                    id="subscribe-email"
                  />
                  <button
                    className="tf-button"
                    type="submit"
                    id="subscribe-button"
                  >
                    SUBSCRIBE
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-inner">
        <div className="tf-container">
          <div className="row">
            <div className="col-md-12">
              <div className="bottom">
                <p className="copy-right">
                  Alessandro Danescu Official 2022 - ALL rights reserved
                </p>

                <ul className="social-item">
                  <li>
                    <Link to="#">
                      <i className="fab fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fab fa-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fab fa-telegram-plane"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fab fa-youtube"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="icon-fl-tik-tok-2"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="icon-fl-vt"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isVisible && <Link onClick={scrollToTop} to="#" id="scroll-top"></Link>}
    </footer>
  );
}

export default Footer;

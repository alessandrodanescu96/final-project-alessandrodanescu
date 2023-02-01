import React from "react";
import { Link } from "react-router-dom";
import PageTitle from "../components/pagetitle/PageTitle";
import Team2 from "../components/team/Team2";
import Partner from "../components/partner/Partner";
import Footer from "../components/footer";
import dataTeam from "../assets/fake-data/data-team";
import dataPartner from "../assets/fake-data/data-partner";

import img from "../assets/images/team/team-details.jpg";
import icon1 from "../assets/images/svg/email-2.svg";
import icon2 from "../assets/images/svg/phone-2.svg";

function OurTeam(props) {
  return (
    <div className="team-page">
      <PageTitle title="MY TEAM" />

      <section className="tf-section tf-team-detail">
        <div className="tf-container">
          <div className="row ">
            <div className="col-md-6">
              <div className="swiper-container team-details ">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="slider-item">
                      <img src={img} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="content-detail">
                <p className="position">SINGER/SONGWRITER/MAIN LEAD</p>
                <h2 className="name">Alessandro Danescu</h2>
                <h3 className="title">About Me</h3>
                <p className="description">
                  Hello. My name is Alessandro Danescu and I am the main lead of
                  this amazing and beautiful band, composed by: Remus, Gabi, Teo
                  and Calin. We started to colaborate after my participation in
                  The Voice of Romania 2019. We started to create a very unique
                  album, a mixture between my pop-jazz voice and pop rock
                  instrumental.
                </p>
                <h3 className="title mb14">Contact</h3>
                <div className="contact-infor">
                  <div className="contact-infor-box">
                    <span className="icon">
                      <img src={icon1} alt="" />
                    </span>
                    <p>team@myamazingband.com</p>
                  </div>
                  <div className="contact-infor-box">
                    <span className="icon">
                      <img src={icon2} alt="" />
                    </span>
                    <p>+40 721 123 456</p>
                  </div>
                </div>
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
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fab fa-youtube"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Team2 data={dataTeam} />

      <Partner data={dataPartner} />

      <Footer />
    </div>
  );
}

export default OurTeam;

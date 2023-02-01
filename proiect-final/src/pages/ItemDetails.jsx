import React from "react";
import PageTitle from "../components/pagetitle/PageTitle";

import Footer from "../components/footer";
import Collection03 from "../components/collection/Collection03";
import dataCollection from "../assets/fake-data/data-collection";
import { Link } from "react-router-dom";

import img from "../assets/images/item-details.jpg"; //690x690 pixeli

function ItemDetails(props) {
  return (
    <div className="page-collection">
      <PageTitle title="BUY OUR ALBUMS" />

      <section className=" tf-item-detail ">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="tf-item-detail-image">
                <img src={img} alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="tf-item-detail-inner">
                <h2 className="title">ONE DAY</h2>
                <p className="des">Buy our First Album.</p>
                <div className="infor-item-wrap">
                  <div className="infor-item-box">
                    <div className="category">Gender: </div>
                    <h4 className="name">POP-ROCK ELECTRO</h4>
                  </div>
                  <div className="infor-item-box">
                    <div className="category">RELEASE DATE</div>
                    <h4 className="name">2023</h4>
                  </div>
                  <div className="infor-item-box">
                    <div className="category">PRODUCTION</div>
                    <h4 className="name">Mix & Master</h4>
                  </div>
                  <div className="infor-item-box">
                    <div className="category">SONGS</div>
                    <h4 className="name">10 + 2 Deluxe Versions</h4>
                  </div>
                  <div className="infor-item-box">
                    <div className="category">Description</div>
                    <h4 className="name">1st Release</h4>
                  </div>
                  <div className="infor-item-box">
                    <div className="category">Special</div>
                    <h4 className="name">1 + 1 Bonus Songs</h4>
                  </div>
                </div>
                <div className="price">
                  <span className="heading">PRICE:</span>
                  <span>12.99$</span>
                </div>
                <div className="group-btn">
                  <Link to="#" className="tf-button opensea">
                    <i className="icon-fl-iTunes"></i> BUY ON iTUNES
                  </Link>
                  <div className="group-2">
                    <Link to="#" className="tf-button style-2 ">
                      <i className="icon-fl-vt"></i> JOIN DISCORD
                    </Link>
                    <Link to="#" className="tf-button style-2 twitter">
                      <i className="fab fa-youtube"></i> JOIN YOUTUBE
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Collection03 data={dataCollection} />

      <Footer />
    </div>
  );
}

export default ItemDetails;

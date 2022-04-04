import React from "react";
import laptop from "../../images/macbook.jpg";
import HomeReviews from "../HomeReviews/HomeReviews";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="product-container">
        <div className="product-details">
          <h2 style={{ color: "whitesmoke", fontStyle: "italic" }}>
            Laptop zone
          </h2>
          <h2>Buy your next Laptop</h2>
          <h2>Get your best product</h2>
          <p>
            We are importing products from USA,UK,GERMANY.So you can trust us
            and our product and buy from us
          </p>
          <button>Show demo</button>
        </div>
        <div className="img">
          <img src={laptop} alt="" />
        </div>
      </div>
      <div>
        <HomeReviews></HomeReviews>
      </div>
    </>
  );
};

export default Home;

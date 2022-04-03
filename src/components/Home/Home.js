import React from "react";
import laptop from "../../images/macbook.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div className="product-container">
      <div className="product-details">
        <h2 style={{ color: "whitesmoke", fontStyle: "italic" }}>
          Laptop zone
        </h2>
        <h2>Buy your next Laptop</h2>
        <h2>Get your best product</h2>
        <button>Show demo</button>
      </div>
      <div className="img">
        <img src={laptop} alt="" />
      </div>
    </div>
  );
};

export default Home;

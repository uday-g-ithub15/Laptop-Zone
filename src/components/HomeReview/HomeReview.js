import React from "react";
import "./HomeReview.css";
const HomeReview = ({ user }) => {
  const { name, picture, comment, rate } = user;
  return (
    <div className="single-home-review-container">
      <div className="img">
        <img src={picture} alt="" />
      </div>
      <div className="single-home-review-details">
        <h4>Name : {name}</h4>
        <p>Comment : {comment}</p>
        <p>Ratings : {rate}</p>
      </div>
    </div>
  );
};

export default HomeReview;

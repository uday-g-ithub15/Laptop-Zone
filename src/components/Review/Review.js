import React from "react";
import "./Review.css";

const Review = ({ user }) => {
  const { name, picture, comment, rate } = user;
  return (
    <div className="review">
      <img src={picture} alt="" />
      <h4>Name : {name}</h4>
      <p>Comment : {comment}</p>
      <p>Ratings : {rate}</p>
    </div>
  );
};

export default Review;

import React from "react";
import "./HomeReview.css";
const HomeReview = ({ user }) => {
  const { name, picture, comment, rate } = user;
  console.log(user);
  return (
    <div className="single-home-review">
      <img src={picture} alt="" />
      <h4>Name : {name}</h4>
      <p>Comment : {comment}</p>
      <p>Ratings : {rate}</p>
    </div>
  );
};

export default HomeReview;

import React from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../hooks/useUser";
import HomeReview from "../HomeReview/HomeReview";
import "./HomeReviews.css";

const HomeReviews = () => {
  const [users] = useUser();
  const displayUser = users.slice(0, 3);
  let navigate = useNavigate();
  const showAllReviews = () => {
    navigate("/reviews");
  };

  return (
    <>
      <h2 style={{ textAlign: "center" }}>Reviews ({displayUser.length}) </h2>
      <div className="home-page-review">
        {displayUser.slice(0, 3).map((user) => (
          <HomeReview key={user.id} user={user}></HomeReview>
        ))}
      </div>
      <button onClick={showAllReviews} className="all-review-btn">
        Show all reviews
      </button>
    </>
  );
};

export default HomeReviews;

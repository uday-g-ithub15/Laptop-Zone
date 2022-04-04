import React from "react";
import { useUser } from "../../hooks/useUser";
import Review from "../Review/Review";
import "./Reviews.css";

const Reviews = () => {
  const [users] = useUser();
  console.log(users);
  return (
    <div className="review-container">
      {users.map((user) => (
        <Review user={user} key={user.id}></Review>
      ))}
    </div>
  );
};

export default Reviews;

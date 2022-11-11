import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import ReviewRow from "./ReviewRow";

const MyReview = () => {
  //   const { user } = useContext(AuthContext);
  //   const [reviews, setReviews] = useState([]);

  //   useEffect(() => {
  //     fetch(`http://localhost:5000/reviews?email=${user?.email}`)
  //       .then((res) => res.json())
  //       .then((data) => setReviews(data));
  //   }, [user?.email]);
  const services = useLoaderData();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?service_id=${services?._id}`)
      // fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [services?._id]);

  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full max-w-screen-2xl mx-auto">
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Image of Reviewer</th>
            <th>Reviewer</th>
            <th>Reviewer email</th>
            <th>Service Name</th>
            <th>Review</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review) => (
            <ReviewRow key={review._id} review={review}></ReviewRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyReview;

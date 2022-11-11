import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import ReviewRow from "./ReviewRow";

const MyReview = () => {
  const { user, logOut } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("photoHolic")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user?.email]);

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure you want to delete this review?"
    );
    if (proceed) {
      fetch(`http://localhost:5000/myreviews/${id}`, {
        method: "DELETE",
        headers: {
          // authorization: `Bearer ${localStorage.getItem("photoHolic")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remaining = reviews.filter((odr) => odr._id !== id);
            setReviews(remaining);
          }
        });
    }
  };

  return (
    <div>
      {reviews.length ? (
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
                <ReviewRow
                  key={review._id}
                  review={review}
                  handleDelete={handleDelete}
                ></ReviewRow>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h2 className="text-center font-bold text-5xl mb-5">
          No reviews were added
        </h2>
      )}
    </div>
  );
};

export default MyReview;

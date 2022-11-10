import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../../context/AuthProvider/AuthProvider";
import Review from "../../../Review/Review";
import ReviewRow from "../../../Review/ReviewRow";

const IndividualService = () => {
  const { user } = useContext(AuthContext);
  const { _id, title, img, description, price, rating, facility } =
    useLoaderData();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user?.email]);

  // console.log(reviews);

  return (
    <div className="max-w-screen-2xl mx-auto mb-24">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className="w-1/2 h-full">
          <img className="" src={img} alt="Album" />
        </figure>
        <div className="card-body w-1/2">
          <h2 className="card-title font-bold">{title}</h2>
          <p className="text-xl">{description}</p>
          <p>Price: {price}</p>
          <p>Ratings: {rating}</p>

          <p className="text-xl font-bold">{facility[0].cinematography}</p>
          <p>Standard: {facility[0].Standard}</p>
          <p>Exclusive: {facility[0].Exclusive}</p>
          <p className="text-xl font-bold">{facility[1].Photography}</p>
          <p>Standard: {facility[1].Standard}</p>
          <p>Exclusive: {facility[1].Exclusive}</p>
        </div>
      </div>
      <h2 className="mt-12 text-center text-5xl font-bold">Review Section</h2>

      <div>
        <h2 className="text-5xl">You Have {reviews.length} reviews</h2>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
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
      </div>

      <div className="flex justify-center my-4">
        <Link to={`/reviews/${_id}`}>
          <button className="btn btn-primary">Give Review</button>
        </Link>
      </div>
    </div>
  );
};

export default IndividualService;

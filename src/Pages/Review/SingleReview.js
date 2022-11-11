import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ReviewRow from "./ReviewRow";

const SingleReview = () => {
  const services = useLoaderData();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(
      `https://photoholic-server.vercel.app/reviews?service_id=${services?._id}`
    )
      // fetch(`https://photoholic-server.vercel.app/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [services?._id]);
  return (
    <div>
      {/* <div>
        <ReviewRow></ReviewRow>
      </div> */}
      <div className="m-5 border shadow">
        <h2 className="my-2 py-3">
          Reviews of <b>{services?.title}</b>
        </h2>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Image of Reviewer</th>
                <th>Reviewer Name</th>
                <th>Reviewer Email</th>
                <th>Service Name</th>
                <th>Review</th>
                <th></th>
              </tr>
            </thead>
            {reviews.map((review, i) => (
              <tbody>
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <th>
                    <img
                      style={{ height: "50px" }}
                      data-toggle="tooltip"
                      roundedCircle
                      title={review?.reviewer}
                      src={review?.photoURL}
                      alt=""
                    ></img>
                  </th>
                  <th>{review?.reviewer}</th>
                  <th>{review?.email}</th>
                  <th>{review?.serviceName}</th>
                  <th>{review?.reviewplace}</th>
                  <th></th>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default SingleReview;

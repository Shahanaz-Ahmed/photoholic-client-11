import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const ReviewRow = ({ review }) => {
  const { user } = useContext(AuthContext);
  const { email, reviewer, reviewplace, serviceName, service } = review;

  console.log(reviewer, reviewplace);

  const [reviewService, setReviewService] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/services/${service}`)
      .then((res) => res.json())
      .then((data) => setReviewService(data));
  }, [service]);
  return (
    // <table className="table w-full max-w-screen-2xl mx-auto">
    //   <tbody>
    <tr>
      <th>
        <label>
          <button className="btn btn-ghost">X</button>
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
    //   </tbody>
    // </table>
  );
};

export default ReviewRow;

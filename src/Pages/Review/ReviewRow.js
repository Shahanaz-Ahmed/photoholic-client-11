import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const ReviewRow = ({ review, handleDelete }) => {
  const { user } = useContext(AuthContext);
  const { _id, email, reviewer, reviewplace, serviceName, service } = review;

  //console.log(reviewer, reviewplace);

  const [reviewService, setReviewService] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/services/${_id}`)
      .then((res) => res.json())
      .then((data) => setReviewService(data));
  }, [_id]);
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
      <th>
        <Link to={`/update/${_id}`}>
          <button className="btn btn-info border">update</button>
          <label>
            &nbsp;
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-info border"
            >
              Delete
            </button>
          </label>
        </Link>
      </th>
    </tr>
  );
};

export default ReviewRow;

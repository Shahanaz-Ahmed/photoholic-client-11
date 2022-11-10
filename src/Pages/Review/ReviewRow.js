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
    <div>
      <tr>
        <th>
          <label>
            <button className="btn btn-ghost">X</button>
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                {user?.img && (
                  <img
                    src="/tailwind-css-component-profile-2@56w.png"
                    alt="Avatar Tailwind CSS Component"
                  />
                )}{" "}
              </div>
            </div>
            <div>
              <div className="font-bold">{serviceName}</div>
              <div className="text-sm opacity-50">{reviewer}</div>
            </div>
          </div>
        </td>
        <td>
          {reviewplace}
          <br />
          <span className="badge badge-ghost badge-sm">
            Desktop Support Technician
          </span>
        </td>
        <td>Purple</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    </div>
  );
};

export default ReviewRow;

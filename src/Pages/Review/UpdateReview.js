import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const UpdateReview = () => {
  const update = useLoaderData();
  const [review, setReview] = useState(update);

  const handleInputChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newReview = { ...review };
    newReview[field] = value;
    setReview(newReview);
  };
  const handleUpadateReview = (event) => {
    event.preventDefault();
    fetch(`https://photoholic-server.vercel.app/myreviews/${update._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Review Updated!");
          console.log(data);
          event.target.reset();
        }
      });
  };
  return (
    <div className="max-w-screen-2xl mx-auto">
      <form onSubmit={handleUpadateReview}>
        <div className=" container w-75  d-flex flex-column justify-content-center align-items-center my-3 px-3 py-5  border shadow-lg rounded-3 bg-light register-box">
          <h2>Update Review</h2>
          <div className="input-group mb-3">
            {" "}
            <span className="input-group-text bg-light"></span>
            <textarea
              rows={10}
              cols={100}
              className="form-control"
              onChange={handleInputChange}
              name="message"
              placeholder="Update review here"
              id="floatingTextarea"
              required
            ></textarea>
          </div>
        </div>
        <button className="btn btn-primary">Send Review</button>
      </form>
    </div>
  );
};

export default UpdateReview;

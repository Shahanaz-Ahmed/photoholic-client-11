import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Review = () => {
  const { _id, title } = useLoaderData();
  console.log(_id, title);

  const { user } = useContext(AuthContext);

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const phone = form.phone.value;
    const email = form.email.value;
    const reviewplace = form.reviewplace.value;

    const review = {
      service: _id,
      serviceName: title,
      reviewer: name,
      email,
      phone,
      reviewplace,
    };

    fetch(`http://localhost:5000/reviews`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("review placed successfully");
          form.reset();
        }
      })
      .catch((er) => console.error(er));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-center">Category: {title}</h2>
      <form onSubmit={handlePlaceOrder} className="my-24">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* <h2>service name:{title}</h2> */}
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="input input-bordered input-primary w-full"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="input input-bordered input-primary w-full"
          />
          <input
            type="text"
            name="email"
            placeholder="Your email"
            className="input input-bordered input-primary w-full"
          />
          <input
            type="text"
            name="phone"
            placeholder="Your Phone"
            className="input input-bordered input-primary w-full mb-4"
          />
        </div>
        <div className="max-w-screen-2xl mx-auto">
          {" "}
          <textarea
            name="reviewplace"
            className="textarea textarea-primary w-full"
            placeholder="Review"
          ></textarea>
          <div className="flex justify-center my-4">
            <Link to="/myreview">
              <input
                className=" btn btn-primary"
                type="submit"
                value="Give Your Valuable Review"
              />
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Review;

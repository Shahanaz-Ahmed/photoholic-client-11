import React from "react";
import { Link, useLoaderData } from "react-router-dom";
// import { AuthContext } from "../../../../context/AuthProvider/AuthProvider";
import SingleReview from "../../../Review/SingleReview";

const IndividualService = () => {
  // const { user } = useContext(AuthContext);
  const services = useLoaderData();
  console.log(services);
  const { _id, title, img, description, price, rating, facility } =
    useLoaderData();

  return (
    <div className="max-w-screen-2xl mb-24 mx-6">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className="lg:w-1/2 h-full">
          <img className="" src={img} alt="Album" />
        </figure>
        <div className="card-body lg:w-1/2">
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
        <SingleReview></SingleReview>
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

import React from "react";
import { useLoaderData } from "react-router-dom";

const IndividualService = () => {
  const { title, img, description, price, rating, facility } = useLoaderData();

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
    </div>
  );
};

export default IndividualService;

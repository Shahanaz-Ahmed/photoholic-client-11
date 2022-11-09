import React from "react";

const ServiceCard = ({ service }) => {
  const { title, img, price, rating, description } = service;
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl my-12">
        <figure>
          <img className="w-96 h-96" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-2xl">{title}</h2>
          <p className="text-2xl">
            {description.length > 100 ? (
              <p>{description.slice(0, 100) + "..."}</p>
            ) : (
              <p>{description}</p>
            )}
          </p>
          <div className="card-actions justify-end">
            <p className="p-1 text-2xl font-semibold text-blue-700">
              Price: ${price}
            </p>
            <button className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

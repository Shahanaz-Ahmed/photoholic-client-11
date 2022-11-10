import React from "react";
import { Link } from "react-router-dom";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";

const ServiceCard = ({ service }) => {
  const { _id, title, img, price, rating, description } = service;
  return (
    <div className="">
      <div className="card card-compact w-96 bg-base-100 shadow-xl my-12 ">
        <figure>
          <PhotoProvider>
            <PhotoView src={img}>
              <img className="w-96 h-96" src={img} alt="Shoes" />
            </PhotoView>
          </PhotoProvider>
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
            <Link to={`/individualservice/${_id}`}>
              <button className="btn btn-primary">Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

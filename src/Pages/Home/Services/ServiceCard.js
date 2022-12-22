import React from "react";
import { Link } from "react-router-dom";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";

const ServiceCard = ({ service }) => {
  const { _id, title, img, price, description } = service;
  return (
    // <div className="w-full h-full">
    <div className="w-full h-full pb-8">
      <div className="card shadow-xl my-12 gap-4 lg:ml-6 md:ml-6 h-full">
        <figure>
          <PhotoProvider>
            <PhotoView src={img}>
              <img className="w-full h-96" src={img} alt="Shoes" />
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
    // </div>
  );
};

export default ServiceCard;

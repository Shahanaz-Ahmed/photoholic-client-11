import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../Services/ServiceCard";

const HomeService = () => {
  const [homeServices, setHomeServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/home/services")
      .then((res) => res.json())
      .then((data) => setHomeServices(data));
  }, []);
  return (
    <div className="my-24">
      <div className="text-center">
        <p className="text-2xl font-bold">Services</p>
        <h2 className="text-5xl font-semibold">Our Service Area</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 max-w-screen-2xl mx-auto sm:place-items-center">
        {homeServices.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="flex justify-center">
        <Link className="place-items-center" to="/services">
          <button className="btn btn-primary py-4 px-24">See All</button>
        </Link>
      </div>
    </div>
  );
};

export default HomeService;

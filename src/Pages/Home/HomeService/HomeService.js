import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../Services/ServiceCard";

const HomeService = () => {
  const [homeServices, setHomeServices] = useState([]);
  useEffect(() => {
    fetch("https://photoholic-server.vercel.app/home/services")
      .then((res) => res.json())
      .then((data) => setHomeServices(data));
  }, []);
  return (
    <div className="my-24">
      <div className="text-center">
        <p className="text-2xl font-bold">Services</p>
        <h2 className="text-5xl font-semibold">Our Service Area</h2>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-3">
          {homeServices.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-16">
        <Link className="place-items-center" to="/services">
          <button className="btn btn-primary py-4 px-24">See All</button>
        </Link>
      </div>
    </div>
  );
};

export default HomeService;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="my-24">
      <div className="text-center">
        <p className="text-2xl font-bold">Services</p>
        <h2 className="text-5xl font-semibold">Our Service Area</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 max-w-screen-2xl mx-auto sm:place-items-center">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div>
        {services.map((service, i) => (
          <p key={service._id}>
            <button className="button1 px-5  mx-3 fw-bold">
              {" "}
              <Link to={`/services/${service._id}`}> </Link>
            </button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Services;

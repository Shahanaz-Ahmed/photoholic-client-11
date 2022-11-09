import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
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
          <ServiceCard key={service.service_id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;

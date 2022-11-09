import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import img1 from "../../../assets/images/about_us/img1.jpeg";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      {/* <Banner></Banner> */}
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1554080353-321e452ccf19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold">
              I don't take a Photograph, I make it ...
            </h1>
            <p className="mb-5 text-2xl font-semibold">
              It's not enough to just own a camera. Everyone owns a camera. To
              be a photographer, you must understand, appreciate, and harness
              the power you hold!
            </p>
          </div>
        </div>
      </div>
      <About></About>
      <Services></Services>
    </div>
  );
};

export default Home;

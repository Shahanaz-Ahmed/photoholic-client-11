import React from "react";
import About from "../About/About";
import img1 from "../../../assets/images/about_us/img1.jpeg";
import HomeService from "../HomeService/HomeService";
import RecentEventPic from "../RecentEventPic/RecentEventPic";
import useTitle from "../../../hooks/UseTitle";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      {/* <Banner></Banner> */}
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${img1})`,
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
      <HomeService></HomeService>
      <RecentEventPic></RecentEventPic>
    </div>
  );
};

export default Home;

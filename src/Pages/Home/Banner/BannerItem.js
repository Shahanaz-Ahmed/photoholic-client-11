import React from "react";

const BannerItem = ({ slide }) => {
  const { id, image, prev, next } = slide;
  return (
    <div
      id={`slide${id}`}
      className="carousel-item relative w-full  text-white"
    >
      <div className="carousel-img w-full ">
        <img src={image} className="w-full h-full" alt="" />
      </div>
      <div className="absolute transform -translate-y-1/2 top-1/3">
        {/* <h1 className="text-5xl font-bold text-center">
          I don't take a Photograph, I make it ...
          <p className="text-2xl font-semibold">
            It's not enough to just own a camera. Everyone owns a camera. To be
            a photographer, you must understand, appreciate, and harness the
            power you hold!
          </p>
        </h1> */}
      </div>

      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href={`#slide${prev}`} className="btn btn-circle">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItem;

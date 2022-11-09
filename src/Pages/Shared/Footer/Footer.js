import React from "react";
import logo from "../../../assets/logo.png";

const Footer = () => {
  return (
    <div className="">
      {" "}
      <footer className="right-0 footer p-32 bg-black text-white px-12">
        <div>
          <div>
            <img
              style={{ height: "110px", width: "100px" }}
              className="bg-white"
              src={logo}
              alt=""
            />
          </div>
          <p className="text-2xl font-bold">PhotoHolic</p>
          <p className="text-xl">
            Copyright 2022 © visit PhotoHolic , All rights reserved
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a href="/" className="link link-hover">
            Branding
          </a>
          <a href="/" className="link link-hover">
            Design
          </a>
          <a href="/" className="link link-hover">
            Marketing
          </a>
          <a href="/" className="link link-hover">
            Advertisement
          </a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a href="/" className="link link-hover">
            About us
          </a>
          <a href="/" className="link link-hover">
            Contact
          </a>
          <a href="/" className="link link-hover">
            Jobs
          </a>
          <a href="/" className="link link-hover">
            Press kit
          </a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a href="/" className="link link-hover">
            Terms of use
          </a>
          <a href="/" className="link link-hover">
            Privacy policy
          </a>
          <a href="/" className="link link-hover">
            Cookie policy
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

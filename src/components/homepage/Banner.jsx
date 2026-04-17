import React from "react";
import { FaAppStoreIos, FaGooglePlay } from "react-icons/fa";
import heroImg from "../../assets/images/hero.png";

const Banner = () => {
  return (
    <div>
      <div className="mt-10">
        <div className="text-center space-y-4 justify-items-center">
          <h1 className="text-5xl font-bold">
            We Build <br /> <span className="text-purple-500">Productive</span>{" "}
            Apps
          </h1>
          <p>
            At HERO. IO, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting. <br /> Our goal is to turn your
            ideas into digital experiences that truly make an impact.
          </p>

          <div className="flex gap-3 justify-center">
            <button className="btn">
              <FaGooglePlay /> Google Play
            </button>
            <button className="btn">
              <FaAppStoreIos />
              App Store
            </button>
          </div>
          <img className="w-150 pt-2" src={heroImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;

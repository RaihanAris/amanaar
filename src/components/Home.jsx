import React from "react";

const Home = () => {
  return (
    <div
      className="bg-cover bg-center w-full py-16 mt-16 md:py-48"
      style={{ backgroundImage: "url('/images/home/home.png')" }}
      id="home"
    >
      <div
        className="h-full px-10 mx-auto md:px-20"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <h1 className="text-white text-3xl font-bold md:text-6xl text-center">
          Your Partner for Beyond Business Growth in Indonesia
        </h1>
        <p className="text-sm text-white pt-4 text-center md:pt-6 md:text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
          praesentium distinctio commodi ipsa sit veritatis omnis quos obcaecati
          illo consequatur.
        </p>
      </div>
    </div>
  );
};

export default Home;

"use client";
import { Carousel } from "flowbite-react";
import { CarouselDatas, AscpectDatas } from "./data/features";

const Features = () => {
  return (
    <div className="pb-10" id="services">
      <div className="pb-10">
        <h1 className="text-2xl text-center font-extrabold md:text-4xl">
          Konsultasi <span className="text-[rgb(0,70,175)]">Kami</span>
        </h1>
        <p className="text-sm pt-5 px-5 text-center md:text-lg">
          Berikut adalah beberapa aspek konsultasi yang terdapat pada
          Amaanaar.id
        </p>
      </div>
      <div className="h-56 px-5 pb-10 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel
          onSlideChange={(index) => console.log("onSlideChange()", index)}
        >
          {CarouselDatas.map((item) => (
            <div
              key={item.id}
              className="flex h-full items-center justify-center bg-[url('/images/features/1.png')] bg-cover dark:bg-gray-700 dark:text-white text-white px-2 font-bold text-2xl text-center md:text-4xl"
            >
              {item.title}
            </div>
          ))}
        </Carousel>
      </div>
      <div className="px-10 flex flex-wrap justify-center gap-10">
        {AscpectDatas.map((aspect) => (
          <div
            key={aspect.id}
            className="features flex justify-center flex-wrap"
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <div className="max-w-sm border-[1px] shadow-lg rounded-xl overflow-clip pb-5">
              <img src={aspect.img} alt="" />
              <div className="px-6 pt-3">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {aspect.title}
                </h5>
                <p className="text-sm pt-4 pb-8 md:text-lg">
                  {aspect.description}
                </p>
                <a
                  href="#"
                  className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                >
                  Konsultasi
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;

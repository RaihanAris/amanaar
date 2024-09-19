import React from "react";

const About = () => {
  return (
    <div
      className="py-20 px-10 flex flex-wrap items-center justify-center mx-auto max-w-[90%]"
      id="about"
    >
      <div
        className="w-full lg:w-1/2"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <h1 className="text-2xl text-center font-extrabold md:text-4xl">
          Siapa itu <span className="text-[rgb(0,70,175)]">Amaanaar?</span>
        </h1>
        <p className=" pt-5 max-w-[90%] text-center mx-auto text-sm md:text-lg">
          Kami adalah kelompok penasehat atau perusahaan konsultan yang
          menyediakan bantuan bagi klien lokal maupun multinasional dalam
          perintisan maupun pengelolaan bisnis di Indonesia. Kami menawarkan
          berbagai layanan konsultasi untuk membantu klien kami mengembangkan
          bisnis mereka di Indonesia. Kami menyediakan landasan hukum yang kokoh
          dengan pengalaman, biaya terjangkau, layanan hukum perusahaan dan
          bisnis yang andal dengan layanan yang unggul, berintegritas, dan
          terpercaya untuk kemudahan berbisnis di Indonesia. Kami adalah
          konsultan dengan rekam jejak yang baik dalam menangani kasus yang
          menjadi keahlian kami. Berbekal pengalaman dan kemampuan tim dan
          jaringan hukum dan bisnis kami. Dibuktikan oleh ulasan daring dari
          berbagai kasus yang telah kami selesaikan.
        </p>
        <div className="flex justify-center">
          <a
            href="#"
            className="mt-8 bg-pink-500 px-4 py-3 rounded-3xl font-semibold text-white shadow-md hover:bg-pink-600"
          >
            Learn More
          </a>
        </div>
      </div>
      <div
        className="w-full lg:w-1/2"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <div className="flex justify-center mt-20 lg:mt-0 lg:pl-10">
          <img
            src="images/about/about.png"
            className="rounded-3xl shadow-lg max-w-[100%] lg:ml-4 lg:w-[80%]"
            alt="konsultasi"
          />
        </div>
      </div>
    </div>
  );
};

export default About;

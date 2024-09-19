import React from "react";
import { useState } from "react";
("use client");
const Contact = () => {
  const [contacts, setContact] = useState([
    {
      id: 1,
      icon: "ri-phone-line mr-3 text-2xl bg-teal-500 rounded-full px-2 py-2 text-white",
      contact: "(021)123435210",
    },
    {
      id: 2,
      icon: "ri-whatsapp-line mr-3 text-2xl bg-teal-500 rounded-full px-2 py-2 text-white",
      contact: "+62948205738923",
    },
    {
      id: 3,
      icon: "ri-mail-line mr-3 text-2xl bg-teal-500 rounded-full px-2 py-2 text-white",
      contact: "consultant@amaanaar.id",
    },
  ]);
  const [experts, setExpert] = useState([
    {
      id: 1,
      icon: "ri-mail-line mr-3 text-2xl bg-teal-500 rounded-full px-2 py-2 text-white",
      contact: "yayan@amaanaar.id",
    },
  ]);
  return (
    <div className="px-10 pb-20" id="contact">
      <div className="pb-10 mx-auto md:max-w-[70%]">
        <h1 className="text-2xl text-center font-extrabold md:text-4xl">
          Kontak <span className="text-[rgb(0,70,175)]">Kami</span>
        </h1>
        <p className="text-sm pt-5 px-5 text-center md:text-lg">
          Berbicara dengan para expert kami untuk mengetahui dengan tepat
          bagaimana kami dapat membantu Anda.
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center ">
        <div
          className="flex flex-col items-center justify-center h-full md:w-1/2"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <div>
            <div className="pb-5">
              <h1 className="text-xl mb-8 w-fit font-bold ">
                Hubungi Kami untuk Mengetahui Lebih Lanjut!
              </h1>
              {contacts.map((contact) => (
                <p key={contact.id} className="text-lg pb-5">
                  <i className={contact.icon}></i>
                  {contact.contact}
                </p>
              ))}
            </div>
            <div className="pb-5">
              <h1 className="text-xl mb-8 w-fit font-bold ">Person Expert!</h1>
              {experts.map((expert) => (
                <p key={expert.id} className="text-lg pb-5">
                  <i className={expert.icon}></i>
                  {expert.contact}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div
          className="flex flex-col items-center justify-center h-full  md:w-1/2"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <form className="flex w-full flex-col gap-4 border-2 rounded-lg border-teal-500 px-5 py-5 lg:w-[70%]">
            <h1 className="text-xl font-bold pb-3 text-teal-600">
              Send Us a Message
            </h1>
            <div>
              <input
                className="w-full rounded-full py-4 px-5 border-teal-500"
                type="email"
                id="email"
                placeholder="Email"
                required
              />
            </div>
            <div>
              <input
                className="w-full rounded-full py-4 px-5 border-teal-500"
                type="text"
                id="username"
                placeholder="Username"
                required
              />
            </div>
            <div>
              <textarea
                className="w-full rounded-2xl  py-4 px-5 border-teal-500"
                type="text"
                id="username"
                placeholder="Leave Us a Message"
                required
                rows={4}
              />
            </div>
            <button
              type="submit"
              className="bg-teal-500 py-3 rounded-full text-lg font-semibold text-white"
            >
              Kirim
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

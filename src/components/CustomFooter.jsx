import React from "react";

("use client");

import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
const CustomFooter = () => {
  return (
    <Footer bgDark>
      <div className="w-full">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
          <div>
            <Footer.Title title="Amaanaar.id" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Home</Footer.Link>
              <Footer.Link href="#">About Us</Footer.Link>
              <Footer.Link href="#">Services</Footer.Link>
              <Footer.Link href="#">Contact</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="help center" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">
                <i className="ri-phone-line pr-2"></i>(021)123435210
              </Footer.Link>
              <Footer.Link href="#">
                <i className="ri-whatsapp-line pr-2"></i>+62948205738923
              </Footer.Link>
              <Footer.Link href="#">consultant@amaanaar.id</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="person expert" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">
                <i className="ri-mail-line pr-2"></i>yayan@amaanaar.id
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="social media" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">
                <i className="ri-instagram-line pr-2"></i>Instagram
              </Footer.Link>
              <Footer.Link href="#">
                <i className="ri-facebook-circle-line pr-2"></i>Facebook
              </Footer.Link>
              <Footer.Link href="#">
                <i className="ri-youtube-line pr-2"></i>YouTube
              </Footer.Link>
              <Footer.Link href="#">
                <i className="ri-linkedin-line pr-2"></i>LinkedIn
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
        <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-center">
          <Footer.Copyright href="#" by="RaihanAris" year={2024} />
        </div>
      </div>
    </Footer>
  );
};

export default CustomFooter;

"use client";
import { Button, Navbar } from "flowbite-react";

const CustomNavbar = () => {
  return (
    <>
      <Navbar fluid rounded className="fixed top-0 w-full z-10">
        <Navbar.Brand href="images/logo.jpg">
          <img
            src="images/logo.jpg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-bold dark:text-white">
            Amaanaar.id
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2 gap-2">
          <Button href="#contact">Contact Us</Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="#home" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="#about">About Us</Navbar.Link>
          <Navbar.Link href="#services">Services</Navbar.Link>
          <Navbar.Link href="#contact">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default CustomNavbar;

import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 text-gray-900 font-bold">
            EcoMart -
            <br className="hidden lg:inline-block" />
            Discover Endless Shopping Possibilities
          </h1>
          <p className="mb-8 leading-relaxed text-justify">
            Discover a world of endless shopping possibilities with our
            eCommerce app! EcoMart Go offers a seamless online shopping
            experience with a wide variety of products, from fashion and
            electronics to home essentials and health products. Browse trendy
            treasures and exclusive deals while enjoying swift and secure
            checkout. Unleash the joy of shopping with us today!
          </p>
          <div className="flex justify-center">
            <button
              className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              onClick={() => navigate("/products")}
            >
              Products
            </button>
            <button
              className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
              onClick={() => navigate("/contact")}
            >
              Contact
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://c1.wallpaperflare.com/preview/615/837/284/woman-lady-female-shopping.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

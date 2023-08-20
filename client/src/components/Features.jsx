import React from "react";
import { useNavigate } from "react-router-dom";

const Features = () => {
  const navigate = useNavigate();
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
            Our Features
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            EcoMart - Empowering Your Shopping Experience
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Discover a world of convenience and endless possibilities with
            EcoMart. Our user-friendly eCommerce platform offers a diverse
            selection of high-quality products, secure payment options, and
            exclusive features to enhance your shopping journey.
          </p>
        </div>
        <div className="flex flex-wrap">
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
              Smart Recommendations
            </h2>
            <p className="leading-relaxed text-base mb-4">
              Experience personalized shopping with our smart recommendation
              engine to your preferences and browsing history.
            </p>
            <a className="text-indigo-500 inline-flex items-center">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
              Fast and Secure Checkout
            </h2>
            <p className="leading-relaxed text-base mb-4">
              Enjoy a hassle-free checkout process with our secure payment
              gateways.
            </p>
            <a className="text-indigo-500 inline-flex items-center">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
              Wishlist and Favorites
            </h2>
            <p className="leading-relaxed text-base mb-4">
              Keep track of your favorite items and create wishlists for future
              purchases. Never miss out on the products you love the most.
            </p>
            <a className="text-indigo-500 inline-flex items-center">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
              Real-time Order Tracking
            </h2>
            <p className="leading-relaxed text-base mb-4">
              Stay informed about your orders from the moment you place them
              until they reach your doorstep
            </p>
            <a className="text-indigo-500 inline-flex items-center">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
        <button
          className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          onClick={() => navigate("/about-us")}
        >
          Know More
        </button>
      </div>
    </section>
  );
};

export default Features;

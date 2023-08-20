import React from "react";
import Header from "./Header";

const AboutUs = () => {
  return (
    <>
      <Header />
      <section className="py-12 px-4 sm:px-8 md:px-16 lg:px-32">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-center">
            About Us
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="https://c1.wallpaperflare.com/preview/404/493/117/clothes-jackets-shirts-fashion.jpg"
                alt="Company Image"
                className="rounded-lg w-full"
              />
            </div>
            <div>
              <p className="text-lg text-gray-700 text-justify">
                At EcoMart Go, we are passionate about delivering a seamless and
                enjoyable online shopping experience to our customers. As an
                eCommerce platform, we take pride in offering a diverse
                selection of high-quality products, ranging from fashion and
                electronics to home essentials and health products. Our mission
                is to provide exceptional customer service, ensuring that every
                purchase is met with satisfaction and convenience. Join us in
                discovering a world of trendy treasures and exclusive deals, and
                let us be your go-to destination for all your shopping needs.
              </p>
              <p className="text-lg text-gray-700 mt-4 text-justify">
                Join the EcoMart Go community today and experience the ultimate
                convenience of online shopping.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;

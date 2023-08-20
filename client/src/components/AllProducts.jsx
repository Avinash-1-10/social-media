import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actionCreators/cartActions";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("jewelery"); // Track the selected category
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData(selectedCategory); // Fetch products for the selected category
  }, [selectedCategory]); // Fetch whenever selectedCategory changes

  const fetchData = (category) => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };

  return (
    <>
      <Header />
      <div className="flex justify-evenly gap-4 mt-4 flex-wrap items-center">
        <button
          className={` text-white w-[100px] py-2 rounded focus:outline-none ${
            selectedCategory === "jewelery"
              ? "bg-indigo-500"
              : "bg-white border-[1px] border-black color"
          }`}
          onClick={() => setSelectedCategory("jewelery")}
        >
          Jewelry
        </button>
        <button
          className={`${
            selectedCategory === "electronics"
              ? "bg-indigo-500"
              : "bg-white border-[1px] border-black color"
          } text-white w-[100px] py-2 rounded focus:outline-none`}
          onClick={() => setSelectedCategory("electronics")}
        >
          Electronics
        </button>
        <button
          className={`${
            selectedCategory === "men's clothing"
              ? "bg-indigo-500"
              : "bg-white border-[1px] border-black color"
          } text-white py-2 rounded focus:outline-none w-[100px]`}
          onClick={() => setSelectedCategory("men's clothing")}
        >
          Men
        </button>
        <button
          className={`${
            selectedCategory === "women's clothing"
              ? "bg-indigo-500"
              : "bg-white border-[1px] border-black color"
          } text-white w-[100px] py-2 rounded focus:outline-none`}
          onClick={() => setSelectedCategory("women's clothing")}
        >
          Women
        </button>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {/* Show skeleton effect while loading */}
            {products.length === 0 && (
              <>
                {Array.from({ length: 4 }).map((_, index) => (
                  <div
                    className="skeleton-card lg:w-1/4 md:w-1/2 p-4 w-full border"
                    key={index}
                  ></div>
                ))}
              </>
            )}

            {/* Show actual products after loading */}
            {products.length > 0 &&
              products.map((product, index) => (
                <div
                  className="lg:w-1/4 md:w-1/2 p-4 w-full border card"
                  key={index}
                >
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-contain object-center w-full h-full"
                      src={product.image}
                    />
                    <div className="overlay">
                      <div className="buttons">
                        <button
                          className="btn-add-to-cart"
                          onClick={() => dispatch(addToCart(product))}
                        >
                          Add
                        </button>
                        <button
                          className="btn-explore"
                          onClick={() =>
                            navigate("/product", {
                              state: { product: product },
                            })
                          }
                        >
                          View
                        </button>
                      </div>
                    </div>
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">
                      {product.category}
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      {product.title.length > 25
                        ? `${product.title.slice(0, 27)}...`
                        : product.title}
                    </h2>
                    <p className="mt-1">${product.price}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AllProducts;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actionCreators/cartActions";

const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products?limit=8"
        );
        const products = response.data;
        setProducts(products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
              Products
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              MOST POPULAR PRODUCTS
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            {/* skeleton effect while loading */}
            {products.length === 0 && (
              <>
                {Array.from({ length: 8 }).map((_, index) => (
                  <div
                    className="skeleton-card lg:w-1/4 md:w-1/2 p-4 w-full border"
                    key={index}
                  ></div>
                ))}
              </>
            )}

            {/*  */}
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
    </>
  );
};

export default Products;

import React, { useState } from "react";
import Header from "./Header";
import { useLocation } from "react-router-dom";
import Success from "./Success";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/actionCreators/cartActions";

const CheckoutForm = () => {
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
  });
  const location = useLocation();
  const dispatch = useDispatch();
  let totalPrice = location.state.totalPrice;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    dispatch(clearCart());
  };

  return (
    <>
      <Header />
      {success ? (
        <Success />
      ) : (
        <div className="md:max-w-md max-w-sm mx-auto m-5">
          <h1 className="text-3xl font-semibold mb-6">Checkout</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="address"
                className="block text-gray-700 font-semibold mb-1"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-gray-700 font-semibold mb-1"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <p className="text-xl font-semibold mb-4">
              Total Price: ${totalPrice}
            </p>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none"
            >
              Place Order
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;

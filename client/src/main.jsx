import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Product from './components/Product.jsx';
import AboutUs from './components/AboutUs.jsx';
import Cart from './components/Cart.jsx';
import AllProducts from './components/AllProducts.jsx';
import Contact from './components/Contact.jsx';
import Checkout from './components/CheckOut.jsx';
import {Provider} from "react-redux"
import { store } from './redux/store.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path:"/product",
    element:<Product />
  },
  {
    path:"/products",
    element:<AllProducts/>
  },
  {
    path:"/about-us",
    element:<AboutUs/>
  },
  {
    path:"/cart",
    element:<Cart/>
  },
  {
    path:"/contact",
    element:<Contact/>
  },
  {
    path:"/checkout",
    element:<Checkout/>
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)

import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "../src/pages/Home"
import Products from "../src/pages/Products"
import Product from "../src/pages/Product"
import Layout from "../src/components/Layout"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        elements: <Home />
      },
      {
        path: "/products",
        elements: <Products />
      },
      {
        path: "/products/:id",
        elements: <Product />
      },
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
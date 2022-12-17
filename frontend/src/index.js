import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "../src/pages/Home"
import Products from "../src/pages/Products"
import LayoutComponent from "../src/components/controls/LayoutComponent"
import ProductDetails from './pages/ProductDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutComponent />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "products",
        element: <Products />
      },
      {
        path: "/products/:id",
        element: <Products />
      },  
      {
        path: "/product/:id",
        element: <ProductDetails />
      }
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
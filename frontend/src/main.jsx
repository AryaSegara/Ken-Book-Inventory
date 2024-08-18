import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import About from "./components/About.jsx";
import Home from "./home/Home.jsx";
import SingleBook from "./allbook/SingleBook.jsx";
import DashboardLayout from "./dashboard/DashboardLayout.jsx";
import UploadBook from "./dashboard/UploadBook.jsx";
import ManageBook from "./dashboard/ManageBook.jsx";
import EditBook from "./dashboard/EditBook.jsx";
import DataBook from "./dashboard/DataBook.jsx";
import Login from "./home/Login.jsx";
import AllBook from "./allbook/AllBook.jsx";

const pages = [
  {
      path:"/login",
      element:<Login />,
  },
  {
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/allbook",
        element: <AllBook />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/book/:id",
        element: <SingleBook />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_BASE_URL}api/book/getBookById/${params.id}`),
      },
    ],
  },
  {
    path: "/admin/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/admin/dashboard/upload",
        element: <UploadBook />,
      },
      {
        path: "/admin/dashboard/manage",
        element: <ManageBook />,
      },
      {
        path: "/admin/dashboard/databook",
        element: <DataBook />,
      },
      {
        path: "/admin/dashboard/edit-book/:id",
        element: <EditBook />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_BASE_URL}api/book/getBookById/${params.id}`),
      },
    ],
  },
];


const router = createBrowserRouter([
  {
    element: <App />,
    children: pages,
  }
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

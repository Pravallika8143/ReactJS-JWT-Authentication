import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home.jsx";
import Aboutus from "./Aboutus.jsx";
import CategoryProducts from "./categoryProducts.jsx";
import Courses from "./courses.jsx";
import Login from "./assets/user/Login.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/aboutus",
        element: <Aboutus></Aboutus>,
      },
      {
        path: "/courses",
        element:<Courses></Courses>,
      },
      {
        path: "/category/:cslug",
        element: <CategoryProducts></CategoryProducts>,
      },
    ],
  },
  {
    path:"/login",
    element:<Login></Login>
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root.jsx";
import Login from "./Pages/Login/Login.jsx";
import Signup from "./Pages/Signup/Signup.jsx";
import Home from "./Pages/Home/Home.jsx";
import Blog from "./Pages/Blog/Blog.jsx";
import Doctors from "./Pages/Doctors/Doctors.jsx";
import HomeDiagnostics from "./Pages/Home Diagnostics/HomeDiagnostics.jsx";
import HealthPlans from "./Pages/Health Plans/HealthPlans.jsx";
import SingleDoctor from "./Components/SingleDoctor.jsx";
import SingleBlog from "./Components/SingleBlog.jsx";
import Products from "./Pages/Products/Products.jsx";
import SingleProduct from "./Components/SingleProduct.jsx";
import DepartmentsSymptoms from "./Pages/Departments-Symptoms/DepartmentsSymptoms.jsx";
import AddToCarts from "./Pages/Add To Cart/AddToCarts.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:id",
        element: <SingleProduct />,
      },
      {
        path: "/doctors",
        element: <Doctors />,
      },
      {
        path: "/doctors/:id",
        element: <SingleDoctor />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/:id",
        element: <SingleBlog />,
      },
      {
        path: "/departments_symptoms",
        element: <DepartmentsSymptoms />,
      },
      {
        path: "/home_diagnostics",
        element: <HomeDiagnostics />,
      },
      {
        path: "/subscription_plans",
        element: <HealthPlans />,
      },
      {
        path: "/add_to_cart",
        element: <AddToCarts />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

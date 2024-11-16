import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Loading from "./pages/Loading";
import Confirmation from "./pages/Confirmation";
import Booking from "./pages/Booking";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Loading />,
  },
  {
    path: "/booking",
    element: <Booking />,
  },
  {
    path: "/confirmation",
    element: <Confirmation />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

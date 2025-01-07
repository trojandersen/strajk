import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "./pages/Loading.tsx";
import Confirmation from "./pages/Confirmation.tsx";
import Booking from "./pages/Booking.tsx";
import Layout from "./components/Layout.tsx";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found!");
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Loading />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
);

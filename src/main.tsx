import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "./pages/Loading";
import Confirmation from "./pages/Confirmation";
import Booking from "./pages/Booking";
import Layout from "./components/Layout";

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

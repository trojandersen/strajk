import React from "react";
import { useLocation } from "react-router-dom";
import Nav from "./Nav";

type LayoutProps = {
  children: React.ReactNode;
  page?: string;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isLoading = location.pathname === "/";
  return (
    <div className="h-screen">
      {!isLoading}
      <Nav />
      <main className="h-screen place-content-center bg-[#FFF4F1]">
        {children}
      </main>
    </div>
  );
};

export default Layout;

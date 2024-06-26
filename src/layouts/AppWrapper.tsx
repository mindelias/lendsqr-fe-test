import React from "react";
import Header from "../components/Header/Header";
import Sidebar from "../components/SideBar/SideBar";
import "./styles.scss";
 

const AppWrapper = ({ children }: LayoutProps) => {

  return (
    <div className="app-wrapper">
      <Header />
      <Sidebar />

      <div className="main-content">
        {/* <Navbar /> */}
        {children}
      </div>
    </div>
  );
};

export default AppWrapper;

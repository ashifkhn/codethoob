import React from "react";
import { Navbar } from "../../components/Navbar";
import { SideBar } from "./../../components/SideBar";
import "./../../Style/homepage.scss";

export const HomePage = () => {
  return (
    <div className="container">
      <div className="container">
        <div className="sidebar_container_dashboard">
          <SideBar />
        </div>
        <div className="navbar_and_content_container">
          <Navbar />
          HELLO
        </div>
      </div>
    </div>
  );
};

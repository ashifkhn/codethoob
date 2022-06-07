import React from "react";
import { NavLink } from "react-router-dom";
import "./style/sidebar.scss";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import HistoryIcon from "@mui/icons-material/History";
import { useNavigate } from "react-router-dom";

export const SideBar = () => {
  const navigate = useNavigate();
  const logoHandler = () => {
    navigate("/");
  };

  return (
    <aside className="sidebar_container">
      <div className="logo_container" onClick={logoHandler}>
        <div className="logo">
          <h1 className="brand_message"></h1>
        </div>
      </div>

      <div className="items">
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "link")}
          to="/playlist"
        >
          <PlaylistPlayIcon />
          Playlist
        </NavLink>
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "link")}
          to="/liked"
        >
          <ThumbUpIcon />
          Liked Videos
        </NavLink>
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "link")}
          to="/watchlater"
        >
          <WatchLaterIcon />
          Watch Later
        </NavLink>
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "link")}
          to="/history"
        >
          <HistoryIcon />
          History
        </NavLink>{" "}
      </div>
      <div className="brand_message"></div>
    </aside>
  );
};

import React, { useState } from "react";
import "./style/navbar.scss";
import FireCoin from "./../assets/fire-coin.svg";
import { useCoin } from "../context/Context";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";

export const Navbar = (props) => {
  let navigate = useNavigate();
  const { coin } = useCoin();
  const [log, setLog] = useState(false);

  const Handler = () => {
    setLog(!log);
  };

  const Handler2 = () => {
    navigate("/");
  };
  return (
    <div className="navbar_container">
      <div className="page_title">{props.name}</div>
      <div className="right">
        <div className="coins">
          <img src={FireCoin} alt="" />
          <div>{coin}</div>
        </div>
        <div className="icons">
          <div>Karan Hooda</div>
          <div className="image_user">
            <AccountCircleIcon
              onClick={Handler}
              style={{ fontSize: "40px", color: "#DDDFED" }}
            />
          </div>
          {log && (
            <div className="logout_user" onClick={Handler2}>
              {" "}
              Log out
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

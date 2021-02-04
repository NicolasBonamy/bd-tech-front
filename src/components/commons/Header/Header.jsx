import React from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.css";

function Header() {
  return (
    <div className={style.Header}>
      <Link to="/bd">
        <h1 className={style.MainTitle}>Ma BD-Tech</h1>
      </Link>
    </div>
  );
}

export default Header;

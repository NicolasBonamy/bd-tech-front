import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./Start.module.css";
import Header from "../../commons/Header/Header";

function Start() {
  const [pseudo, setPseudo] = useState("");
  const handleChange = (e) => {
    setPseudo(e.target.value);
  };
  const handleSubmit = () => {
    localStorage.setItem("pseudoBD", pseudo);
  };

  return (
    <div>
      <Header />
      <div className={style.Start}>
        <label htmlFor="pseudo">Veuillez entrer votre pseudo :</label>
        <input
          type="text"
          id="pseudo"
          name="pseudo"
          placeholder="pseudo"
          required
          minLength="4"
          onChange={handleChange}
        />
        <Link to="/bd">
          <button type="button" onClick={handleSubmit}>
            Valider
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Start;

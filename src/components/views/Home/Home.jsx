import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import style from "./Home.module.css";
import Header from "../../commons/Header/Header";
import DetailCardList from "./DetailCardList";

function Home() {
  const [pseudoBDid, setPseudoBDid] = useState("");
  const [favorites, setFavorites] = useState(false);
  useEffect(() => {
    setPseudoBDid(localStorage.getItem("pseudoBDid"));
    const { REACT_APP_SERVER_ADDRESS } = process.env;
    axios
      .get(
        `${REACT_APP_SERVER_ADDRESS}/users?nickname=${localStorage.getItem(
          "pseudoBD"
        )}`
      )
      .then((res) => res.data)
      .then((data) => {
        localStorage.setItem("pseudoBDid", data[0].id);
      });
  }, [pseudoBDid]);

  const handleChangeFavorites = (e) => {
    if (e.target.value === "favorites") {
      setFavorites(true);
    } else {
      setFavorites(false);
    }
  };

  return (
    <div>
      <Header />
      <div>
        <Link to="/">
          <h3 className={style.Pseudo}>{localStorage.getItem("pseudoBD")}</h3>
        </Link>
        <h2>Ma collection :</h2>
        <div className={style.Categories}>
          <div>
            <label htmlFor="kind">Sélectionnez un genre</label>
            <select name="kind" id="kind">
              <option value="">Genre</option>
              <option value="Historique">Historique</option>
              <option value="Roman graphique">Roman graphique</option>
              <option value="Humour">Humour</option>
            </select>
          </div>
          <div>
            <label htmlFor="author">Sélectionnez un auteur</label>
            <select name="author" id="author">
              <option value="">Auteur</option>
              <option value="Riad Sattouf">Riad Sattouf</option>
              <option value="Manu Larcenet">Manu Larcenet</option>
              <option value="Tardi">Tardi</option>
            </select>
          </div>
          <div>
            <input
              type="checkbox"
              id="favorites"
              name="favorites"
              value="favorites"
              onClick={handleChangeFavorites}
            />
            <label htmlFor="favorites">Favoris</label>
          </div>
        </div>
      </div>
      <DetailCardList favorites={favorites} />
    </div>
  );
}

export default Home;

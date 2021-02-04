import React from "react";
import axios from "axios";
import style from "./DetailCard.module.css";

function DetailCard(props) {
  const { id, title, cover_src } = props;
  const { REACT_APP_SERVER_ADDRESS } = process.env;

  const handleSubmitFavorite = () => {
    axios
      .put(
        `${REACT_APP_SERVER_ADDRESS}/users/${localStorage.getItem(
          "pseudoBDid"
        )}/books/${id}`
      )
      .then((res) => res.data)
      .then((data) =>
        console.log(
          data,
          `${REACT_APP_SERVER_ADDRESS}/users/${localStorage.getItem(
            "pseudoBDid"
          )}/books/${id}`
        )
      );
  };

  const handleSubmitDelete = () => {
    axios
      .delete(
        `${REACT_APP_SERVER_ADDRESS}/users/${localStorage.getItem(
          "pseudoBDid"
        )}/books/${id}`
      )
      .then((res) => res.data)
      .then((data) =>
        console.log(
          data,
          `${REACT_APP_SERVER_ADDRESS}/users/${localStorage.getItem(
            "pseudoBDid"
          )}/books/${id}`
        )
      );
  };
  
  return (
    <div className={style.Card}>
      <img className={style.BookCover} src={cover_src} alt={title} />
      <p>{title}</p>
      <button type="button">Changer la couverture</button>
      <button type="button" onClick={handleSubmitFavorite}>
        Ajouter à mes favoris
      </button>
      <button type="button" onClick={handleSubmitDelete}>
        Supprimer de ma BDthèque
      </button>
    </div>
  );
}

export default DetailCard;

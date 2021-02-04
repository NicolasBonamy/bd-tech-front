import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import style from "./DetailCard.module.css";

function DetailCard(props) {
  const [hideInput, setHideInput] = useState(true);
  const [coverSrc, setCoverSrc] = useState("");
  const { id, title, cover_src, favorite } = props;
  const { REACT_APP_SERVER_ADDRESS } = process.env;

  const openInput = () => {
    setHideInput(!hideInput);
  };

  const coverSrcChange = (e) => {
    setCoverSrc(e.target.value);
  };

  const handleSubmitCover = () => {
    axios
      .put(
        `${REACT_APP_SERVER_ADDRESS}/users/${localStorage.getItem(
          "pseudoBDid"
        )}/books/${id}/cover`,
        {
          cover_src: coverSrc,
        }
      )
      .then((res) => res.data)
      .then((data) =>
        console.log(
          data,
          `${REACT_APP_SERVER_ADDRESS}/users/${localStorage.getItem(
            "pseudoBDid"
          )}/books/${id}/cover`
        )
      );
    setHideInput(true);
    setCoverSrc("");
  };

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
      <Link to={`/bd/${id}`} id={id} >
        <img className={style.BookCover} src={cover_src} alt={title}/>
      </Link>
      <h2>{title}</h2>
      <button type="button" onClick={openInput}>
        Changer la couverture
      </button>
      <input
        type="input"
        className={
          hideInput ? `${style.InputCoverHidden}` : `${style.InputCover}`
        }
        value={coverSrc}
        onChange={coverSrcChange}
      />
      <button
        type="button"
        className={
          hideInput ? `${style.ButtonCoverHidden}` : `${style.ButtonCover}`
        }
        onClick={handleSubmitCover}
      >
        Envoyer
      </button>
      <button type="button" onClick={handleSubmitFavorite}>
        {favorite? "Retirer de mes favoris":"Ajouter à mes favoris"}
      </button>
      <button type="button" onClick={handleSubmitDelete}>
        Supprimer de ma BDthèque
      </button>
    </div>
  );
}

export default DetailCard;

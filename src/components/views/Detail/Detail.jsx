import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Header from "../../commons/Header/Header";
import style from "./Detail.module.css";

function Detail(props) {
  const [book, setBook] = useState([]);
  const id = props.match.params.id;
  useEffect(() => {
    const { REACT_APP_SERVER_ADDRESS } = process.env;
    axios
      .get(`${REACT_APP_SERVER_ADDRESS}/books/${id}`)
      .then((res) => res.data)
      .then((data) => {
        setBook(data);
      });
  }, [id]);

  return (
    <div>
      {book && book.length > 0 && (
        <div>
          <Header />
          <Link to="/">
            <h3>{localStorage.getItem("pseudoBD")}</h3>
          </Link>
          <div className={style.Detail}>
            <img src={book[0].cover_src} alt={book[0].title} />
            <div>
              <h2>{book[0].title}</h2>
              <p>Nombre de pages : {book[0].page_count}</p>
              <p>
                Date de publication : {book[0].published_date.split("T")[0]}
              </p>
              <Link to="/bd" className={style.Link}>
                Retour à ma collection
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

Detail.propTypes = {
  Object: PropTypes.object,
};

export default Detail;

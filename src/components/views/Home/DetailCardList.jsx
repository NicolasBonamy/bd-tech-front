import React, { useState, useEffect } from "react";
import axios from "axios";
import style from "./DetailCardList.module.css";
import DetailCard from "./DetailCard";

function DetailCardList() {
  const [books, setBooks] = useState([]);
  const [hideInput, setHideInput] = useState(true);
  const [ISBN, setISBN] = useState("");
  const [ISBNBook, setISBNBook] = useState("");

  useEffect(() => {
    const psId = localStorage.getItem("pseudoBDid");
    const { REACT_APP_SERVER_ADDRESS } = process.env;
    axios
      .get(`${REACT_APP_SERVER_ADDRESS}/users/${psId}/books`)
      .then((res) => res.data)
      .then((data) => {
        setBooks(data);
      });
  }, []);

  const openInput = () => {
    setHideInput(!hideInput);
  };

  const ISBNChange = (e) => {
    setISBN(e.target.value);
  };

  const handleSubmitISBN = () => {
    const psId = localStorage.getItem("pseudoBDid");
    const { REACT_APP_SERVER_ADDRESS } = process.env;
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${ISBN}`)
      .then((res) => res.data)
      .then((data) => {
        setISBNBook(data);
        console.log(data);
        axios.post(`${REACT_APP_SERVER_ADDRESS}/users/${psId}/books`,
        {
          "title": data.items[0].volumeInfo.title,
          "published_date": data.items[0].volumeInfo.publishedDate,
          "cover_src": `https://couverture.geobib.fr/api/v1/${ISBN}/medium`,
          "page_count": data.items[0].volumeInfo.pageCount,
          "author_id": 4,
          "user_id": psId
      })
        setHideInput(true);
        setISBN("");
      });
  };

  return (
    <div className={style.DetailCardList}>
      <ul className={style.CardList}>
        {books.map((book, index) => {
          return (
            <li key={index}>
              <DetailCard {...book} />
            </li>
          );
        })}
      </ul>
      <button type="button" onClick={openInput}>
        Ajouter un livre par son ISBN
      </button>
      <input
        type="input"
        id="isbn"
        name="isbn"
        className={
          hideInput ? `${style.InputISBNHidden}` : `${style.InputCover}`
        }
        value={ISBN}
        onChange={ISBNChange}
      />
      <button
        type="button"
        className={
          hideInput ? `${style.ButtonISBNHidden}` : `${style.ButtonCover}`
        }
        onClick={handleSubmitISBN}
      >
        Envoyer
      </button>
    </div>
  );
}

export default DetailCardList;

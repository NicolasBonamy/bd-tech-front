import React, { useState, useEffect } from "react";
import axios from "axios";
import style from './DetailCardList.module.css';
import DetailCard from "./DetailCard";

function DetailCardList() {
  const [books, setBooks] = useState([]);
  

  useEffect(() => {
    const psId = localStorage.getItem("pseudoBDid")
    const { REACT_APP_SERVER_ADDRESS } = process.env;
    axios
      .get(`${REACT_APP_SERVER_ADDRESS}/users/${psId}/books`)
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
        setBooks(data);
      });
  },[books]);

  return (
    <div className={style.DetailCardList}>
      <ul className={style.CardList}>
        {books.map((book, id) => {
          return (
            <li key={id}>
              <DetailCard {...book} id={id} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default DetailCardList;
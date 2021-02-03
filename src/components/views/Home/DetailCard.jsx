import React from 'react';
import style from './DetailCard.module.css';

function DetailCard(props) {
    const { id, title, cover_src } = props;
    return (
        <div className={style.Card}>
            <img className={style.BookCover} src={cover_src} alt={title}/>
            <p>{title}</p>
        </div>
    );
};

export default DetailCard

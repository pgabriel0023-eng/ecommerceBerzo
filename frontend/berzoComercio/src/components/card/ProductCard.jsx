import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';
import styles from './ProductCard.module.scss';

export function ProductCard(props) {
  return (
    <article className={styles.card}>
      <Link to={`/details/${props.id}`} className={styles.linkImg}>
        <img
          src={props.imagem}
          alt='imagem do produto'
          className={styles.cardImg}
        />
      </Link>
      <p className={styles.cardInfoOne}>{props.marca}</p>
      <p className={styles.cardInfoTwo}>{props.nome}</p>
      <p className={styles.cardInfoThree}>{props.preco}</p>
      <button className={styles.btnAdd}>
        <MdAddShoppingCart color='white' size={20} />
      </button>
    </article>
  );
}

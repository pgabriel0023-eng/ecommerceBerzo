import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import styles from './ProductCard.module.scss';

export function ProductCard(props) {
  return (
    <article className={styles.card}>
      <img
        src={props.imagem}
        alt='imagem do produto'
        className={styles.cardImg}
      />
      <p className={styles.cardInfoOne}>{props.marca}</p>
      <p className={styles.cardInfoTwo}>{props.nome}</p>
      <p className={styles.cardInfoThree}>{props.preco}</p>
      <button className={styles.btnAdd}>
        <MdAddShoppingCart color='white' /> Comprar
      </button>
    </article>
  );
}

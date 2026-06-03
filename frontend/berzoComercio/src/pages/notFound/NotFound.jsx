import React from 'react';
import styles from './NotFound.module.scss';
import { FaRegSadCry } from 'react-icons/fa';
import { Link } from 'react-router';

export function NotFound() {
  return (
    <div className={styles.container}>
      <FaRegSadCry size={50} />
      <h1>404 - Página não encontrada!</h1>
      <p>Ooops! Parece que esta rota não existe</p>
      <Link to='/'>Voltar</Link>
    </div>
  );
}

import React from 'react';
import styles from './Footer.module.scss';

export function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p>&copy; {anoAtual} Berzo. Todos os direitos reservados.</p>
    </footer>
  );
}

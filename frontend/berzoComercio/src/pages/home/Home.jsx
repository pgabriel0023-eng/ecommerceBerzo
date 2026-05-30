import React from 'react';
import baner from '../../assets/banerHome.jpg';
import skate from '../../assets/skate.jpg';
import { Catalogo } from '../grade/gradecard/ProductContainer';
import styles from './Home.module.scss';

export function Home() {
  return (
    <>
      <main className={styles.main}>
        <section className={styles.banerContainer}>
          <img src={baner} alt='baner home' className={styles.banerImg} />
        </section>

        <section className={styles.about}>
          <div className={styles.aboutContainer}>
            <h2>Seja Berzo</h2>
            <p>
              Berzo não é simplesmente mais uma marca, mas uma forma de
              expressar as ruas do mundo real. Explorar cada beco, cada praça,
              cada parque. Não queremos que compre somente por moda, mas que
              compre sabendo que a Berzo sempre estará com você em todos os
              momentos.
            </p>
          </div>
          <div className={styles.aboutImgWrapper}>
            <img src={skate} alt='img sobre' className={styles.aboutImg} />
          </div>
        </section>

        <section className={styles.gradeProducts}>
          <div className={styles.gradeContainer}>
            <Catalogo />
          </div>
        </section>
      </main>
    </>
  );
}

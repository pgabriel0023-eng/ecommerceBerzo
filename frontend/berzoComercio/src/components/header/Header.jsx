import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import logo from '../../assets/Berzo.png';
import { Link } from 'react-router-dom';
import { UserButtons } from '../buttons/UserButtons';

import styles from './Header.module.scss';

export function Header() {
  const [busca, setBusca] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (busca.trim() !== '') {
      console.log('Usuário está buscando por: ', busca);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.supBar}>
          <Link to='/'>
            <img src={logo} alt='logo berzo' className={styles.imgLogo} />
          </Link>

          <form onSubmit={handleSearch}>
            <input
              type='text'
              placeholder='O que está buscando hoje?'
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              className={styles.searchInput}
            />
            <button type='submit' className={styles.searchBtn}>
              <FiSearch size={20} />
            </button>
          </form>

          <UserButtons />
        </div>

        <div className={styles.navBar}>
          <nav>
            <ul>
              <li>
                <Link to='/camiseta'>Camiseta</Link>
              </li>
              <li>
                <Link to='/moletom'>Moletom</Link>
              </li>
              <li>
                <Link to='/jaqueta'>Jaqueta</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

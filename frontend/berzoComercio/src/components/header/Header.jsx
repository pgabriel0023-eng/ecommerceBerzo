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
      Navigate(`/?search=${encodeURIComponente(busca.trim())}`);
      setBusca('');
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.supBar}>
          <Link to='/'>
            <img src={logo} alt='logo berzo' className={styles.imgLogo} />
          </Link>

          <nav className={styles.navBar}>
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

          <UserButtons />
        </div>
      </div>
    </header>
  );
}

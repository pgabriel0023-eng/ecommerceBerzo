import React from 'react';
import { Link } from 'react-router';
import { FiShoppingCart } from 'react-icons/fi';
import { IoPersonOutline } from 'react-icons/io5';
import styles from './UserButtons.module.scss';

export function UserButtons() {
  return (
    <div className={styles.btns}>
      <button>
        <FiShoppingCart />
      </button>
      <Link to='/login'>
        <IoPersonOutline />
      </Link>
    </div>
  );
}

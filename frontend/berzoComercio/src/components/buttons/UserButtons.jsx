import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { IoPersonOutline } from 'react-icons/io5';
import styles from './UserButtons.module.scss';

export function UserButtons() {
  return (
    <div className={styles.btns}>
      <button>
        <FiShoppingCart />
      </button>
      <a>
        <IoPersonOutline />
      </a>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router';
import { InputField } from '../../components/inputField/InputField';
import styles from './Register.module.scss';

export function Register() {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h2 className={styles.title}>Cadastro</h2>

        <InputField
          label='Nome'
          id='name'
          type='text'
          name='name'
          autoComplete='user-name'
          register={() => {}}
        />

        <InputField
          label='Email'
          id='email'
          type='email'
          name='email'
          autoComplete='email'
          register={() => {}}
        />

        <InputField
          label='Senha'
          id='password'
          type='password'
          name='password'
          autoComplete='new-password'
          register={() => {}}
        />

        <InputField
          label='Confirmar Senha'
          id='confirmePassword'
          type='password'
          name='confirmePassword'
          autoComplete='new-password'
          register={() => {}}
        />

        <button type='submit' className={styles.btn}>
          Cadastrar
        </button>

        <p className={styles.ask}>
          Já tem conta?{' '}
          <Link to='/login' className={styles.loginBtn}>
            Faça Login
          </Link>
        </p>
      </form>
    </div>
  );
}

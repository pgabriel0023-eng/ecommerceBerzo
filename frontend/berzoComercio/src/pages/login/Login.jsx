import React from 'react';
import styles from './Login.module.scss';
import { Link } from 'react-router';
import { InputField } from '../../components/inputField/InputField';

export function Login() {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h2 className={styles.title}>Login</h2>

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
          autoComplete='current-password'
          register={() => {}}
          error='Erro'
        />

        <button type='submit' className={styles.btn}>
          Entrar
        </button>

        <p className={styles.ask}>
          Não tem conta?{' '}
          <Link to='/register' className={styles.registerBtn}>
            Cadastrar
          </Link>
        </p>
      </form>
    </div>
  );
}

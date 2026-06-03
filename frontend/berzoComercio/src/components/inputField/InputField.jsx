import React from 'react';
import styles from './InputField.module.scss';

export function InputField({
  label,
  type,
  name,
  autoComplete,
  error,
  register,
}) {
  return (
    <div className={styles.container}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>

      <input
        type={type}
        id={name}
        autoComplete={autoComplete}
        {...register(name)}
        className={`${styles.inputBase} ${error ? styles.inputError : styles.inputSucess}`}
      />
      {error && <p className={styles.errorMessage}>{error.message}</p>}
    </div>
  );
}

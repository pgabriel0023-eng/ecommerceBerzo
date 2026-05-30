import React, { useState, useEffect } from 'react';
import { ProductCard } from '../card/ProductCard';
import styles from './ProductContainer.module.scss';

export function Catalogo() {
  //trazendo o backend
  const [produtos, setProdutos] = useState([]);
  useEffect(() => {
    const url = 'http://localhost:3000/berzo/produtos/';

    fetch('https://ecommerceberzo.onrender.com/berzo/produtos/')
      .then((resposta) => resposta.json())
      .then((dados) => {
        setProdutos(dados);
      })
      .catch((erro) => console.error('Erro ao buscar produtos:', erro));
  }, []);

  return (
    <section className={styles.container}>
      {/* Percorre o array de produtos e renderiza um card para cada um */}
      {produtos.map((produto) => (
        <ProductCard
          key={produto.id}
          imagem={produto.imagem}
          marca={produto.marca}
          nome={produto.nome}
          preco={produto.preco}
        />
      ))}
    </section>
  );
}

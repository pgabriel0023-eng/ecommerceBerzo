import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Details.module.scss';

export function Details() {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    console.log('O ID capturado da URL é:', id);
    fetch(`http://localhost:3000/berzo/produtos/produto/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('Produto não encontrado');
        return res.json();
      })
      .then((data) => setProduto(data))
      .catch((err) => setErro(err.message));
  }, [id]);

  if (erro) return <p>{erro}</p>;
  if (!produto) return <p>Carregando...</p>;

  return (
    <section className={styles.section}>
      <div className={styles.containerEx}>
        <div className={styles.containerImg}>
          <img src={produto.imagem} alt={produto.nome} />
        </div>
        <div className={styles.containerInfo}>
          <h1>{produto.nome}</h1>
          <p>Categoria: {produto.categoria}</p>
          <p>Gênero: {produto.genero}</p>
          <p>Preço: {produto.preco}</p>
          <button>Comprar</button>
        </div>
      </div>
    </section>
  );
}

import express from 'express';
import cors from 'cors';
import { produtos } from './data.js';

// operador do express e cors para react
const app = express();
app.use(cors());

// rota base
const baseAPIRoute = '/berzo/produtos';

//lista de todos os produtos
app.get(baseAPIRoute + '/', (req, res) => {
  res.status(200).send(produtos);
});

// procura por nome ou tipo (searchBar)
app.get(baseAPIRoute + '/busca', (req, res) => {
  const { termo } = req.query;

  if (!termo || termo.trim() === '') {
    return res.status(400).json({ mensagem: 'Digite algo para buscar.' });
  }

  const termoMinusculo = termo.toLowerCase().trim();

  const produtosEncontrados = produtos.filter(
    (p) =>
      p.nome.toLowerCase().includes(termoMinusculo) ||
      p.categoria.toLowerCase() === termoMinusculo
  );

  if (produtosEncontrados.length === 0) {
    return res.status(404).json({ mensagem: 'Nenhum produto encontrado.' });
  }

  res.status(200).json(produtosEncontrados);
});

// procura por genero (botao)
app.get(baseAPIRoute + '/genero', (req, res) => {
  const { genero } = req.query;

  if (genero) {
    const roupasFiltradas = produtos.filter(
      (g) => g.genero.toLowerCase() === genero.toLowerCase()
    );
    return res.status(200).json(roupasFiltradas);
  }

  res.status(400).json({ message: 'Por favor, informe o gênero no filtro.' });
});

// procura por ID
app.get(baseAPIRoute + '/busca/:id', (req, res) => {
  const { id } = req.params;

  const produtoEncontrado = produtos.find((p) => p.id === Number(id));
  if (produtoEncontrado) {
    return res.status(200).json(produtoEncontrado);
  }

  res.status(404).json({ mensagem: 'Produto não encontrado!' });
});

// porta de operação
const port = 3000;
app.listen(port, () => console.log(`API rodando com sucesso`));

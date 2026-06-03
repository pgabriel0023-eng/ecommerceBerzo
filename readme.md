# ProjetoBerzo - E-commerce

Um e-commerce de moda streetwear completo, composto por uma API REST desenvolvida em Node.js com Express e uma interface SPA desenvolvida em React com Vite.

## Links do Projeto

- **Frontend (Aplicação):** [https://ecommerce-berzo.vercel.app/]
- **Backend (API):** [https://ecommerceberzo.onrender.com/berzo/produtos/]

---

## Tecnologias Utilizadas

### Backend

- **Node.js** - Ambiente de execução Javascript.
- **Express** - Framework web para estruturação das rotas da API.
- **CORS** - Compartilhamento de recursos de origens diferentes para comunicação com o Frontend.

### Frontend

- **React** - Biblioteca Javascript para construção da interface.
- **Vite** - Ferramenta de build e ambiente de desenvolvimento rápido.
- **React Router (v7)** - Gerenciamento de rotas e navegação SPA.
- **SASS (SCSS Modules)** - Estilização encapsulada por componente com pré-processador.
- **React Icons** - Conjunto de pacotes de ícones utilizados na interface.

---

## Estrutura do Projeto

```text
PROJETOBERZO
├── backend/
│   ├── app.js         # Configuração do Express e rotas da API
│   └── data.js        # Banco de dados simulado (Mock de produtos)
└── frontend/
    └── berzoComercio/
        ├── public/    # Imagens e arquivos públicos
        └── src/
            ├── assets/# Imagens locais e logo
            ├── components/ # Componentes reutilizáveis (Card, Header, Footer, Input)
            ├── pages/ # Páginas (Home, Details, Login, Register, Layout)
            ├── routes/# Configuração de rotas (AppRoutes.jsx)
            ├── App.jsx
            └── main.jsx
```

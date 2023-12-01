// Importação das bibliotecas React e ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client';

// Importação do arquivo de estilos global
import "./style/global.css";

// Importação do componente Rotas
import Rotas from './rotas.js';

// Criação de uma raiz de renderização para o aplicativo React
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderização do componente Rotas dentro da raiz de renderização
root.render(
  <>
    <Rotas />
  </>
);

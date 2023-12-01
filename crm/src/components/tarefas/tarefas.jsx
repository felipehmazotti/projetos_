// Importa o React e o hook useState do React
import React, { useState } from "react";

// Importa os componentes Menu e Busca de seus respectivos arquivos
import Menu from "../menu/menu";
import Busca from "../busca/busca";

// Declaração do componente funcional Tarefas
const Tarefas = () => {
  // Declaração de estados utilizando o hook useState
  const [tarefas, setTarefas] = useState([]); // Armazena a lista de tarefas
  const [novaTarefa, setNovaTarefa] = useState(""); // Armazena a nova tarefa a ser adicionada
  const [tarefaEditando, setTarefaEditando] = useState(null); // Armazena o ID da tarefa em edição
  const [textoTarefaEditando, setTextoTarefaEditando] = useState(""); // Armazena o texto da tarefa em edição

  // Função para adicionar uma nova tarefa à lista
  const adicionarTarefa = () => {
    if (novaTarefa.trim() !== "") {
      if (tarefaEditando === null) {
        // Adiciona uma nova tarefa à lista com um ID único baseado no timestamp
        setTarefas([...tarefas, { id: Date.now(), texto: novaTarefa }]);
      } else {
        // Edita uma tarefa existente na lista
        const novasTarefas = [...tarefas];
        const index = novasTarefas.findIndex((tarefa) => tarefa.id === tarefaEditando);
        novasTarefas[index].texto = textoTarefaEditando;
        setTarefas(novasTarefas);
        setTarefaEditando(null);
        setTextoTarefaEditando("");
      }
      setNovaTarefa("");
    }
  };

  // Função para remover uma tarefa da lista
  const removerTarefa = (id) => {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
  };

  // Função para iniciar a edição de uma tarefa
  const editarTarefa = (id) => {
    const tarefa = tarefas.find((tarefa) => tarefa.id === id);
    setTarefaEditando(id);
    setTextoTarefaEditando(tarefa.texto);
    setNovaTarefa(tarefa.texto);
  };

  // Renderização do componente Tarefas
  return (
    <div>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0">
            {/* Renderiza o componente Menu passando a propriedade page com o valor "tarefas" */}
            <Menu page="tarefas" />
          </div>

          <div className="col py-3 me-3">
            <div className="mb-5">
              {/* Renderiza o componente Busca passando a propriedade texto com o valor "Busca por Negócios" */}
              <Busca texto="Busca por Negócios" />
            </div>

            <div className="d-flex justify-content-between">
              <div>
                <h1>Lista de Tarefas</h1>

                <div>
                  {/* Input para digitar uma nova tarefa */}
                  <input
                    type="text"
                    value={novaTarefa}
                    onChange={(e) => setNovaTarefa(e.target.value)}
                  />
                  {/* Botão para adicionar ou salvar a tarefa dependendo se está em modo de edição */}
                  <button onClick={adicionarTarefa}>
                    {tarefaEditando === null ? "Adicionar Tarefa" : "Salvar"}
                  </button>
                </div>

                {/* Lista de tarefas renderizada como elementos de lista (ul, li) */}
                <ul>
                  {tarefas.map((tarefa) => (
                    <li key={tarefa.id}>
                      {/* Condicional para renderizar input de edição ou texto simples */}
                      {tarefa.id === tarefaEditando ? (
                        <input
                          type="text"
                          value={textoTarefaEditando}
                          onChange={(e) => setTextoTarefaEditando(e.target.value)}
                        />
                      ) : (
                        tarefa.texto
                      )}
                      {/* Botões para editar e remover a tarefa */}
                      <button onClick={() => editarTarefa(tarefa.id)}>
                        Editar
                      </button>
                      <button onClick={() => removerTarefa(tarefa.id)}>
                        Remover
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Exporta o componente Tarefas como padrão
export default Tarefas;

// Importação de componentes necessários
import Busca from "../../components/busca/busca.jsx";
import Menu from "../../components/menu/menu.jsx"; 

// Definição do componente funcional Negocio
function Negocio(){
    // O componente retorna JSX (um fragmento React)
  return <>
 {/* Bootstrap container para layout responsivo */}
 <div className="container-fluid">
      {/* Bootstrap row com layout flexível não quebrável */}
      <div className="row flex-nowrap">
        {/* Coluna da barra lateral (Menu) */}
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0">
          {/* Inclusão do componente Menu com a prop page="negocio" */}
          <Menu page="negocio" />
        </div>

        {/* Coluna do conteúdo principal */}
        <div className="col py-3 me-3">
          {/* Margem para o conteúdo inteiro */}
          <div className="mb-5">
            {/* Inclusão do componente Busca com a prop texto="Busca por Negócios" */}
            <Busca texto="Busca por Negócios" />
          </div>

          {/* Caixa de conteúdo com fundo branco, bordas arredondadas e sombra */}
          <div className="bg-white p-4 rounded-4 border">
            {/* Flex container com espaçamento entre itens */}
            <div className="d-flex justify-content-between mb-3">
              {/* Container de título e seleção de etapa */}
              <div className="d-inline-flex">
                {/* Título com estilo de cor específico */}
                <h2 style={{ color: 'black' }}>Negocios...</h2>

                {/* Seleção de etapa usando um elemento de formulário */}
                <div className="form-control ms-4">
                  <select name="etapa" id="etapa">
                    {/* Opções da seleção de etapa */}
                    <option value="0">Etapa</option>
                    <option value="Prospecção">Prospecção</option>
                    <option value="Proposta">Proposta</option>
                  </select>
                </div>
              </div>

              {/* Botão para adicionar novo negócio */}
              <button className="btn btn-primary ms-4 ms-2"><i class="bi bi-plus-lg me-2"></i>Novo Negócio</button>
            </div>
          </div>

          {/* Bootstrap row vazia para possível conteúdo futuro */}
          <div className="row">

          </div>
        </div>
      </div>
    </div>
  </>
}

// Exporta o componente Negocio como padrão para uso em outros arquivos
export default Negocio;
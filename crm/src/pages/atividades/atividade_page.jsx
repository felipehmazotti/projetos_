import Busca from "../../components/busca/busca.jsx"; /* importação do busca */
import Menu from "../../components/menu/menu.jsx"; /* importação do menu */

// Define a functional component named Page_Atividades
function Page_Atividades() {
    // The component returns JSX (a React fragment)
    return <>
        <div>
            {/* Contêiner Bootstrap para layout responsivo */}
            <div className="container-fluid">
                {/* Bootstrap row with flexible non-wrapping layout */}
                <div className="row flex-nowrap">
                    {/* Coluna da barra lateral */}
                    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0">
                        {/* Incluir um componente Menu com a propriedade page definida como "atividades" */}
                        <Menu page="atividades" />
                    </div>
                    {/* Main content column */}
                    <div className="col py-3 me-3">
                        {/* Margem para todo o conteúdo */}
                        <div className="mb-5">
                            {/* Incluir um componente Busca com a propriedade texto definida como "Busca por Negócios" */}
                            <Busca texto="Busca por Negócios" />
                        </div>
                    {/* Container flexível com espaço entre os itens */}
                        <div className="d-flex justify-content-between">
                            {/* Cabeçalho com estilo in-line para cor preta */}
                            <h2 style={{ color: 'black' }}>Atividades...</h2>
                        </div>

                    </div>
                </div>
            </div>

        </div>

    </>
}

// Exporta o componente para disponibilizá-lo para importação em outros arquivos
export default Page_Atividades;
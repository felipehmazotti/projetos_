//Importando componentes necessários
import Menu from "../../components/menu/menu.jsx"; /*importação do menu */
import Busca from "../../components/busca/busca.jsx"; /*importação do busca */
import Indicador from "../../components/indicador/indicador.jsx"; /*importação do indicador */
import Grafico from "../graficos/grafico.jsx"; /*importação do grafcio */

// Define um componente funcional chamado Dashboard
function Dashboard() {
    // O componente retorna JSX (um fragmento React)
    return <>
    {/* Contêiner Bootstrap para layout responsivo */}
        <div className="container-fluid">
            {/* Linha de bootstrap com layout flexível e sem quebra automática */}
            <div className="row flex-nowrap">
                {/* Coluna da barra lateral */}
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0">
                    {/* Incluir um componente Menu com a propriedade page definida como "dashboard" */}
                    <Menu page="dashboard" />
                </div>


                {/* Coluna de conteúdo principal */}
                <div className="col py-3 me-3">
                    {/* Margem para todo o conteúdo */}
                    <div className="mb-5">
                        {/* Incluir um componente Busca com a propriedade texto definida como "Busca por Negócios" */}
                        <Busca texto="Busca por Negócios" />
                    </div>


                  {/* Container flexível com espaço entre os itens */}
                    <div className="d-flex justify-content-between">
                        {/* Cabeçalho */}
                        <h1>Dashboard...</h1>
                        {/* Botão para atualização */}
                        <button className="btn btn-primary ms-4">Atualizar</button>
                    </div>

                  
                  {/* Linha de bootstrap para indicadores e gráfico */}
                    <div className="row">
                        {/* Coluna para o primeiro indicador */}
                        <div className="col-md-3 mt-4">
                            {/* Incluir um componente Indicador com adereços específicos */}
                            <Indicador titulo="Negócios do Mês"
                                valor="R$19.000,00"
                                rodape="12 atividades" />
                        </div>

                    
                    {/* Coluna para o segundo indicador */}
                        <div className="col-md-3 mt-4">
                            {/* Incluir um componente Indicador com adereços específicos */}
                            <Indicador titulo="Atividades para Hoje"
                                valor="6 atividades"
                                rodape="R$3.150,00" />
                        </div>

                    
                    {/* Coluna de largura total do gráfico */}
                        <div className="col-md-12 mt-5">
                            {/* Incluir um componente Grafico com adereços específicos */}
                            <Grafico titulo="Vendas Anual"
                                chartType="Line" />
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </>
}

// Exporta o componente para disponibilizá-lo para importação em outros arquivos
export default Dashboard;
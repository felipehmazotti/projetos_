import React, { useState, useEffect } from "react";
import axios from "axios";
import Busca from "../../components/busca/busca";
import Menu from "../../components/menu/menu";


// Definição do componente funcional Previsao
const Previsao = () => {
    // Utilização do estado para armazenar os dados da previsão do tempo
    
    
const [previsao, setPrevisao] = useState(null);
    
    // Chave de API para acessar a OpenWeatherMap
    const apiKey = "4351ef854778735fdb9a22597cfcb6e3";

    // Efeito colateral que dispara a requisição à API ao montar o componente
    useEffect(() => {
        const cidade = "Votuporanga";
        const pais = "br";

        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cidade},${pais}&appid=${apiKey}`;

        // Requisição à API utilizando a biblioteca axios
        axios
            .get(apiUrl)
            .then((response) => {
                setPrevisao(response.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar previsão do tempo:", error);
            });
    }, []);

    // Verificação se os dados da previsão foram carregados
    if (!previsao) {
        return <div>Carregando...</div>;
    }

     // Mapeamento de condições meteorológicas
     const traducaoCondicoes = {
        clear: "Limpo",
        clouds: "Nublado",
        rain: "Chuva",
        "broken clouds": "Parcialmente nublado",
        "scattered clouds": "Nuvens dispersas",
        "few clouds": "Poucas nuvens",
        "overcast clouds": "Nublado",
        // Adicione mais traduções conforme necessário
    };

    // Tradução da condição meteorológica
    const condicaoTraduzida = traducaoCondicoes[previsao.weather[0].description.toLowerCase()] || previsao.weather[0].description;

    let converter = previsao.main.temp-273.15;
    let arredondar = Math.round(converter)

    return (
        <div>
            {/* Bootstrap container para layout responsivo */}
            <div className="container-fluid">
                {/* Bootstrap row com layout flexível não quebrável */}
            <div className="row flex-nowrap">
                {/* Coluna da barra lateral (Menu) */}
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0">
                    {/* Inclusão do componente Menu com a prop page="previsao" */}
                    <Menu page="previsao" />
                </div>


                {/* Coluna do conteúdo principal */}
                <div className="col py-3 me-3">
                    {/* Margem para o conteúdo inteiro */}
                    <div className="mb-5">
                    {/* Inclusão do componente Busca com a prop texto="Busca por Negócios" */}
                        <Busca texto="Busca por Negócios" />
                    </div>


            {/* Div para exibir informações da previsão do tempo */}
                    <div className="">   
            <h2>Previsão do Tempo</h2>
            <p>Cidade: {previsao.name}</p>
            <p>Temperatura: {arredondar} °C</p>
            <p>Condição: {condicaoTraduzida}</p></div></div></div></div>
        </div>
    );
};

// Exporta o componente Previsao como padrão para uso em outros arquivos
export default Previsao;
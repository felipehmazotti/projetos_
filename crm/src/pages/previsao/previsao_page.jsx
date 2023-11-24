import React, { useState, useEffect } from "react";
import axios from "axios";
import Busca from "../../components/busca/busca";
import Menu from "../../components/menu/menu";


const Previsao = () => {
    const [previsao, setPrevisao] = useState(null);
    const apiKey = "4351ef854778735fdb9a22597cfcb6e3"; 

    useEffect(() => {
        const cidade = "Votuporanga";
        const pais = "br";

        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cidade},${pais}&appid=${apiKey}`;

        axios
            .get(apiUrl)
            .then((response) => {
                setPrevisao(response.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar previsão do tempo:", error);
            });
    }, []);

    if (!previsao) {
        return <div>Carregando...</div>;
    }

    let converter = previsao.main.temp-273.15;
    let arredondar = Math.round(converter)

    return (
        <div>
            <div className="container-fluid">
            <div className="row flex-nowrap">
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0">
                    <Menu page="previsao" />
                </div>

                <div className="col py-3 me-3">
                    <div className="mb-5">
                        <Busca texto="Busca por Negócios" />
                    </div>

                    <div className="">  
            <h2>Previsão do Tempo</h2>
            <p>Cidade: {previsao.name}</p>
            <p>Temperatura: {arredondar} °C</p>
            <p>Condição: {previsao.weather[0].description}</p></div></div></div></div>
        </div>
    );
};

export default Previsao;
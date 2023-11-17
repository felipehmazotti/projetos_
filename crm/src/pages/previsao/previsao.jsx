import React, { useState, useEffect } from "react";
import axios from "axios";

const Previsao = () => {
  const [previsao, setPrevisao] = useState(null);
  const apiKey = "4351ef854778735fdb9a22597cfcb6e3";

  useEffect(() => {
    const cidade = "VOTUPORANGA";
    const pais = "BR";

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

  // Convertendo a temperatura de Fahrenheit para Celsius
  const tempCelsius = (previsao.main.temp - 273.15).toFixed(2);
  let arrendondar = Math.round(tempCelsius);

  return (
    <div>
      <h2>Previsão do Tempo</h2>
      <p>Cidade: {previsao.name}</p>
      <p>Temperatura: {tempCelsius}°C ou aproximadamente {arrendondar}°C</p>
      <p>Condição: {previsao.weather[0].description}</p>
    </div>
  );
};

export default Previsao;
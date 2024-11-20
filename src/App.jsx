import { useState } from "react";
import "./App.css";

function App() {
  const [valor, setValor] = useState("");
  const [moedaOrigem, setMoedaOrigem] = useState("USD");
  const [moedaDestino, setMoedaDestino] = useState("BRL");
  const [resultado, setResultado] = useState("");

  const taxasDeConversao = {
    USD: { BRL: 5.0, EUR: 0.85, GBP: 0.75, JPY: 150.0, ARS: 350.0 },
    BRL: { USD: 0.2, EUR: 0.17, GBP: 0.15, JPY: 30.0, ARS: 70.0 },
    EUR: { USD: 1.18, BRL: 5.9, GBP: 0.88, JPY: 170.0, ARS: 400.0 },
    GBP: { USD: 1.33, BRL: 6.7, EUR: 1.14, JPY: 200.0, ARS: 450.0 },
    JPY: { USD: 0.007, BRL: 0.033, EUR: 0.0059, GBP: 0.005, ARS: 2.2 },
    ARS: { USD: 0.003, BRL: 0.014, EUR: 0.0025, GBP: 0.0022, JPY: 0.45 },
  };

  const converterMoeda = () => {
    if (!valor) return alert("Digite um valor!");
    const taxa = taxasDeConversao[moedaOrigem][moedaDestino];
    const convertido = parseFloat(valor) * taxa;
    setResultado(convertido.toFixed(2));
  };

  return (
    <div className="app">
      <h1>conversor de moedas</h1>
      <div>
        <label htmlFor="valor">valor: </label>
        <input
          type="number"
          id="valor"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          placeholder="ex: 100"
        />
      </div>
      <div>
        <label htmlFor="moedaOrigem">de: </label>
        <select
          id="moedaOrigem"
          value={moedaOrigem}
          onChange={(e) => setMoedaOrigem(e.target.value)}
        >
          <option value="USD">Dólar (USD)</option>
          <option value="BRL">Real (BRL)</option>
          <option value="EUR">Euro (EUR)</option>
          <option value="GBP">Libra (GBP)</option>
          <option value="JPY">Iene (JPY)</option>
          <option value="ARS">Peso (ARS)</option>
        </select>
      </div>
      <div>
        <label htmlFor="moedaDestino">para: </label>
        <select
          id="moedaDestino"
          value={moedaDestino}
          onChange={(e) => setMoedaDestino(e.target.value)}
        >
          <option value="USD">Dólar (USD)</option>
          <option value="BRL">Real (BRL)</option>
          <option value="EUR">Euro (EUR)</option>
          <option value="GBP">Libra (GBP)</option>
          <option value="JPY">Iene (JPY)</option>
          <option value="ARS">Peso (ARS)</option>
        </select>
      </div>
      <button onClick={converterMoeda}>converter</button>
      {resultado && (
        <p>
          resultado: <strong>{resultado}</strong> {moedaDestino}
        </p>
      )}
    </div>
  );
}

export default App;

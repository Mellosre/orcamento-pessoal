import React, { useState } from 'react';
import './InitialBalance.css';

const InitialBalance = ({ onSetBalance }) => {
  const [balanceInput, setBalanceInput] = useState('');

  const handleInputChange = (event) => {
    setBalanceInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const balanceValue = parseFloat(balanceInput);
    if (!isNaN(balanceValue)) {
      onSetBalance(balanceValue);
      setBalanceInput(''); // Limpa o input após definir
    } else {
      alert('Por favor, insira um valor numérico válido.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="initial-balance-form">
      <input
        type="number"
        step="0.01"
        value={balanceInput}
        onChange={handleInputChange}
        placeholder="Digite o saldo inicial"
      />
      <button type="submit">Definir Saldo</button>
    </form>
  );
};

export default InitialBalance;
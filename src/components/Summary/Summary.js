import React from 'react';
import './Summary.css';

const Summary = ({ initialBalance, expenses }) => {
  // Calcula o total das transações (receitas e despesas)
  const totalTransactions = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  // Calcula o saldo atual
  const currentBalance = initialBalance + totalTransactions;

  const balanceClass = currentBalance >= 0 ? 'positive' : 'negative';

  return (
    <div className="summary-container">
      <h2>Saldo Atual</h2>
      <p className={`summary-balance ${balanceClass}`}>
        R$ {currentBalance.toFixed(2).replace('.', ',')}
      </p>
    </div>
  );
};

export default Summary;
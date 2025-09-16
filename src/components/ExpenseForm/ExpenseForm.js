import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  // Gerenciamento de Estado para os campos do formulário
  const [enteredDescription, setEnteredDescription] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');

  const descriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault(); // Impede o recarregamento da página

    // Validação simples
    if (enteredDescription.trim().length === 0 || enteredAmount.trim().length === 0) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const expenseData = {
      description: enteredDescription,
      amount: +enteredAmount, // Converte para número
      id: Math.random().toString(), // Gera um ID simples
    };

    // Props: Chama a função que veio do componente "pai" (App.js)
    props.onAddExpense(expenseData);

    // Limpa os campos após o envio
    setEnteredDescription('');
    setEnteredAmount('');
  };

  return (
    <form onSubmit={submitHandler} className="form-container">
      <div className="form-controls">
        <div className="form-control">
          <label>Descrição</label>
          <input
            type="text"
            value={enteredDescription}
            onChange={descriptionChangeHandler}
            placeholder="Ex: Salário, Conta de Luz"
          />
        </div>
        <div className="form-control">
          <label>Valor (use - para despesas)</label>
          <input
            type="number"
            value={enteredAmount}
            onChange={amountChangeHandler}
            placeholder="Ex: 500 ou -150"
          />
        </div>
      </div>
      <div className="form-actions">
        <button type="submit">Adicionar Transação</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
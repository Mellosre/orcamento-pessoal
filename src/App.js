import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm/ExpenseForm';
import ExpenseList from './components/ExpenseList/ExpenseList';
import Summary from './components/Summary/Summary';
import InitialBalance from './components/InitialBalance/InitialBalance'; // Importa o novo componente
import './App.css';

function App() {
  // Novo estado para o saldo inicial
  const [initialBalance, setInitialBalance] = useState(0);
  
  // Estado para as transações
  const [expenses, setExpenses] = useState([
    { id: 1, description: 'Salário (Exemplo)', amount: 5000 },
    { id: 2, description: 'Aluguel (Exemplo)', amount: -1500 },
  ]);

  // Função para definir o saldo inicial (vem do novo componente)
  const setBalanceHandler = (balance) => {
    setInitialBalance(balance);
  };

  // Função para adicionar uma nova transação
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // NOVA Função para remover uma transação
  const removeExpenseHandler = (expenseId) => {
    setExpenses((prevExpenses) => {
      // Filtra a lista, mantendo apenas os itens com ID diferente do que foi clicado
      return prevExpenses.filter(expense => expense.id !== expenseId);
    });
  };

  return (
    <div className="app-container">
      <h1>Orçamento Pessoal</h1>
      
      {/* Componente para definir o saldo inicial */}
      <InitialBalance onSetBalance={setBalanceHandler} />

      {/* Componente para o resumo do saldo */}
      <Summary initialBalance={initialBalance} expenses={expenses} />
      
      {/* Componente do formulário para adicionar transações */}
      <ExpenseForm onAddExpense={addExpenseHandler} />
      
      {/* Componente da lista de transações (agora com a função de remover) */}
      <ExpenseList items={expenses} onRemoveExpense={removeExpenseHandler} />
    </div>
  );
}

export default App;
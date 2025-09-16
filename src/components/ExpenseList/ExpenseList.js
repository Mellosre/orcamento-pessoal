import React from 'react';
import ExpenseItem from '../ExpenseItem/ExpenseItem'; // Importa o novo componente
import './ExpenseList.css';

const ExpenseList = ({ items, onRemoveExpense }) => {
  // Renderização Condicional: Se a lista estiver vazia, mostra uma mensagem.
  if (items.length === 0) {
    return <p className="list-fallback">Nenhuma transação registrada.</p>;
  }

  return (
    <ul className="list-container">
      {/* Mapeia o array de despesas para criar um item para cada uma */}
      {items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          id={expense.id}
          description={expense.description}
          amount={expense.amount}
          onRemove={onRemoveExpense} // Passa a função de remover para o item
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
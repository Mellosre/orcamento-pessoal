import React from 'react';
import './ExpenseItem.css';

const ExpenseItem = ({ id, description, amount, onRemove }) => {
  const amountClass = amount > 0 ? 'positive-amount' : 'negative-amount';

  const handleRemoveClick = () => {
    onRemove(id); // Chama a função de remover passando o ID do item
  };

  return (
    <li className="list-item">
      <span className="list-item-description">{description}</span>
      <div className="item-details">
        <span className={`list-item-amount ${amountClass}`}>
          {amount > 0 ? '+' : ''} R$ {amount.toFixed(2).replace('.', ',')}
        </span>
        <button onClick={handleRemoveClick} className="remove-btn">
          X
        </button>
      </div>
    </li>
  );
};

export default ExpenseItem;
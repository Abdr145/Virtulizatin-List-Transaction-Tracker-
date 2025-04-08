import React from "react";
import "../style.css";

function TransactionRow({ transaction, style }) {
  return (
    <div className={`row ${transaction.type}`} style={style}>
      <span>{transaction.date}</span>
      <span>{transaction.description}</span>
      <span>${transaction.amount}</span>
    </div>
  );
}

export default TransactionRow;

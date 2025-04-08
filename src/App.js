import React from "react";
import "./style.css";
import TransactionList from "./components/TransactionList";

function App() {
  return (
    <div>
      <h1>Transaction Tracker</h1>
      <TransactionList />
    </div>
  );
}

export default App;

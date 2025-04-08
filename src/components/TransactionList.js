import React from "react";
import { FixedSizeList as List } from "react-window";
import transactions from "../data/transactions";
import TransactionRow from "./TransactionRow";

function TransactionList() {
  return (
    <List
      height={500}
      itemCount={transactions.length}
      itemSize={40}
      width={"100%"}
    >
      {({ index, style }) => (
        <TransactionRow transaction={transactions[index]} style={style} />
      )}
    </List>
  );
}

export default TransactionList;

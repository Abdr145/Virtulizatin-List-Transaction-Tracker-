const transactions = [];

for (let i = 0; i < 1000; i++) {
  transactions.push({
    id: i + 1,
    date: `2025-04-${String((i % 30) + 1).padStart(2, '0')}`,
    description: `Transaction #${i + 1}`,
    amount: (Math.random() * 1000).toFixed(2),
    type: i % 2 === 0 ? "income" : "expense",
  });
}

export default transactions;

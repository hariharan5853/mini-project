import React, { useState } from 'react';

function Deposit({ accounts, setAccounts }) {
  const [selectedId, setSelectedId] = useState('');
  const [amount, setAmount] = useState('');

  const handleDeposit = () => {
    const depositAmount = Number(amount);

    if (!selectedId || depositAmount <= 0) {
      alert("Invalid account or amount!");
      return;
    }

    const updatedAccounts = accounts.map(acc => {
      if (acc.id === Number(selectedId)) {
        return {
          ...acc,
          balance: acc.balance + depositAmount,
          transactions: [
            ...acc.transactions,
            { type: 'Deposit', amount: depositAmount }
          ]
        };
      }
      return acc;
    });

    setAccounts(updatedAccounts);
    alert("Deposit Successful!");

    setAmount('');
    setSelectedId('');
  };

  return (
    <div className="form-container">
      <h2>Deposit Money</h2>

      <select value={selectedId} onChange={(e) => setSelectedId(e.target.value)}>
        <option value="">Select Account</option>
        {accounts.map(acc => (
          <option key={acc.id} value={acc.id}>
            {acc.name}
             {/* (₹{acc.balance}) */}
          </option>
        ))}
      </select>

      <input
        type="number"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={handleDeposit}>Deposit</button>
    </div>
  );
}

export default Deposit;
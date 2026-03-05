import React, { useState } from 'react';

function Withdraw({ accounts, setAccounts }) {
  const [selectedId, setSelectedId] = useState('');
  const [amount, setAmount] = useState('');

  const handleWithdraw = () => {
    const withdrawAmount = Number(amount);

    const accIndex = accounts.findIndex(acc => acc.id === Number(selectedId));

    if (
      accIndex === -1 ||
      withdrawAmount <= 0 ||
      accounts[accIndex].balance < withdrawAmount
    ) {
      alert("Invalid account or insufficient balance!");
      return;
    }

    const updatedAccounts = [...accounts];
    updatedAccounts[accIndex].balance -= withdrawAmount;
    updatedAccounts[accIndex].transactions.push({
      type: 'Withdraw',
      amount: withdrawAmount
    });

    setAccounts(updatedAccounts);
    alert("Withdrawal Successful!");

    setAmount('');
    setSelectedId('');
  };

  return (
    <div className="form-container">
      <h2>Withdraw Money</h2>

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

      <button onClick={handleWithdraw}>Withdraw</button>
    </div>
  );
}

export default Withdraw;
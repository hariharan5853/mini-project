import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateAccount({ accounts, setAccounts }) {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [accountType, setAccountType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !phone || !password || !accountNumber || !accountType) {
      alert("Enter valid details!");
      return;
    }

    const newAccount = {
      id: Date.now(),
      name,
      email,
      phone,
      password,
      accountNumber,
      accountType,
      balance: 0,
      transactions: [],
      createdAt: new Date().toLocaleString()
    };

    setAccounts([...accounts, newAccount]);

    alert("Account Created Successfully!");

    navigate(`/account/${newAccount.id}`);
  };

  return (
    <div className="form-container">
      <h2>Create Account</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="tel"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="text"
          placeholder="Account Number"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
        />

        <select
          value={accountType}
          onChange={(e) => setAccountType(e.target.value)}
        >
          <option value="">Select Account Type</option>
          <option value="Savings">Savings</option>
          <option value="Current">Current</option>
          <option value="Business">Business</option>
        </select>

        <button type="submit">Create</button>

      </form>
    </div>
  );
}

export default CreateAccount;
import React from "react";
import { useParams } from "react-router-dom";

function AccountDetails({ accounts }) {
  const { id } = useParams();
  const account = accounts.find((acc) => acc.id === Number(id));

  if (!account) {
    return <h2>Account Not Found</h2>;
  }

  return (
    <div className="form-container">
      <h2>Account Details</h2>

      <p><strong>Name:</strong> {account.name}</p>
      <p><strong>Email:</strong> {account.email}</p>
      <p><strong>Phone:</strong> {account.phone}</p>

      <p><strong>Account Number:</strong> {account.accountNumber}</p>
      <p><strong>Account Type:</strong> {account.accountType}</p>

      <p><strong>Balance:</strong> ₹{account.balance}</p>
      <p><strong>Created At:</strong> {account.createdAt}</p>

      <h3>Transactions</h3>

      {account.transactions.length === 0 ? (
        <p>No Transactions Yet</p>
      ) : (
        <ul>
          {account.transactions.map((t, i) => (
            <li key={i}>
              <strong>{t.type}</strong> : ₹{t.amount}
              <br />
              {/* <small>Time: {t.time}</small> */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AccountDetails;
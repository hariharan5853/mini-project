import React from "react";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";

function AllData({ accounts }) {

  const currentTime = new Date().toLocaleString();

  const downloadPDF = (acc) => {

    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("HR Bank - Transaction History", 20, 20);

    doc.setFontSize(12);
    doc.text(`Account Name: ${acc.name}`, 20, 40);
    doc.text(`Balance: ₹${acc.balance}`, 20, 50);

    let y = 70;

    doc.text("Transactions:", 20, 60);

    acc.transactions.forEach((t, index) => {
      doc.text(`${index + 1}. ${t.type} : ₹${t.amount}`, 20, y);
      y += 10;
    });

    doc.save(`${acc.name}_transactions.pdf`);
  };

  return (
    <div className="data-container">

      <h2>All Accounts & Transactions</h2>

      <p><strong>Current Time:</strong> {currentTime}</p>

      {accounts.length === 0 ? (
        <p>No accounts yet.</p>
      ) : (
        accounts.map(acc => (

          <div key={acc.id} className="account-card">

            <h3>{acc.name}</h3>

            <p><strong>Balance:</strong> ₹{acc.balance}</p>

            <Link to={`/account/${acc.id}`}>
              <button className="main-btn">View Details</button>
            </Link>

            <button
              className="download-btn"
              onClick={() => downloadPDF(acc)}
            >
              Download PDF
            </button>

            <h4>Transactions</h4>

            {acc.transactions.length === 0 ? (
              <p>No transactions</p>
            ) : (
              <ul>
                {acc.transactions.map((t, i) => (
                  <li key={i}>
                    {t.type} : ₹{t.amount}
                  </li>
                ))}
              </ul>
            )}

          </div>

        ))
      )}

    </div>
  );
}

export default AllData;
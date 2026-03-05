import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ accounts }) {

  const navigate = useNavigate();

  const [accountNumber, setAccountNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const user = accounts.find(
      (acc) =>
        acc.accountNumber.toString() === accountNumber &&
        acc.password === password
    );

    if (user) {
      alert("Login Successful");

      // Go to account dashboard
      navigate(`/account/${user.id}`);
    } else {
      alert("Invalid Account Number or Password");
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>

      <form onSubmit={handleLogin}>

        <input
          type="text"
          placeholder="Account Number"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>

      </form>
    </div>
  );
}

export default Login;
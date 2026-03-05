import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

import Home from "./components/Home";
import CreateAccount from "./components/CreateAccount";
import Deposit from "./components/Deposit";
import Withdraw from "./components/Withdraw";
import AllData from "./components/AllData";
import AccountDetails from "./components/AccountDetails";

function App() {

   const [accounts, setAccounts] = useState([
    
  ]);

  return (
    <>
      <nav className="navbar">
        <h2>HR Bank</h2>

        <ul>
          <li><Link to="/">Home</Link></li>
          {/* <li><Link to="/create">Create Account</Link></li> */}
          <li><Link to="/deposit">Deposit</Link></li>
          <li><Link to="/withdraw">Withdraw</Link></li>
          <li><Link to="/alldata">All Data</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/create"
          element={<CreateAccount accounts={accounts} setAccounts={setAccounts} />}
        />

        <Route
          path="/deposit"
          element={<Deposit accounts={accounts} setAccounts={setAccounts} />}
        />

        <Route
          path="/withdraw"
          element={<Withdraw accounts={accounts} setAccounts={setAccounts} />}
        />

        <Route
          path="/alldata"
          element={<AllData accounts={accounts} />}
        />

        <Route
          path="/account/:id"
          element={<AccountDetails accounts={accounts} />}
        />
      </Routes>
    </>
  );
}

export default App;
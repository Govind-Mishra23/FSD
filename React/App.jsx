import React, { useState } from "react";
import Registration from "./Registration";
import Login from "./Login";

function App() {
  const [userData, setUserData] = useState(null);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);

  const handleRegister = (data) => {
    setUserData(data);
    alert(`Registration Successful! Name: ${data.name}`);
  };

  const toggleLogin = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <div>
      <Registration onRegister={handleRegister} />
      <hr />
      <button onClick={toggleLogin}>
        {showLoginForm ? "Hide Login" : "Show Login"}
      </button>
      {showLoginForm && <Login registeredUser={userData} />}
    </div>
  );
}

export default App;

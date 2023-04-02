import React, { useState } from "react";
import Navbar from "./components/Navbar";
import UserList from "./components/UserList";
import Search from "./components/Search";
import Alert from "./components/Alert";

function App() {
  const [loading, setLoading] = useState(false);

  const [users, setUsers] = useState([]);

  const [error, setError] = useState(null);

  async function searchUserHandler(keyword) {
    try {
      setLoading(true);

      const usersData = await fetch(
        "https://api.github.com/search/users?q=" + keyword
      );
      if (!usersData.ok) return;
      const response = await usersData.json();
      setUsers(response.items);
      setLoading(false);
    } catch (error) {}
  }

  const clearResultHandler = () => {
    setUsers([]);
  };

  const showAlert = (msg, type) => {
    setError({ msg: msg, type: type });
  };

  return (
    <div>
      <Navbar />
      <Search
        searchUserHandler={searchUserHandler}
        checkButton={users}
        clearResultHandler={clearResultHandler}
        showAlert={showAlert}
      />
      <Alert error={error} />
      <div className="container mt-3">
        <UserList loading={loading} users={users} />
      </div>
    </div>
  );
}

export default App;

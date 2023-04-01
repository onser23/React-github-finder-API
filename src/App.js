import React, { useState } from "react";
import Navbar from "./components/Navbar";
import UserList from "./components/UserList";
import Search from "./components/Search";

function App() {
  const [loading, setLoading] = useState(false);

  const [users, setUsers] = useState([]);

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

  return (
    <div>
      <Navbar />
      <Search
        searchUserHandler={searchUserHandler}
        clearResultHandler={clearResultHandler}
      />
      <div className="container mt-3">
        <UserList loading={loading} users={users} />
      </div>
    </div>
  );
}

export default App;

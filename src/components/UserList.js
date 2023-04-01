import React from "react";
import User from "./User";
import Loading from "./Loading";

const UserList = ({ users, loading }) => {
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
};

export default UserList;

import React from "react";

const User = ({ user }) => {
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-3">
          <img
            className="img-fluid rounded-start avatar"
            src={user.avatar_url}
            alt={user.login}
          />
        </div>
        <div className="col-md-9">
          <div className="card-body">
            <h3 className="card-title">{user.login}</h3>
            <a
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
              href={user.html_url}
            >
              Github Profilee
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;

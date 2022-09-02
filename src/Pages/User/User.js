import React from "react";
import { Link } from "react-router-dom";

const User = ({ user }) => {
  const { name, email, id } = user;
  return (
    <div className="container">
      <div className="col-lg-6 col-12 p-4 g-2 m-2 bg-primary">
        <h2>{name}</h2>
        <h4>{email}</h4>
        <Link to={/user/ + id}>Learn More</Link>
      </div>
    </div>
  );
};

export default User;

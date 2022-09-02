import React, { useEffect, useState } from "react";
import User from "../User/User";

const About = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div className="row">
      {users.map((user) => (
        <User key={user.id} user={user}></User>
      ))}
    </div>
  );
};

export default About;

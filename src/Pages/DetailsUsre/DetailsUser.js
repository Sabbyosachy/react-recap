import React, { useState } from "react";
import { useParams } from "react-router-dom";

const DetailsUser = () => {
  let { userId } = useParams();
  const [first, setFirst] = useState([]);
  useState(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFirst(data));
  }, []);
  return (
    <div>
      <h3>{first.name}</h3>
    </div>
  );
};

export default DetailsUser;

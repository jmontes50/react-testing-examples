import React, { useState } from "react";
import { getData } from "../services/serviceData";

function Users() {
  const [data, setData] = useState(null);

  const handleClick = async () => {
    const response = await getData();
    setData(response);
  };

  return (
    <div>
      <button onClick={handleClick}>Get Data</button>
      <ul>
        {Array.isArray(data) &&
          data.map((item) => <li key={item.id}>{item.first_name}</li>)}
      </ul>
    </div>
  );
}

export default Users;

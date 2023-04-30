import { useState, useEffect } from "react";
import "../index.css";

function Filtrado({ text }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const filtrado = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data);
    };
    filtrado();
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(text.toLowerCase())
  );

  return (
    <div className="users">
      <table className="table table-success table-striped table table-hover">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
          </tr>
        </thead>

        <tbody>
          {filteredUsers.length > 0 &&
            filteredUsers.map((userss) => (
              <tr key={userss.id}>
                <td>{userss.id}</td>
                <td>{userss.name}</td>
                <td>{userss.username}</td>
              </tr>
            ))}
        </tbody>
      </table>
      {filteredUsers.length === 0 && <h2>No hay usuarios con ese nombre</h2>}
    </div>
  );
}

export default Filtrado;

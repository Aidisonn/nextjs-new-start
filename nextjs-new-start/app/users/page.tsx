import React from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

const UsersPage = async () => {
    // Fetch users from an API or database
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {cache: "no-store"});
  const users: User[] = await response.json();
  console.log(users);

  return (
    <>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </>
  );
};

export default UsersPage;

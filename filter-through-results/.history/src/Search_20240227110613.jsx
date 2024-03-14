import "./App.css";
import { users } from "./data.js";
import { useState } from "react";

function Search() {
  // console.log(users);
  const [search, setSearch] = useState("");
  console.log(search);

  return (
    <>
      <div className="App">
        <h1>Students Contact</h1>
        <form>
          <input
            placeholder="Search Contacts"
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {users
              .filter((user) => {
                return search.toLowerCase() === ""
                  ? user
                  : user.first_name.toLowerCase().includes(search);
              })
              .map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.first_name}</td>
                  <td>{user.last_name}</td>
                  <td>{user.email}</td>
                  <td>{user.gender}</td>
                  <td>{user.phone}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Search;

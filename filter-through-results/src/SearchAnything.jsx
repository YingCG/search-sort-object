import React, { useState } from "react";
import { users } from "./data.js";

const SearchAnything = () => {
  const [currentInfo, setCurrentInfo] = useState(users);
  const [filteredInfo, setFilteredInfo] = useState(currentInfo);

  const searchInfo = (e) => {
    console.log(e.target.value);

    setFilteredInfo(
      currentInfo.filter((info) => {
        return Object.values(info).some((value) =>
          String(value).toLowerCase().includes(e.target.value)
        );
      })
    );
  };

  return (
    <>
      <div className="App">
        <h1>Students Contact</h1>
        <form>
          <input placeholder="Search Contacts" onChange={searchInfo} />
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
            {filteredInfo.map((user) => (
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
};

export default SearchAnything;

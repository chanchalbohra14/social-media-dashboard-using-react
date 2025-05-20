import React, { useEffect, useState } from "react";
import "./Users.css";
import axios from "axios";
import { BeatLoader } from "react-spinners";
const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const users = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(users.data);
        setLoading(false);
      } catch (error) {
        console.log("failed to fetch users", error);
      }
    };
    fetchUsers();
  }, []);
  if (loading)
    return (
      <div className="loader">
        {" "}
        <BeatLoader />
      </div>
    );
  return (
    <div>
      <h1>Users</h1>
      <div className="users-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Address (City)</th>
              <th>Phone</th>
              <th>Website</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>
            {users.map((e) => (
              <tr>
                <td>{e.name}</td>
                <td>{e.username}</td>
                <td>{e.email}</td>
                <td>{e.address.city}</td>
                <td>{e.phone}</td>
                <td>{e.website}</td>
                <td>{e.company.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;

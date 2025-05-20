import React, { useEffect, useState } from "react";
import "./Todos.css";
import axios from "axios";
import { BeatLoader } from "react-spinners";
const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const todos = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        setTodos(todos.data);
        setLoading(false);
      } catch (error) {
        console.log("failed to fetch todos", error);
      }
    };
    fetchTodos();
  }, []);
  if (loading)
    return (
      <div className="loader">
        {" "}
        <BeatLoader />
      </div>
    );
  return (
    <div className="todos-container">
      <h1>Todos</h1>
      <div className="todo-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody>
            {todos.slice(0, 20).map((e) => (
              <tr key={e.id}>
                <td data-label="ID">{e.id}</td>
                <td data-label="Title">{e.title}</td>
                <td data-label="Completed">{e.completed ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Todos;

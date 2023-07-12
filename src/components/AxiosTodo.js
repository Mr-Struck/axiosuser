import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const AxiosTodo = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((resp) => {
        setTodos(resp.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h1>Todos</h1>
      <div className="row2 head">
        <p>Task Id</p>
        <p>Task Title</p>
      </div>
      {todos.map((todo, index) => {
        return (
          index < 10 && (
            <div className="column" key={todo.id}>
              <div className="row2">
                <p className="center">{todo.id}</p>
                <p>
                  <strong>{todo.title}</strong>
                </p>
              </div>
            </div>
          )
        );
      })}
      <Link className="prev" to={"/"}>
        Prev
      </Link>
      <Link className="next" to={"/post"}>
        Next
      </Link>
    </div>
  );
};

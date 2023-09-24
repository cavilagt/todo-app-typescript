import React, { useContext } from "react";
import { TodoType, TodoStatus } from "../types/State";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";

type ComponentProps = {};

const DetailTodo: React.FunctionComponent<ComponentProps> = () => {

  const { state } = useContext(AppContext);
  const todo:TodoType = state && state.todo? state.todo
    : {uid:'', title : "Title is not available",
      description : "Description is not available", status:TodoStatus.INCOMPLETED};

  return (
    <div>
      <h2>Task details</h2>
      <div className="ui segment">
        <div className="content">
          <label className="ui header">{todo.title}</label>
          <p>{todo.description}</p>
        </div>
      </div>
      <Link className="ui button primary" to="/">Go back</Link>
    </div>
  );
};

export default DetailTodo;

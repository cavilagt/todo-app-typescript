import React from "react";

import Todo from "./Todo";
import { TodoType } from "../types/State";

type TodoListProps = {
  todos?: TodoType[];
}

const TodoList:React.FunctionComponent<TodoListProps> = ({todos =[] }) => {
  return (
    <div className="ui segments">
      {
        todos.length === 0
        ? <div className="ui segment">There are no more tasks</div>
        : todos.map( todo => (
          <Todo key={todo.uid} {...todo} />))
      }
  </div>
  );
};

export default TodoList;

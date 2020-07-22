import React, { useContext } from "react";

import Todo from "./Todo";
import AppContext from "../context/AppContext";

const TodoList:React.FunctionComponent = () => {
  const { state } = useContext(AppContext);
  return (
    <div className="ui segments">
      {
        state?.pageTodoFilter.map(todo => (
          <Todo key={todo.uid} {...todo} />))
      }
  </div>
  );
};

export default TodoList;

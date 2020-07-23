import React, { useContext } from "react";
import TodoList from "../components/TodoList";
import AppContext from "../context/AppContext";

export const Todos = () => {
  const { state } = useContext(AppContext);
  
  return (
    <div>
      <TodoList  todos={ state?.pageTodoFilter } />
    </div>
  );
};

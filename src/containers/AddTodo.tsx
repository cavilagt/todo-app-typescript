import React, { useContext } from "react";
import { TodoForm } from "../components/TodoForm";
import AppContext from "../context/AppContext";

export const AddTodo = () => {
  const { addTodo } = useContext(AppContext);
  
  const onAddTodo = (data:any) => addTodo && addTodo(data);

  return (
    <div>
      <TodoForm formTitle="New Task" onSubmit={onAddTodo} />
    </div>
  );
};

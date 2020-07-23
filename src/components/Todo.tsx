import React, { useContext } from "react";
import { TodoType, TodoStatus } from "../types/State";

import "./Todo.css";
import AppContext from "../context/AppContext";

export type ComponentProps =  TodoType;

const Todo:React.FunctionComponent< ComponentProps > = ({ title, status, uid, description }) => {

  const { handlerViewDetails, handlerDeleteTodo, handlerToggleTodo} = useContext(AppContext);

  const onClickDelete = () => handlerDeleteTodo && handlerDeleteTodo( uid );
  const onToggleTodo = () => handlerToggleTodo && handlerToggleTodo( uid );
  const onDobleClickTodo = () => handlerViewDetails && handlerViewDetails( uid );

  const completed = status === TodoStatus.COMPLETED;

  const statusClass = completed? 'teal inverted todo done': 'todo';

  return (
    <div data-testid={uid} className={`ui segment ${ statusClass }`} onDoubleClick={ onDobleClickTodo }>
      <div className="content">
        <label className="ui header" >{title}</label>
        <p>{description}</p>
      </div>
      <div className="actions">
        <span data-tooltip={completed?"Mark as incompleted":"Mark as completed"}>
          <i className={`circle ${completed? "check ": ""}icon big`}onClick={ onToggleTodo }></i>
        </span>
        <span data-tooltip="Details">
          <i className="info circle icon big" onClick={ onDobleClickTodo }></i>
        </span>
        <span data-tooltip="Delete">
          <i className="times circle icon big" onClick={ onClickDelete }></i>
        </span>
      </div>
    </div>
  );
};

export default Todo;

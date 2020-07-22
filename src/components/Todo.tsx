import React, { useContext } from "react";
import { TodoType, TodoStatus } from "../types/State";

import "./Todo.css";
import AppContext from "../context/AppContext";

type ComponentProps =  TodoType;

const Todo:React.FunctionComponent< ComponentProps > = ({ title, status, uid, description }) => {

  const { handlerViewDetails, handlerDeleteTodo, handlerToggleTodo} = useContext(AppContext);

  const onClickDelete = () => handlerDeleteTodo && handlerDeleteTodo( uid );
  const onToggleTodo = () => handlerToggleTodo && handlerToggleTodo( uid );
  const onDobleClickTodo = () => handlerViewDetails && handlerViewDetails( uid );

  const completed = status === TodoStatus.COMPLETED;

  const statusClass = completed? 'teal inverted todo done': 'todo';

  return (
    <div className={`ui segment ${ statusClass }`} onDoubleClick={ onDobleClickTodo }>
      <div className="content">
        <label className="ui header" >{title}</label>
        <p>{description}</p>
      </div>
      <div className="actions">
        <i className={`circle ${completed? 'check': ''} icon big`} onClick={ onToggleTodo }></i>
        <i className="close icon big" onClick={ onClickDelete }></i>
      </div>
    </div>
  );
};

export default Todo;

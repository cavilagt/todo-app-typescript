import React from "react";
import { createBrowserHistory } from 'history';

import { State, TodoStatus } from "../types/State";
import { FilterActionType } from "../types/actions/FilterAction";

// export const initialState: State = { todoList:[] };

export const initialState: State = { todoList:[
    { uid: "aaaaa", status: TodoStatus.INCOMPLETED, title: "incompleted task 1", description:"That's just an incompleted task" },
    { uid: "bbbbb", status: TodoStatus.INCOMPLETED, title: "incompleted task 2", description:"That's just an incompleted task" },
    { uid: "ccccc", status: TodoStatus.INCOMPLETED, title: "incompleted task 3", description:"That's just an incompleted task" },
    { uid: "ddddd", status: TodoStatus.COMPLETED, title: "completed task", description:"That's just a completed task"},
    { uid: "eeeee", status: TodoStatus.COMPLETED, title: "completed task 2", description:"That's just a completed task"},
  ], 
  pageTodoFilter:[
    { uid: "aaaaa", status: TodoStatus.INCOMPLETED, title: "incompleted task 1", description:"That's just an incompleted task" },
    { uid: "bbbbb", status: TodoStatus.INCOMPLETED, title: "incompleted task 2", description:"That's just an incompleted task" },
    { uid: "ccccc", status: TodoStatus.INCOMPLETED, title: "incompleted task 3", description:"That's just an incompleted task" },
  ],
};

export const history = createBrowserHistory();


export type ContextType = {
  state:State;
  handlerViewDetails: ( uid:string ) => void;
  handlerToggleTodo: ( uid:string ) => void;
  handlerDeleteTodo: ( uid:string ) => void;
  handlerFilterChange: ( filter:FilterActionType ) => void;
  addTodo: ( data:any ) => void;
}

export default React.createContext<Partial<ContextType>>({});

import React, { useReducer, useState, useContext } from "react";
import rootReducer from "../reducers";
import TodoList from "./TodoList";
import DetailTodo from "./DetailTodo";

import { Router, Switch, Route } from 'react-router-dom';
import AppContext, { history, initialState } from "../context/AppContext";
import { TodoActionType } from "../types/actions/TodoAction";
import { FilterActionType } from "../types/actions/FilterAction";
import Header from "./Header";
import { AddTodo } from "../containers/AddTodo";

const App = () => {
  const appContext = useContext(AppContext);
  
  const [ state, dispatch ] = useReducer(rootReducer, initialState);
  const [ filter, setFilter ] = useState(FilterActionType.SHOW_INCOMPLETED);

  appContext.state = state;

  appContext.handlerDeleteTodo = ( uid:string ) =>{
    dispatch({ type:TodoActionType.REMOVE_TODO, uid });
    dispatch({ type:filter });
  }
  
  appContext.handlerFilterChange = ( filter:FilterActionType ) => {
    dispatch({ type:filter });
    setFilter( filter );
    history.push("/");
  };

  appContext.handlerToggleTodo = ( uid:string ) =>{
    dispatch({ type:TodoActionType.TOGGLE_TODO, uid });
    dispatch({ type:filter });
  }

  appContext.handlerViewDetails = ( uid:string ) => {
    dispatch({ type:TodoActionType.VIEW_DETAILS, uid });
    history.push("/todo");
  }

  appContext.addTodo = ( data:any ) => {
    dispatch({ type: TodoActionType.ADD_TODO, title: data.title, description: data.description });
    dispatch({ type:filter });
    history.push("/");
  }

  return (
    <div className="ui container">
      <Router history={ history }>
        <Header />
        <Switch>
          <Route path="/" exact component={ TodoList } />
          <Route path="/todo" exact component={ DetailTodo } />
          <Route path="/new" exact component={ AddTodo } />
        </Switch>
      </Router>
    </div>
  );
};

export default App;

import React, { useState, useReducer } from "react";
import rootReducer from "../reducers";
import AppContext, { initialState } from "./AppContext";
import { FilterActionType } from "../types/actions/FilterAction";
import { TodoActionType } from "../types/actions/TodoAction";
import { useNavigate } from "react-router-dom";
import { PAGES } from "../components/Constants";
import { NewTodo } from "../types/State";

type ComponentProps = {
  children: React.ReactNode,
};

const AppContextProvider:React.FunctionComponent<ComponentProps> = ({ children }) => {
    const [ state, dispatch ] = useReducer( rootReducer, initialState );
    const [ filter, setFilter ] = useState(FilterActionType.SHOW_INCOMPLETED);
    let navigate = useNavigate();

    const handlerDeleteTodo = ( uid:string ) =>{
      dispatch({ type:TodoActionType.REMOVE_TODO, uid });
      dispatch({ type:filter });
    }
    
    const handlerFilterChange = ( filter:FilterActionType ) => {
      dispatch({ type:filter });
      setFilter( filter );
      navigate(PAGES.HOME);
    };
  
    const handlerToggleTodo = ( uid:string ) =>{
      dispatch({ type:TodoActionType.TOGGLE_TODO, uid });
      dispatch({ type:filter });
    }
  
    const handlerViewDetails = ( uid:string ) => {
      dispatch({ type:TodoActionType.VIEW_DETAILS, uid });
      navigate(PAGES.DETAIL);
    }
  
    const addTodo = ( data:NewTodo ) => {
      dispatch({ type: TodoActionType.ADD_TODO, title: data.title, description: data.description });
      dispatch({ type: FilterActionType.SHOW_INCOMPLETED });
      setFilter(FilterActionType.SHOW_INCOMPLETED);
      navigate(PAGES.HOME);
    }

    const providerValue = { state, dispatch, handlerDeleteTodo,
        handlerFilterChange, handlerToggleTodo, handlerViewDetails, addTodo };
    
    return (
      <AppContext.Provider value={ providerValue }>
        {children}
      </AppContext.Provider>
    );
  }

  export default AppContextProvider;
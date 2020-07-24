import React, { useState, useEffect, useReducer } from "react";
import rootReducer from "../reducers";
import AppContext, { history, initialState } from "./AppContext";
import { FilterActionType } from "../types/actions/FilterAction";
import { TodoActionType } from "../types/actions/TodoAction";


const AppContextProvider:React.FunctionComponent = ({ children }) => {
    const [state, dispatch] = useReducer( rootReducer, initialState );
    const [ filter, setFilter ] = useState(FilterActionType.SHOW_INCOMPLETED);
  
    const handlerDeleteTodo = ( uid:string ) =>{
      dispatch({ type:TodoActionType.REMOVE_TODO, uid });
      dispatch({ type:filter });
    }
    
    const handlerFilterChange = ( filter:FilterActionType ) => {
      dispatch({ type:filter });
      setFilter( filter );
      history.push("/");
    };
  
    const handlerToggleTodo = ( uid:string ) =>{
      dispatch({ type:TodoActionType.TOGGLE_TODO, uid });
      dispatch({ type:filter });
    }
  
    const handlerViewDetails = ( uid:string ) => {
      dispatch({ type:TodoActionType.VIEW_DETAILS, uid });
      history.push("/todo");
    }
  
    const addTodo = ( data:any ) => {
      dispatch({ type: TodoActionType.ADD_TODO, title: data.title, description: data.description });
      dispatch({ type:filter });
      history.push("/");
    }

    const providerValue = { state, dispatch, handlerDeleteTodo,
        handlerFilterChange, handlerToggleTodo, handlerViewDetails, addTodo };
  

    useEffect(() => {
        handlerFilterChange( FilterActionType.SHOW_INCOMPLETED )
    }, []);
    
    return (
      <AppContext.Provider value={ providerValue }>
        {children}
      </AppContext.Provider>
    );
  }

  export default AppContextProvider;
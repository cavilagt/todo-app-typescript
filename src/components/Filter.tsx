import React, { useContext } from "react";
import { FilterActionType } from "../types/actions/FilterAction";
import AppContext from "../context/AppContext";

export const Filter:React.FunctionComponent = () => {
  const { handlerFilterChange } = useContext(AppContext);

  const onFilterClick = (filter:FilterActionType) => {
    handlerFilterChange && handlerFilterChange(filter);
  }

  return (
    <div className="ui buttons">
      <button className="ui button" onClick={()=>onFilterClick(FilterActionType.SHOW_ALL)}>All</button>
      <button className="ui button" onClick={()=>onFilterClick(FilterActionType.SHOW_COMPLETED)}>Completed</button>
      <button className="ui button" onClick={()=>onFilterClick(FilterActionType.SHOW_INCOMPLETED)}>No completed</button>
    </div>
  );
};

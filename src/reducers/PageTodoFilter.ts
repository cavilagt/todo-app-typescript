import { FilterActionType } from "../types/actions/FilterAction";
import { TodoStatus, State } from "../types/State";
import { AppActions } from "../types/actions";

const pageTodoFilterReducer = (state: State, action: AppActions) => {
  switch (action.type) {
    case FilterActionType.SHOW_ALL:
      return [...state.todoList.map( todo => todo )];

    case FilterActionType.SHOW_COMPLETED:
      return [...state.todoList.filter(todo => todo.status === TodoStatus.COMPLETED)];
    
    case FilterActionType.SHOW_INCOMPLETED:
      return [...state.todoList.filter(todo => todo.status === TodoStatus.INCOMPLETED)];
    
    default:
      return state.pageTodoFilter;
  }
};

export default pageTodoFilterReducer;

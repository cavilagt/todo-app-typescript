import { State } from "../types/State";
import { AppActions } from "../types/actions";
import pageTodoFilterReducer from "./PageTodoFilter";
import todosReducer from "./TodoReducer";
import detailsReducer from "./DetailsReducer";

const rootReducer = (state: State, action: AppActions):State => {
  return {
    pageTodoFilter: pageTodoFilterReducer(state , action),
    todoList: todosReducer(state.todoList, action),
    todo: detailsReducer(state, action)
  };
};

export default rootReducer;
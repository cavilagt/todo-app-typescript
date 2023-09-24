import { AppActions } from "../types/actions";
import { State, TodoType, TodoStatus } from "../types/State";
import { TodoActionType } from "../types/actions/TodoAction";
import { uid } from "uid";

const defaultValue:TodoType = {
  uid:uid(),
  title: "",
  description: "",
  status: TodoStatus.INCOMPLETED
}

const detailsReducer = (state: State, action: AppActions) => {
  switch (action.type) {
    case TodoActionType.VIEW_DETAILS:
      const todo = state.pageTodoFilter.find((todo) => (todo.uid === action.uid));

      return todo? {...todo}: {...defaultValue};
    default:
      return {...defaultValue};
  }
};

export default detailsReducer;
import uid from 'uid';

import { TodoStatus, TodoType } from "../types/State";
import { TodoActionType} from "../types/actions/TodoAction";
import { AppActions } from "../types/actions";

const todoReducer = (todoList: TodoType[], action: AppActions) => {

  switch (action.type) {
    case TodoActionType.ADD_TODO:
      const { title, description } = action;

      return [ ...todoList,
        { uid: uid(), title, description, status: TodoStatus.INCOMPLETED },
      ];

    case TodoActionType.REMOVE_TODO:
      return todoList.filter(todo => todo.uid !== action.uid);

    case TodoActionType.TOGGLE_TODO:
      
      return todoList.map( todo => 
        todo.uid === action.uid
        ? { ...todo, 
            status: todo.status === TodoStatus.COMPLETED
              ? TodoStatus.INCOMPLETED
              : TodoStatus.COMPLETED}
        : todo);
    default:
      return todoList;
  }
};

export default todoReducer;

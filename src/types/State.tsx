export enum TodoStatus {
  INCOMPLETED='incompleted',
  COMPLETED='completed'
}

export type TodoType = {
  uid: string,
  title: string,
  description: string,
  status: TodoStatus,
}

export type State = {
  todoList: TodoType[],
  pageTodoFilter: TodoType[],
  todo?: TodoType
}
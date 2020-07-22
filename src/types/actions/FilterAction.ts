
export enum FilterActionType {
  SHOW_INCOMPLETED='SHOW_INCOMPLETED',
  SHOW_COMPLETED='SHOW_COMPLETED',
  SHOW_ALL= 'SHOW_ALL'
}

export type ShowAll = {
  type: FilterActionType.SHOW_ALL,
};
export type ShowCompleted = {
  type: FilterActionType.SHOW_COMPLETED,
};
export type ShowIncompleted = {
  type: FilterActionType.SHOW_INCOMPLETED,
};

export type FilterAction = ShowAll | ShowCompleted | ShowIncompleted;

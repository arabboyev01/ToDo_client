export interface TaskboardItem {
  id: string;
  title: string;
  description: string;
}

export enum TaskboardItemStatus {
  TO_DO = "To Do",
  DONE = "Done",
}

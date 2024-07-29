export type FieldType = {
  email?: string;
  password?: string;
  success?: boolean;
  token?: string | undefined;
  role?: string;
  message?: string;
  title?: string;
  description?: string;
  completed?: boolean;
  data?: any;
  userId?: string;
};
export interface TasksDataType {
  _id: string;
  name: string;
  age: string;
  address: string;
  completed: boolean
}
export interface StatisticsProps {
  completedTasks: number;
  completionRate: number;
  email: string;
  totalTasks: number;
  _id: string;
}

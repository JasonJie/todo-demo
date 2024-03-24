import { TodoItemType} from '../interface';
export enum FilterEnum {
    All = "ALL",
    Active = "ACTIVE",
    Completed = "COMPLETED",
}

export interface TodoListTypeWithoutOther
    extends Omit<TodoItemType, "id" | "isComplete"> {}
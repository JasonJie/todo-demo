import { atom } from "recoil";
import { TodoItemType } from '../interface';
import { FilterEnum } from './interface';

export enum AtomsTypeName {
    TodoList = "TodoList",
    Filter = "Filter",
}

export const todoListState = atom<TodoItemType[]>({
    key: AtomsTypeName.TodoList,
    default: [],
});

export const filterState = atom<
    FilterEnum.All | FilterEnum.Active | FilterEnum.Completed
>({
    key: AtomsTypeName.Filter,
    default: FilterEnum.All,
});

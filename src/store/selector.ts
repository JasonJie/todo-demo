import { selector } from "recoil";
import { todoListState, filterState } from './atom';
import { FilterEnum } from "./interface";

export enum SelectorTypeName {
    TodoListByFilter = "TodoListByFilter",
}

const todoListByFiter = selector({
    key: SelectorTypeName.TodoListByFilter,
    get: ({ get }) => {
        const todoList = get(todoListState);
        const filter = get(filterState);

        let newTodoList;
        switch (filter) {
            case FilterEnum.All:
                newTodoList = todoList;
                break;
            case FilterEnum.Active:
                newTodoList = todoList.filter((todoItem) => {
                    return todoItem.isComplete === false;
                });
                break;
            case FilterEnum.Completed:
                newTodoList = todoList.filter((todoItem) => {
                    return todoItem.isComplete === true;
                });
                break;
            default:
                newTodoList = todoList;
        }

        return newTodoList;
    },
});


export { todoListByFiter};

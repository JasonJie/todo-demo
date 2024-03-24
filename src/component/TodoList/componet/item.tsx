import React, { useCallback } from "react";
import { useSetRecoilState } from 'recoil';
import { produce } from 'immer';
import { todoListState } from '../../../store/atom';
import { TodoItemType }  from '../../../interface';

interface Props {
    todoItem: TodoItemType;
}
const TodoItem: React.FC<Props> = ({ todoItem }) => {

    const setTodo = useSetRecoilState(todoListState);

    const handleChangeComplete = useCallback(() => {
        setTodo((todoList) =>
            produce(todoList, (draft) => {
                draft.forEach((item) => {
                    if (item.id === todoItem.id) {
                        item.isComplete = !item.isComplete;
                    }
                });
            })
        );
    },[setTodo, todoItem.id])

    const handleDeleteTodoItem = useCallback(() => {
        setTodo((todoList) =>
            todoList.filter((item) => item.id !== todoItem.id)
        );
    },[setTodo, todoItem.id])

    return (
        <li className={`${todoItem.isComplete ? "completed" : null}`}>
            <div className="view">
                <input
                    className="toggle"
                    type="checkbox"
                    checked={todoItem.isComplete}
                    onChange={handleChangeComplete}
                />
                <label>{todoItem.context}</label>
                <button
                    className="destroy"
                    type="button"
                    onClick={handleDeleteTodoItem}
                />
            </div>
            <input className="edit" defaultValue="Rule the web" />
        </li>
    );
};

export default TodoItem;

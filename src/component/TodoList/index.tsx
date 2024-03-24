import React from "react";
import { useRecoilValue } from 'recoil';
import { todoListByFiter} from '../../store/selector';
import TodoItem from './componet/item';
import TodoFooterComponent from './componet/footer';


const TodoList: React.FC = () => { 

    const todoList = useRecoilValue(todoListByFiter);

    
    return (
        <div className="main">
            <ul className="todo-list">
                {todoList.map((item) => (
                    <TodoItem todoItem={item} key={item.id} />
                ))}
            </ul>
            <TodoFooterComponent />
        </div>
    );
};

export default TodoList;

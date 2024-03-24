import React from "react";
import { RecoilRoot } from 'recoil';
import AddTodoComponent from "./component/AddTodo";
import TodoList from "./component/TodoList";


const App: React.FC = () => {
    return (
        <RecoilRoot>
            <div className="todoapp">
                <AddTodoComponent />
                <TodoList />
            </div>
        </RecoilRoot>
    );
};

export default App;

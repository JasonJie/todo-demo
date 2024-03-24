import { useState , useCallback } from 'react';
import { useSetRecoilState } from 'recoil';
import { produce } from 'immer';  
import { todoListState } from '../store/atom';
import { generateUniqueRandomId } from '../utils';
import { TodoItemType} from '../interface';
import { TodoListTypeWithoutOther } from '../store/interface' 




const AddTodoComponent = () => {
    const [inputValue, setInputValue] = useState<string>("");
    const setTodo = useSetRecoilState(todoListState);


    const addTodo = useCallback((todoItem: TodoListTypeWithoutOther) => {
        setTodo((todoList) =>
            produce(todoList ,(draft :TodoItemType[]) => {
              draft.push({
                id: generateUniqueRandomId(),
                isComplete: false,
                ...todoItem,
              });
            })
          );
    },[setTodo]);

    
    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setInputValue(e.target.value);
        },
        []
    );

    const keyUp = useCallback(
        (e: React.KeyboardEvent) => {
            if (e.keyCode === 13) {
                if (inputValue) {
                    addTodo({context : inputValue})
                    setInputValue("");
                }
            }
        },
        [addTodo, inputValue]
    );

    return (
        <div className="header">
            <h1>todos</h1>
            <input
                 className="new-todo"
                 placeholder="What needs to be done?"
                 value={inputValue}
                 onChange={handleChange}
                 onKeyUp={keyUp}
            />
        </div>
    );
};

export default AddTodoComponent;

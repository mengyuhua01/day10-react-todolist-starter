import {useState} from "react";
import TodoModal from './TodoModal';
import {DeleteOutlined, InfoCircleOutlined,EditOutlined} from '@ant-design/icons';
import TodoGenerator from './TodoGenerator';
import './TodoList.css';
import { useTodoService } from '../hooks/useTodoService';
const TodoList = () => {
    const { todos, updateTodo, removeTodo, addTodo } = useTodoService();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentTodo, setCurrentTodo] = useState(null);
    const handleOk = () => {
        if (currentTodo) {
            updateTodo(currentTodo.id, { text: currentTodo.text, done: currentTodo.done });
        }
        setIsModalOpen(false);
        setCurrentTodo(null);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const showModal = (todo) => {
        setCurrentTodo(todo);
        setIsModalOpen(true);
    };

    return (
        <div className={"to-do-list"}><h1>This is Your TodoList</h1>
            {
                todos.length > 0 ? (
                    todos.map(({ id, done, text }) => (
                        <div className="todo-row" key={id}>
                            <div className={`to-do ${done ? 'done' : ''}`} onClick={() => updateTodo(id, { text, done: !done })}>
                                {text}
                            </div>
                            <DeleteOutlined className={"delete-button"} onClick={() => {
                                removeTodo(id)
                            }}/>
                            <EditOutlined  className={"edit-button"} onClick={() =>{
                                showModal({ id, text, done })
                            }}/>
                        </div>
                    ))
                ) : (
                    <div className="todo-empty">
                        <InfoCircleOutlined style={{fontSize: 22, color: '#faad14'}}/>
                        <h3>Add the things you need to do today</h3>
                    </div>
                )
            }
            <TodoGenerator addTodo={addTodo} />
            <TodoModal
                open={isModalOpen}
                todo={currentTodo}
                setTodo={setCurrentTodo}
                onOk={handleOk}
                onCancel={handleCancel}
            />
        </div>
    );
}

export default TodoList
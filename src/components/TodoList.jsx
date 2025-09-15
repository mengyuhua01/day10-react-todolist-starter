import {useContext, useEffect, useState} from "react";
import {TodoContext} from "../contexts/TodoContext";
import { Button, Modal } from 'antd';
import {DeleteOutlined, InfoCircleOutlined,EditOutlined} from '@ant-design/icons';
import TodoGenerator from './TodoGenerator';
import './TodoList.css';
import {getTodos,deleteTodos,updateTodos} from '../apis/api'

const TodoList = () => {
    const {state, dispatch} = useContext(TodoContext)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    async function toggleDone(id) {
        const action = {type: "DONE", id: id}
        const todo = state.find(todo => todo.id === id)
        const newTodo = {...todo, done: !todo.done}
        await updateTodos(id,newTodo)
        dispatch(action)
    }

    async function removeTodo(id) {
        try {
            await deleteTodos(id);
            dispatch({type: "REMOVE", id: id});
        } catch (error) {
            console.error("删除失败", error);
        }
    }

    useEffect(() => {
        getTodos().then(response => {
            dispatch({type: 'LOAD_TODOS', todos: response.data})
        });
    }, []);
    return (
        <div className={"to-do-list"}><h1>This is Your TodoList</h1>
            {
                state.length > 0 ? (
                    state.map(({id, done, text}) => (
                        <div className="todo-row" key={id}>
                            <div className={`to-do ${done ? 'done' : ''}`}>
                                {text}
                            </div>
                            <DeleteOutlined className={"delete-button"} onClick={() => {
                                removeTodo(id)
                            }}/>
                            <EditOutlined  className={"edit-button"} onClick={() =>{
                                showModal()
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
            <TodoGenerator/>
            <Modal
                title="Basic Modal"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <p></p>
            </Modal>
        </div>
    );
}

export default TodoList
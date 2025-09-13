import {useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";
import {DeleteOutlined, InfoCircleOutlined} from '@ant-design/icons';
import AddList from './AddList';
import './TodoList.css';

const TodoList = () => {
    const {state, dispatch} = useContext(TodoContext)

    function toggleDone(id) {
        const action = {type: "DONE", id: id}
        dispatch(action)
    }
    function removeTodo(id) {
        const action = {type: "REMOVE", id: id}
        dispatch(action)
    }

    return (
        <div className={"to-do-list"}><h1>This is Your TodoList</h1>
            {
                state.length > 0 ? (
                    state.map(({id,done,text}) => (
                        <div className="todo-row" key={id}>
                            <div className={`to-do ${done ? 'done' : ''}`} onClick={() => {toggleDone(id)}}>
                                {text}
                            </div>
                            <DeleteOutlined className={"delete-button"} onClick={()=>{
                                removeTodo(id)
                            }}/>
                        </div>
                    ))
                ) : (
                    <div className="todo-empty">
                        <InfoCircleOutlined style={{fontSize: 22, color: '#faad14'}} />
                        <h3>Add the things you need to do today</h3>
                    </div>
                )
            }
            <AddList />
        </div>
    );
}

export default TodoList
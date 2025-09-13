import {useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";
import './TodoList.css';

const TodoList = () => {
    const {state,dispatch} = useContext(TodoContext)
    function toggleDone(id){
        const action = {type:"DONE",id:id}
        dispatch(action)
    }
    return (
        <div className={"to-do-list"}>This is the TodoList Component.
            {
                state.map(({id,done,text}) => <div className={`to-do ${done ?'done':''}`} onClick={() => {toggleDone(id)}}>{text}</div>)
            }
        </div>
    );
}

export default TodoList
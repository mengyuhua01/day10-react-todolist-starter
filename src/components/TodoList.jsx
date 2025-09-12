import {useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";
import './TodoList.css';

const TodoList = () => {
    const {state,dispatch} = useContext(TodoContext)
    // function toggleDone(id){
    //     const action = {type:"DONE",id:id}
    //     dispatch(action)
    // }
    return (
        <div>This is the TodoList Component.
            {
                state.map(item => <div className={"to-do"}>{item.text}</div>)
            }
        </div>
    );
}

export default TodoList
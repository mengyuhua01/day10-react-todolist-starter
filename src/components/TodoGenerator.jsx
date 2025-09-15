import React, {useContext, useState} from 'react';
import {Button, Input} from "antd";
import {TodoContext} from "../contexts/TodoContext";
import './TodoGenerator.css'
import {addTodos} from '../apis/api'

const TodoGenerator = () => {
    const {dispatch} = useContext(TodoContext)
    const [value, setValue] = useState('');

    async function addTodo() {
        if (value.trim()) {
            const todo = {text: value.trim(), done: false}
            const {data} =  await addTodos(todo);
            const action = {type: 'ADD', newTodo: data}
            dispatch(action);
            setValue('');
        }
    }

    return <div className="add-list-row">
        <Input
            placeholder="Please add your todo"
            value={value}
            onChange={e => setValue(e.target.value)}
        />
        <Button type="primary" onClick={addTodo}>add</Button>
    </div>
}
export default TodoGenerator

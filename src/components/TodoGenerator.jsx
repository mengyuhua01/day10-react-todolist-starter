import React, {useState} from 'react';
import {Button, Input} from "antd";
import './TodoGenerator.css'

const TodoGenerator = ({ addTodo }) => {
    const [value, setValue] = useState('');

    async function addInputValue() {
        if (value.trim()) {
            const todo = {text: value.trim(), done: false}
            await addTodo(todo);
            setValue('');
        }
    }

    return <div className="add-list-row">
        <Input
            placeholder="Please add your todo"
            value={value}
            onChange={e => setValue(e.target.value)}
        />
        <Button type="primary" onClick={addInputValue}>add</Button>
    </div>
}
export default TodoGenerator

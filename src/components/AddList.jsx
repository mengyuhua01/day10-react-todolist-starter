import React, {useContext, useState} from 'react';
import {Button, Input} from "antd";
import {TodoContext} from "../contexts/TodoContext";
import './AddList.css'

const AddList = () => {
    const {dispatch} = useContext(TodoContext)
    const [value, setValue] = useState('');
    function addTodo() {
        if (value.trim()) {
            dispatch({ type: 'ADD', text: value.trim() });
            setValue('');
        }
    }
    return <div className="add-list-row">
        <Input
            style={{ width: 300 }}
            placeholder="Please add your todo"
            value={value}
            onChange={e => setValue(e.target.value)}
        />
        <Button type="primary" onClick={addTodo} style={{ marginLeft: 12 }}>add</Button>
    </div>
}
export default AddList

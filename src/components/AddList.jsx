import React, {useContext, useState} from 'react';
import {Button, Input} from "antd";
import {TodoContext} from "../contexts/TodoContext";

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
            style={{ width: 600 }}
            placeholder="Basic usage"
            value={value}
            onChange={e => setValue(e.target.value)}
        />
        <Button type="primary" onClick={addTodo} style={{ marginLeft: 12 }}>add</Button>
    </div>
}
export default AddList

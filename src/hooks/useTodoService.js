import {useState, useEffect, useCallback} from 'react';
import {getTodos,addTodos,deleteTodos,updateTodos} from '../apis/api';
import { message } from 'antd';

export const useTodoService = () => {
    const [todos, setTodos] = useState([]);

    const loadTodos = useCallback(async () => {
        try {
            const {data} = await getTodos();
            setTodos(data);
        } catch (err) {
            console.error('加载todos失败:', err);
            message.error('加载 todos 失败');
        }
    }, []);

    const addTodo = async (todo) => {
        try {
            await addTodos(todo);
            await loadTodos();
            message.success('添加 todo 成功');
        } catch (err) {
            console.error('添加todo失败:', err);
            message.error('添加 todo 失败');
        }
    };

    const removeTodo = async (id) => {
        try {
            await deleteTodos(id);
            await loadTodos();
            message.success('删除 todo 成功');
        } catch (err) {
            console.error('删除todo失败:', err);
            message.error('删除 todo 失败');
        }
    };

    const updateTodo = async (id, todo) => {
        try {
            await updateTodos(id, todo);
            await loadTodos();
            message.success('更新 todo 成功');
        } catch (err) {
            console.error('更新todo失败:', err);
            message.error('更新 todo 失败');
        }
    };

    useEffect(() => {
        loadTodos();
    }, [loadTodos]); // Ensure this runs only once on mount

    return {
        todos,
        addTodo,
        removeTodo,
        updateTodo,
        loadTodos
    };
};

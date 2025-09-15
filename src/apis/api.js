import  axios from 'axios'
const instance = axios.create({
    baseURL: 'https://68c78d085d8d9f5147322643.mockapi.io/api/'
})

export const getTodos = async () => await instance.get('/todos')

export const addTodos = async (todo) => await instance.post('/todos',todo)

import  axios from 'axios'
const instance = axios.create({
    baseURL: 'http://localhost:8080/'
})

export const getTodos = async () => await instance.get('/todos')

export const addTodos = async (todo) => await instance.post('/todos',todo)

export const deleteTodos = async (id) => await instance.delete(`/todos/${id}`)

export const updateTodos = async (id,todo) => await instance.put(`/todos/${id}`,todo)

instance.interceptors.request.use(
    (config) => {
        // request configuration
        console.log("request success", config)
        config.metadata = {
            startTime: Date.now()
        }
        return config;
    },
    (error) => {
        // handle request error
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    (response) => {
        // handle response
        console.log("response success", response)
        console.log('Api duration is' + (Date.now() - response.config.metadata.startTime) +'ms')
        return response;
    },
    (error) => {
        // handle response error
        const {status, data} = error.response;
        if (status === 401) {
            alert(`response Error ${status} ${data}`)
            console.log(error.response)
            window.location.href = '/login';
            // do something
        }
        return Promise.reject(error);
    }
);

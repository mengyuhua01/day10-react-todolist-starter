import {useReducer} from "react";
import './App.css';
import TodoList from "./components/TodoList";
import {initialState, todoReducer} from "./reducers/todoReducer";
import {TodoContext} from "./contexts/TodoContext";
import {createBrowserRouter, RouterProvider, useParams} from "react-router";
import {DefaultLayout} from "./layout/DefaultLayout";

function TodoDetails() {
    const {key} = useParams()
    return <h1>This is: {key} Detali</h1>
}

const routes = [
    {
        path: '/',
        element: <DefaultLayout/>,
        children: [
            {
                path: '',
                element: <h1>Home page</h1>
            }, {
                path: 'about',
                element: <h1>About us</h1>
            }, {
                path: 'todo',
                element: <TodoList/>
            }, {
                path: "todo/:key",
                element: <TodoDetails />
            }
        ]
    }
]
const router = createBrowserRouter(routes)

function App() {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    return (
        <div className="App">
            <TodoContext.Provider value={{state, dispatch}}>
                <RouterProvider router={router}>
                    <DefaultLayout />
                </RouterProvider>
            </TodoContext.Provider>

        </div>
    );
}

export default App;

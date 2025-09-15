import {useReducer} from "react";
import './App.css';
import TodoList from "./components/TodoList";
import {initialState, todoReducer} from "./reducers/todoReducer";
import {TodoContext} from "./contexts/TodoContext";
import {createBrowserRouter, NavLink, Outlet, RouterProvider} from "react-router";

function DefaultLayout() {
    return <>
        <header>
            <nav>
                <ul>
                    <li><NavLink to={"/"}>Home</NavLink></li>
                    <li><NavLink to={"/todo"}>Todo List</NavLink></li>
                    <li><NavLink to={"/about"}>About</NavLink></li>
                </ul>
            </nav>
        </header>
        <main>
            <h1>XXXX</h1>
            <Outlet></Outlet>
        </main>
        <footer>
            footer copyright
        </footer>
    </>
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
            },{
                path: 'todo',
                element: <TodoList />
            }
        ]
    }
]
const router = createBrowserRouter(routes)
function App() {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    return (
        <div className="App">
            <TodoContext.Provider value={{state,dispatch}}>
                <RouterProvider router={router}></RouterProvider>
            </TodoContext.Provider>

        </div>
    );
}

export default App;

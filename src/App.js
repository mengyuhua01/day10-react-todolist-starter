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
                    <li><NavLink to={""}>Todo List</NavLink></li>
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
            }
        ]
    }
]
const router = createBrowserRouter(routes)
function App() {
    // the Hooks API manage component data state
    const [state, dispatch] = useReducer(todoReducer, initialState);

    return (
        <div className="App">
         <RouterProvider router={router}></RouterProvider>
        </div>
    );
}

export default App;

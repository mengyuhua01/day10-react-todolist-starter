import {createBrowserRouter} from "react-router";
import {DefaultLayout} from "../layout/DefaultLayout";
import TodoList from "../components/TodoList";
import CompletedTodos from "../components/CompletedTodos";
import HomePage from "../components/HomePage";
import ErrorPage from "../components/ErrorPage";
import {useParams} from "react-router";

function TodoDetails() {
    const {key} = useParams();
    return <h1>This is: {key} Details</h1>;
}

const routes = [
    {
        path: '/',
        element: <DefaultLayout/>,
        children: [
            { path: '', element: <HomePage/> },
            { path: 'about', element: <h1>About us</h1> },
            { path: 'todo', element: <TodoList/> },
            { path: 'completed', element: <CompletedTodos/> },
            { path: "todo/:key", element: <TodoDetails /> }
        ]
    },
    {
        path: '*',
        element: <ErrorPage />
    }
];

export const router = createBrowserRouter(routes);

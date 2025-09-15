import {createBrowserRouter} from "react-router";
import {DefaultLayout} from "../layout/DefaultLayout";
import TodoList from "../components/TodoList";
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
            { path: '', element: <h1>Home page</h1> },
            { path: 'about', element: <h1>About us</h1> },
            { path: 'todo', element: <TodoList/> },
            { path: "todo/:key", element: <TodoDetails /> }
        ]
    }
];

export const router = createBrowserRouter(routes);

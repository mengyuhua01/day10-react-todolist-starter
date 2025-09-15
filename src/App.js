import {useReducer} from "react";
import './App.css';
import TodoList from "./components/TodoList";
import {router} from "./router/router";
import {createBrowserRouter, RouterProvider, useParams} from "react-router";
import {DefaultLayout} from "./layout/DefaultLayout";
function App() {
    
    return (
        <div className="App">
            <RouterProvider router={router}>
                    <DefaultLayout />
            </RouterProvider>

        </div>
    );
}

export default App;

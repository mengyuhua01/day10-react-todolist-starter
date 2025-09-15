import './App.css';
import {router} from "./router/router";
import {DefaultLayout} from "./layout/DefaultLayout";
import {RouterProvider} from "react-router";
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

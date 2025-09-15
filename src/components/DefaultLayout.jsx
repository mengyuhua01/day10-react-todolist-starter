import {NavLink, Outlet} from "react-router";
import TodoList from "./TodoList";

export function DefaultLayout() {
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
export default DefaultLayout;
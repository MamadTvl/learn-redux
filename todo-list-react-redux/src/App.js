import './App.css';
import AddTodo from "./components/Addtodo";
import Todolist from "./components/Todolist";
import {Provider} from "react-redux";
import store from "./redux/store";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <AddTodo/>
                <Todolist />
            </div>
        </Provider>
    );
}

export default App;

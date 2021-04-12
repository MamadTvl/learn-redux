import React from 'react'
import './App.css';
import {Provider} from 'react-redux'
import MobContainer from "./components/mobContainer";
import store from "./redux/store";
import HooksContainer from "./components/HooksMobContainer";


// Action -> Reducer -> Redux Store
//          state -> React App -> dispatch

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <MobContainer/>
                <HooksContainer/>
            </div>
        </Provider>
    );
}

export default App;

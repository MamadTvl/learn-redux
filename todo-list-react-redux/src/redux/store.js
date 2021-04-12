import {createStore} from "redux";
import reducer from "./todo/reducer";

const store = createStore(reducer)

export default store

import {createStore} from 'redux'
import mobReducer from "./mob/mobReducer";

const store = createStore(mobReducer)

export default store

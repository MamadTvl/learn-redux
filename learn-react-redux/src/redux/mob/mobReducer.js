import {BUY_MOB} from "./mobTypes";

const initialState = {
    numberOfMobs: 100,
}
const mobReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_MOB:
            return {
                ...state,
                numberOfMobs: state.numberOfMobs - 1,
            }
        default :
            return state
    }
}
export default mobReducer

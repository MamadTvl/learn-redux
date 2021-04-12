import {INSERT_TODO, TOGGLE_TODO} from "./types";

const initialState = {
    data: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INSERT_TODO:
            return {
                ...state,
                data: [
                    ...state.data,
                    {
                        id: action.payload.id,
                        content: action.payload.content,
                        complete: false,
                    }
                ]
            }
        case TOGGLE_TODO:
            const {id} = action.payload

            return {
                ...state,
                data: state.data.map((el) => {
                        if (el.id === id) {
                            return {
                                id: el.id,
                                content: el.content,
                                complete: !el.complete,
                            }
                        } else {
                            return el
                        }
                    })
            }
        default:
            return state
    }
}
export default reducer

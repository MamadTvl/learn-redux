import {INSERT_TODO, TOGGLE_TODO} from "./types";

let initialID = 0

export const insertTodo = (row) => {
    return {
        type: INSERT_TODO,
        payload: {
            id: ++initialID,
            content: row,
        }
    }
}
export const toggledTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        payload: {
            id
        }
    }
}

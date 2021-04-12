import React from 'react'
import {connect} from 'react-redux'
import {toggledTodo} from "../redux/todo/actions";

const Todo = (props) => {
    return (
        <>
            <li onClick={() => props.toggledTodo(props.row.id)}>
                {
                    props.row && props.row.complete
                        ? <span style={{color: 'green', marginRight: 8}}>Done: </span>
                        : <span style={{color: 'red', marginRight: 8}}>To Do: </span>
                }
                {props.row.content}
            </li>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggledTodo: (id) => dispatch(toggledTodo(id))
    }
}
export default connect(null, mapDispatchToProps)(Todo)

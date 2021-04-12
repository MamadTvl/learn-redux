import React from 'react'
import {connect} from 'react-redux'
import Todo from "./Todo";

function Todolist(props) {
    return (
        <div>
            <ul style={{listStyleType: "none"}}>
                {
                    props.todos && props.todos.length === 0 &&
                        <h3>nothing to show! insert todo</h3>
                }
                {
                    props.todos.length > 0 &&
                        props.todos.map((todo, index) => (
                            <Todo row={todo} key={index}>
                                {
                                    todo.content
                                }
                            </Todo>
                        ))
                }
            </ul>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        todos: state.data
    }
}
export default connect(mapStateToProps)(Todolist)

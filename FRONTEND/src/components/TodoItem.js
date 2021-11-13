import React from "react"

function TodoItem(props) {

  let textDecorationClass = props.todo.completed
  ? "text-decoration-line-through"
  : "";
let textColorClass = props.todo.completed
  ? "text-primary"
  : "";

  return (
    <div className="tasks">
      <i
        onClick={() => props.deletTodoHandler(props.todo.id)}
        className="fa fa-trash"
      ></i>

      <li className={`${textDecorationClass} ${textColorClass}`} type="text">
        {props.todo.title}
      </li>
      <input onClick={() => props.markComplete(props.todo.id)} className="check-todo" type="checkbox" />
    </div>
  )
}

export default TodoItem

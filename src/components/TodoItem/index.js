// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoItemDetails, deleteTodo} = props
  const {id, title} = todoItemDetails

  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="Todo-item-container">
      <div className="Todo-item-card">
        <p className="TodoItem-description">{title}</p>
        <button className="button" type="button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem

//for best practice in top we import all needed items
import {Component} from 'react'
import TodoItem from '../TodoItem'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here
class SimpleTodo extends Component {
  state = {initialTodosList: initialTodosList}

  deleteTodo = uniqueNo => {
    const {initialTodosList} = this.state
    const filteredTodoData = initialTodosList.filter(
      each => each.id !== uniqueNo,
    )

    this.setState({initialTodosList: filteredTodoData})
  }

  render() {
    const {initialTodosList} = this.state

    return (
      <div className="App-container">
        <div className="Simple-Todo-card-container">
          <h1 className="Todo-heading">Simple Todos</h1>
          <ul className="Todo-list">
            {initialTodosList.map(eachTodo => (
              <TodoItem
                key={eachTodo.id}
                todoItemDetails={eachTodo}
                deleteTodo={this.deleteTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodo


/*
  git config --global user.email naikc8468@gmail.com
   git remote add origin https://github.com/Chetannaik-9535/Simple-Todos.git
*/
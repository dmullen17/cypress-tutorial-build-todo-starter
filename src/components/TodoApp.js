import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import Footer from './Footer'


export default class TodoApp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentToDo: '',
      todos: []
    }
      
    this.handleNewToDoChange = this.handleNewToDoChange.bind(this);
  }


  handleNewToDoChange(evt) {
      this.setState({currentToDo: evt.target.value});
  }

  render () {
    return (
      <Router>
        <div>
          <header className="header">
            <h1>todos</h1>
            <TodoForm currentToDo={this.state.currentToDo}
             handleNewToDoChange={this.handleNewToDoChange} />
          </header>
          <section className="main">
            <TodoList todos={this.state.todos} />
          </section>
          <Footer />
        </div>
      </Router>
    )
  }
}

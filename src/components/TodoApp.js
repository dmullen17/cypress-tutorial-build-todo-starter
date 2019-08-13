import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import Footer from './Footer'
import {saveToDo} from '../lib/service'


export default class TodoApp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentToDo: '',
      todos: []
    }
      
    this.handleNewToDoChange = this.handleNewToDoChange.bind(this);
    this.handleToDoSubmit = this.handleToDoSubmit.bind(this);
  }


  handleNewToDoChange(evt) {
      this.setState({currentToDo: evt.target.value});
  }
    
  handleToDoSubmit(evt) {
      evt.preventDefault();  //prevents page reloading
      const newToDo = {name: this.state.currentToDo, isComplete: false};
      // save newToDo to the database 
      saveToDo(newToDo)
        .then(({data}) => {
          console.log(data);
          this.setState({
              todos: this.state.todos.concat(data)
          })
      })
        .catch(() => this.setState({error: true}))
      
      // Clear the input field 
      this.setState({currentToDo: ''})
  }

  render () {
    return (
      <Router>
        <div>
          <header className="header">
            <h1>todos</h1>
            {this.state.error ? <span className='error'>Oh no!</span> : null}
            <TodoForm currentToDo={this.state.currentToDo}
             handleToDoSubmit={this.handleToDoSubmit}
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

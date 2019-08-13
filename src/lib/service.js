import axios from "axios"

// arrow function will implicitly return the promise
export const saveToDo = (todo) => 
    axios.post('http://localhost:3030/api/todos', todo)
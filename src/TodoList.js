import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import './TodoList.css';

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos: []
        }
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
        this.edit = this.edit.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this);
    }
    create(newTodo){
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }
    remove(id){
        this.setState({
            todos: this.state.todos.filter(td => td.id !== id)
        })
    }
    edit(id, updatedTodo){
        this.setState({
            todos: this.state.todos.map(td => {
                if(td.id === id){
                    return {task: updatedTodo, id: td.id, completed: false}
                } else {
                    return td
                }
        })
    })}
    toggleCompletion(id){
        this.setState({
            todos: this.state.todos.map(td => {
                if(td.id === id){
                    return {task: td.task, id: td.id, completed: !td.completed}
                } else {
                    return td
                }
            })
        })
    }

    render(){
        const todos = this.state.todos.map(todo => {
            return <Todo key={todo.id} id={todo.id} task={todo.task} removeTodo={this.remove} editTodo={this.edit} completed={todo.completed} toggleTodo={this.toggleCompletion} />
        })
        return(
            <div className="TodoList">
                <h1>Todo List</h1>
                <ul>
                    {todos}
                </ul>
                <NewTodoForm addNewTodo={this.create} />
            </div>
        )
    }
}

export default TodoList;
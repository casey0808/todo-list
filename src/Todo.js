import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import './Todo.css';

class Todo extends Component {
    constructor(props){
        super(props);
        this.state = {
            isEditing: false
        }
        this.handleRemove = this.handleRemove.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }
    handleRemove(event){
        this.props.removeTodo(this.props.id);
    }
    
    toggleForm(){
        this.setState({
            isEditing: !this.state.isEditing
        })
    }
    handleToggle(){
        this.props.toggleTodo(this.props.id);
    }
    render(){
        if(this.state.isEditing){
            return (
                <div>
                    <NewTodoForm 
                        isEditing 
                        editTodo={this.props.editTodo}
                        id={this.props.id}
                        key={this.props.id}
                        toggleForm={this.toggleForm}
                    />
                </div>
            )
        } else {
            return(
                <div className='todo'>
                    <li 
                        className={this.props.completed? 'todo-task completed' : 'todo-task'} 
                        onClick={this.handleToggle}
                    >
                        {this.props.task}
                         
                    </li>
                    <div className='todo-buttons'>
                        <span onClick={this.toggleForm} className='fa fa-pen'></span>
                        <span onClick={this.handleRemove} className='fa fa-trash-alt' ></span>
                    </div>
                </div>
            )
        }
        
    }
}

export default Todo;
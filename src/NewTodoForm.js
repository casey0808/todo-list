import React, { Component } from 'react';
import uuid from 'uuid/v4';
import './NewTodoForm.css';

class NewTodoForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            task: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit(event){
        event.preventDefault();
        if(this.props.isEditing){
            this.props.editTodo(this.props.id, this.state.task);
            this.props.toggleForm();
        } else {
            this.props.addNewTodo({...this.state, id: uuid(), completed: false});
            this.setState({
                task: ''
            })
        } 
    }

    render(){
        return(
            <form className='NewTodoForm' onSubmit={this.handleSubmit}>
                <label htmlFor='task'>{this.props.isEditing? '': 'Add New Todo: '}</label>
                <input 
                    id='task'
                    type='text'
                    name='task'
                    value={this.state.task}
                    onChange={this.handleChange}
                >
                </input>
                <button>{this.props.isEditing? 'Update' : 'Add'}</button>
            </form>
        )
    }
}

export default NewTodoForm;
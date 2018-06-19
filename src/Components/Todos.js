import React, { Component } from 'react';
import TodoItem from './TodoItem'
import PropTypes from 'prop-types';

class Todos extends Component{
    deleteTodoList(id){
        this.props.onDelete(id);
    }
    render(){
        let toDoItems;
        if(this.props.todos){
            toDoItems = this.props.todos.map(todo => {
                return (
                    <TodoItem onDelete={this.deleteTodoList.bind(this)} key={todo.title} todo={todo} />
                );
            });
        }

        return (
            <div className='todo'>
                <h3>Todo list</h3>
                {toDoItems}
            </div>
        )
    }
}
Todos.propTypes = {
    todos: PropTypes.array
};

export default Todos;

import React, { Component} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component{
    deleteTodos(id){
        // console.log("test");
        this.props.onDelete(id)
    }
    render() {
        let {todo} = this.props;
        return(
            <li className='projects'>
                <strong>{todo.title}</strong><a href="#" onClick={this.deleteTodos.bind(this, this.props.todo.id)}>X</a>
            </li>
        );
    }
}
TodoItem.propTypes = {
    todo: PropTypes.object
};
export default TodoItem;
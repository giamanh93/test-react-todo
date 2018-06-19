import React, { Component} from 'react';
import PropTypes from 'prop-types';

class ProjectItem extends Component{
    deleteProject(id){
    // console.log("test");
        this.props.onDelete(id)
    }
   render() {
       let {project} = this.props;
       return(
               <li className='projects'>
                   <strong>{project.id}</strong> - {project.category}<a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>X</a>
               </li>
       );
   }
}
ProjectItem.propTypes = {
    project: PropTypes.object,
    onDelete: PropTypes.func
};
export default ProjectItem;
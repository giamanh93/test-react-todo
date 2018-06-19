import React, { Component } from 'react';
import './App.css';
import uuid from 'uuid';
import Projects from './Components/Projects.js';
import AddProjects from "./Components/AddProjects.js";
import Todos from "./Components/Todos.js";
import $ from 'jquery';


class App extends Component {
    constructor() {
        super();
        this.state = {
            projects: [],
            todos: []
        }
    }
    getToDo() {
        $.ajax({
            url : 'https://jsonplaceholder.typicode.com/todos',
            dataType : 'json',
            cache : false,
            success : function (data) {
                this.setState({todos: data}, function () {
                    // this.props.addProject(this.state.newProject);
                })
            }.bind(this),
            error: function (xhr, status, err) {
                console.log(err);
            }
        })
    }

    getProjects() {
        this.setState({projects: [
                {
                    id:uuid.v4(),
                    title: 'React Js',
                    category: 'Tutorial React Js'
                },
                {
                    id:uuid.v4(),
                    title: 'Lập trình PHP',
                    category: 'Tutorial PHP'
                },
                {
                    id:uuid.v4(),
                    title: 'HTML tutorial',
                    category: 'Tutorial html tutorial'

                }
            ]
        });

    }

    componentWillMount() {
        this.getProjects();
        this.getToDo();
    }


    componentDidMount() {
        this.getToDo();
    }

    handleAddProject(project){
        console.log(project);
        let {projects} = this.state;
        projects.push(project);
        this.setState({projects: projects});
    }
    handeleDeleteProject(id) {
        let {projects} = this.state;
        let index = projects.findIndex(x => x.id === id);
        projects.splice(index,1);
        this.setState({projects:projects})
    }
    handleAddTodo(id) {
        let {todos} = this.state;
        let index = todos.findIndex(x => x.id === id);
        todos.splice(index,1);
        this.setState({todos: todos});
    }
  render() {
    return (
      <div className="container">
          <AddProjects addProject={this.handleAddProject.bind(this)}/>
        <Projects onDelete={this.handeleDeleteProject.bind(this)} projects = {this.state.projects}/>

          <div>
              <Todos onDelete={this.handleAddTodo.bind(this)} todos={this.state.todos}/>
          </div>
      </div>
    );
  }
}
export default App;

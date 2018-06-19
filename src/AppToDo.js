import React, {Component} from 'react';
import TaskForm from './Components/TaskForm.js';
import Control from './Components/Control.js';
import TaskList from './Components/TaskList.js';
import uuid from 'uuid';


class AppToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks : [],
            isDisplayForm : false,
            taskEditing : null
        }
    }

    componentWillMount() {
        if(localStorage && localStorage.getItem('tasks')) {
            let tasks = JSON.parse(localStorage.getItem('tasks'));
            this.setState({ tasks: tasks })
        }
    }

    onToggleForm() {
        if(this.state.isDisplayForm && this.state.taskEditing !== null) {
            this.setState({
                isDisplayForm : true,
                taskEditing : null
            })
        }else {
            this.setState({
                isDisplayForm : !this.state.isDisplayForm,
                taskEditing : null
            })
        }

    }

    onCloseForm() {
       this.setState({
           isDisplayForm : false
       })
    }

    onSubmit(data) {
        let {tasks} = this.state;
        if(data.id === ''){
            data.id = uuid.v4();
            tasks.push(data);
        }else {
            let index = tasks.findIndex(x => x.id === data.id);
            tasks[index] = data;
        }
        this.setState({
            tasks: tasks,
            taskEditing : null
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    onUpdateStatus(id) {
        let {tasks} = this.state;
       let index = this.findIndex(id);
       // console.log(index);
       if(index !== -1) {
           tasks[index].status = !tasks[index].status;
       }
       this.setState({
           tasks : tasks
       });
       localStorage.setItem('tasks' , JSON.stringify(tasks));
    }
    findIndex(id) {
        let {tasks} = this.state;
        let result = -1;
        tasks.forEach((task, index) => {
            if(task.id === id) {
                result =  index;
            }
        });
        return result;
    }
    onDelete(id) {
        let {tasks} = this.state;
        let index = tasks.findIndex(x => x.id === id);
        tasks.splice(index , 1);
        this.setState({
            tasks : tasks
        });
        this.onCloseForm();
        localStorage.setItem('tasks', JSON.stringify(tasks));

    }
    onUpdate(id){
        let {tasks} = this.state;
        let index = tasks.findIndex(x => x.id === id);
        let taskEditing = tasks[index];
        this.setState({
            taskEditing : taskEditing
        });
        this.onShowForm();
    }
    onShowForm =() => {
        this.setState({
            isDisplayForm : true
        })
    };
    render() {
        let {tasks, isDisplayForm, taskEditing} = this.state;
        let elmDisplayForm = isDisplayForm ? <TaskForm taskEditing={taskEditing} onCloseForm = {this.onCloseForm.bind(this)} onSubmit = {this.onSubmit.bind(this)}/> : '';
        return (
            <div className="container">
                <div className="text-center">
                    <h1>Quản Lý Công Việc</h1>
                    <hr/>
                </div>
                <div className="row">
                    <div className={ isDisplayForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : ''}>
                        {elmDisplayForm}
                    </div>
                    <div className={isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
                        <button type="button" className="btn btn-primary" onClick={this.onToggleForm.bind(this)}>
                            <span className="fa fa-plus mr-5"></span>Thêm Công Việc
                        </button>
                            <Control />
                        <div className="row mt-15">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                               <TaskList onUpdate={this.onUpdate.bind(this)} onDelete = {this.onDelete.bind(this)} onUpdateStatus = {this.onUpdateStatus.bind(this)} tasks={tasks}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default AppToDo;

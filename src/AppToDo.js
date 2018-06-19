import React, {Component} from 'react';
// import TaskForm from './Components/TaskForm.js';
// import Control from './Components/Control.js';
// import TaskList from './Components/TaskList.js';
import uuid from 'uuid';


export default class AppToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list : [],
            isEdit : false,
            current : null
        }
    }

    addItem(info) {

    }

    formSubmit(e) {
console.log('hgjgjgjh');
    }

    render() {
        const state = this.state;
        const isEdit = state.isEdit;

        return (
            <div className="container">
                <div className="row">
                    <div className={ isEdit ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : ''}>
                        <div className="panel-group">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    Thêm/Sửa công việc
                                </div>
                                <div className="panel-body">
                                    <form action="" onSubmit={this.formSubmit.bind(this)}>
                                        <div className="form-group">
                                            <label htmlFor="id">ID:</label>
                                            <input type="email" className="form-control" id="id"/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="Name">Name:</label>
                                            <input type="text" className="form-control" id="Name"  />
                                        </div>
                                        <div className="checkbox">
                                            <label><input type="checkbox" id="status" /> Status</label>
                                        </div>
                                    </form>
                                </div>
                                <div className="panel-footer">
                                <button type="submit" className="btn btn-default"> Lưu </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={isEdit ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
                        <div className="row mt-15">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <div className="panel-group">
                                    <div className="panel panel-default">
                                        <div class="panel-heading">
                                            Quản Lý Công Việc
                                        </div>
                                        <div className="panel-body">
                                            <table class="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th>ID</th>
                                                        <th>Name</th>
                                                        <th>Status</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>ID</td>
                                                        <td>Name</td>
                                                        <td>Status</td>
                                                        <td>Action</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="panel-footer">
                                        <button type="button" className="btn btn-primary" onClick={this.addItem(null)}>
                                            <i className="fa fa-plus mr-5"></i>Thêm Công Việc
                                        </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

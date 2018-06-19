import React, {Component} from 'react';

class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            status: false
        }
    }
    onCloseForm() {
        this.props.onCloseForm();
    }
    onChange(event) {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    if(name === 'status') {
         value = target.value === 'true' ? true : false;
    }
    this.setState({
        [name] : value
    })
    }
    onSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.onClear();
        this.onCloseForm();
    }
    onClear() {

        //     name : '',
        //     status : false
        // })
            let state = this.state;
            state.name = '';
            state.statue = false;
            this.setState(state);
    }
    componentWillMount() {
        if(this.props.taskEditing){
            this.setState({
                id : this.props.taskEditing.id,
                name : this.props.taskEditing.name,
                status : this.props.taskEditing.status,
            })
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps && nextProps.taskEditing) {
            this.setState({
                id : nextProps.taskEditing.id,
                name : nextProps.taskEditing.name,
                status : nextProps.taskEditing.status,
            });
        }else if(!nextProps.taskEditing) {
            this.setState({
                id: '',
                name: '',
                status: false
            })
        }
    }

    render() {
        let {id} = this.state;
        return (
            <div>
                <div className="panel panel-warning">
                    <div className="panel-heading">
                        <h3 className="panel-title">{id ? 'Cập nhật công Việc' : ' Thêm Công Việc'}</h3>
                        <span className="fa fa-times-circle text-right" onClick={this.onCloseForm.bind(this)}>&times;</span>
                    </div>
                    <div className="panel-body">
                        <form onSubmit={this.onSubmit.bind(this)}>
                            <div className="form-group">
                                <label>Tên :</label>
                                <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.onChange.bind(this)}/>
                            </div>
                            <label>Trạng Thái :</label>
                            <select className="form-control" required="required" name="status" value={this.state.status} onChange={this.onChange.bind(this)}>
                                <option value={true}>Kích Hoạt</option>
                                <option value={false}>Ẩn</option>
                            </select>
                            <br/>
                            <div className="text-center">
                                <button type="submit" className="btn btn-warning">Thêm</button>
                                &nbsp;
                                <button type="submit" className="btn btn-danger" onClick={this.onClear.bind(this)}>Hủy Bỏ</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default TaskForm;
import React, {Component} from 'react';

class TaskItem extends Component {
    onUpdateStatus(id) {
        this.props.onUpdateStatus(id);
    }

    handeleDelete(id) {
        this.props.onDelete(id);
    }

    onUpdate(id) {
        this.props.onUpdate(id);
    }
    render() {
        let {task, index} = this.props;
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{task.name}</td>
                <td className="text-center"><span className={task.status === true ? 'label label-danger' : 'label label-success'} onClick={this.onUpdateStatus.bind(this, task.id)}>{task.status === true ? 'Kích Hoạt' : 'Ẩn'}</span>
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-warning" onClick={this.onUpdate.bind(this, task.id)}>
                        <span className="fa fa-pencil mr-5"></span>Sửa
                    </button>
                    &nbsp;
                    <button type="button" className="btn btn-danger" onClick={this.handeleDelete.bind(this, task.id)}>
                        <span className="fa fa-trash mr-5"></span>Xóa
                    </button>
                </td>
            </tr>
        )
    }
}

export default TaskItem;
import React, {Component} from 'react';
import uuid from 'uuid';


export default class AppToDo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list : [
				{id: "6e75bb30-f5af-43f8-b586-64de32378b09", name: "demo 1", status: true},
				{id: "7b6915ac-bd28-4bed-9264-28c285f20c46", name: "demo 2", status: false}
			],
			isShowEdit : false,
			current : null
		};

		this.handleChange = this.handleChange.bind(this);
		this.formSubmit = this.formSubmit.bind(this);
	}

	setEdit(info) {
		let state = this.state;
		state.isShowEdit = true;
		state.current = info ? Object.assign({}, info): {
			id: '',
			name: '',
			status: false
		};
		this.setState(state);
	}

	remove(info, index) {
		console.log('delete', info);
		let state = this.state;
		let list = state.list;
		list.splice(index, 1);
		state.isShowEdit = false;
		this.setState(state);
	}

	handleChange(key, val) {
		let state = this.state;
		let current = state.current;
		current[key] = val;
		this.setState(state);
	}

	cancelEdit() {
		let state = this.state;
		state.isShowEdit = false;
		this.setState(state);
	}

	formSubmit(event) {
		event.preventDefault();
		let state = this.state;
		const current = state.current;
		if(current.name.trim() === '') {
			return alert('Nhập tên đi bố!');
		}
		if(current.id !== '') {
			// update
			const index = state.list.findIndex(_info => {
				return _info.id === current.id;
			});
			if(index >= 0) {
				state.list[index] = {
					...state.current
				}
			}
		} else {
			// insert
			state.list.push({
				id: uuid.v4(),
				name: current.name,
				state: current.status
			});
		}
		state.isShowEdit = false;
		this.setState(state);
	}

	render() {
		const state = this.state;
		const list = state.list;
		const isShowEdit = state.isShowEdit;
		const current = state.current || {};
		const isEdit = current ? current.id !== '': false;

		return (
			<div className="container">
				<div className="row">
					<div style={{display: isShowEdit? 'block': 'none'}} className="col-xs-4 col-sm-4 col-md-4 col-lg-4" >
						<div className="panel-group">
							<div className="panel panel-default">
								<form onSubmit={this.formSubmit}>
									<div className="panel-heading">
										<h4>{ isEdit ? (
												'Sửa công việc'
												): (
												'Thêm công việc'
											)
										}</h4>
									</div>
									<div className="panel-body">
											<div className="form-group">
												<label htmlFor="id">ID:</label>
												<input type="text" className="form-control" value={current.id} disabled/>
											</div>
											<div className="form-group">
												<label htmlFor="Name">Name:</label>
												<input onChange={e => this.handleChange('name', e.target.value)} placeholder="name" type="text" className="form-control"  value={current.name} />
											</div>
											<div className="checkbox">
												<label><input onClick={e => this.handleChange('status', e.target.checked)} type="checkbox" checked={current.status} /> Status</label>
											</div>
									</div>
									<div className="panel-footer text-center">
										<button type="submit" className="btn btn-default"> Lưu </button>&nbsp;
										<button onClick={() => this.cancelEdit()} type="button" className="btn btn-default"> Hủy </button>
									</div>
								</form>
							</div>
						</div>
					</div>

					<div className={isShowEdit ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
						<div className="row mt-15">
							<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<div className="panel-group">
									<div className="panel panel-default">
										<div className="panel-heading">
											<h4>Danh sách công việc</h4>
										</div>
										<div className="panel-body">
											<table className="table table-bordered">
												<thead>
												<tr>
													<th style={{width: '30%'}}>ID</th>
													<th style={{width: '40%'}}>Name</th>
													<th style={{width: '15%'}} className="text-center">Status</th>
													<th style={{width: '15%'}} className="text-center">Action</th>
												</tr>
												</thead>
												<tbody>
												{
													list.map((info, index) => {
														return (
															<tr key={index}>
																<td>{info.id}</td>
																<td>{info.name}</td>
																<td className="text-center">
																	<i style={{display: info.status? 'block': 'none'}} className="fa fa-check-square"></i>
																	<i style={{display: !info.status? 'block': 'none'}} className="far fa-square"></i>
																</td>
																<td className="text-center">
																	<a href="javascript: void(0);" onClick={() => this.setEdit(info)} type="button" className="btn btn-link">Edit</a> |
																	<a href="javascript:void(0);" onClick={() => this.remove(info, index)} type="button" className="btn btn-link">Delete</a>
																</td>
															</tr>
														)
													})
												}
												</tbody>
											</table>
										</div>
										<div className="panel-footer text-center">
											<button type="submit" className="btn btn-primary" onClick={() => this.setEdit(null)}>
												<i className="fa fa-plus"></i>Thêm Công Việc
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

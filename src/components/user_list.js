import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class UserList extends Component {
	componentWillMount() {
		this.props.fetchUsers();
	}

	renderUser(user) {
		return (
			<div key={user.id} className="card card-block">
				<h4 className="card-title">{user.name}</h4>
				<p className="card-text">{user.company.name}</p>
				<a className="btn btn-primary btn-email" target="_blank" href={`http://www.${user.website}`}>Website</a>
			</div>
		);
	}

	render() {
		return (
			<div className="user-list">
				{this.props.users.map(this.renderUser)}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { users: state.users };
}

export default connect(mapStateToProps, actions)(UserList);

import React, { Component } from 'react'
import { connect } from 'react-redux'
import actionsList from '../../Configs/Redux/Actions'

export class Login extends Component {
changeCountt = () => {
    this.props?.changeCount()
}
render() {
    return (
		<div className="container shadow p-5 mt-5 rounded-lg">
			<h2>{this.props?.ReduxCount}</h2>
			<h2 className="text-center">Login</h2>
			<form>
			<div className="form-group">
				<label for="exampleInputEmail1">Email address</label>
				<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" autocomplete="username"/>
				<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
			</div>
			<div className="form-group">
				<label for="exampleInputPassword1">Password</label>
				<input type="password" className="form-control" id="exampleInputPassword1" autocomplete="current-password"/>
			</div>
			</form>
			<button className="btn" onClick={this.changeCountt}> btn </button>
		</div>
    )
}
}

const coba = () => (dispatch) => {
	setTimeout(()=>{
    return dispatch({type :  "ChangeCount" , value : "deni"})
	}, 2000)
}

const mapStateToProps = (state) => ({
	ReduxCount : state.count
})

const mapDispatchToProps = (dispatch) => ({
	changeCount : () => dispatch(coba())
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)

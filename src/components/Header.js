import React, { Component } from 'react';

const INITIAL_STATE = {
	'isMenuOpen': false,
}

class Header extends Component {

	constructor( props ) {
		super(props);
		this.state = {...INITIAL_STATE};
		this.onClickMenu = this.onClickMenu.bind(this);
	}

	onClickMenu = () => {
		this.setState({
			isMenuOpen: !this.state.isMenuOpen,
		})
	}

	render() {
		const { isMenuOpen } = this.state;
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
			  <a className="navbar-brand" href="#section1">React App</a>
			  <button onClick={this.onClickMenu} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			    <span className="navbar-toggler-icon"></span>
			  </button>

			  <div className={ isMenuOpen ? 'collapse show navbar-collapse': 'collapse navbar-collapse'} id="navbarSupportedContent">
			    <ul className="navbar-nav mr-auto">
			      <li className="nav-item">
			        <a className="nav-link" href="#section1">Section 1</a>
			      </li>
			      <li className="nav-item">
			        <a className="nav-link" href="#section2">Section 2</a>
			      </li>
			      <li>
			        <a className="nav-link" href="#section3">Section 3</a>
			      </li>
			     
			    </ul>
			  </div>
			</nav>
		);
	}
}

export default Header;

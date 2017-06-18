import React from 'react'
import ReactDOM from 'react-dom'
import Bootstrap from 'bootstrap.css'
import Index from 'app.scss'

import Main from 'Main'

export default class App extends React.Component {
	render() {
		return (
			<div class="container">
				<Main />
			</div>
		)
	}
}

const appDOM = document.getElementById('app')
//render() - a function from ReactDOM package
ReactDOM.render(
			<App />, appDOM
);
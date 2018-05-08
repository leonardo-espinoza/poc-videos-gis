import React from 'react';
import ListaComponent from '../containers/ListaComponent';
import AddWordButtonComponent from '../containers/AddWordButtonComponent';

export default class App extends React.Component {
	
	render() {
		return (
			<div>
				<div>Hello React</div>
				<AddWordButtonComponent />
				<ListaComponent />
			</div>
		);
	}
}

import React from 'react';
import BotoneraDashboardCamaras from './BotoneraDashboardCamaras';
import EspacioDashBoard from './EspacioDashBoard';
import BarraInferiorEstado from './BarraInferiorEstado';
import ListaComponent from '../containers/ListaComponent';
import AddWordButtonComponent from '../containers/AddWordButtonComponent';
require('../web/dashboardCamaras.css');

export default class App extends React.Component {
	
	render() {
		return (
			<div className="dashboardCamaras">
				<BotoneraDashboardCamaras />
				<EspacioDashBoard />
				<BarraInferiorEstado />
			</div>
		);
	}
}

/*
				<AddWordButtonComponent />
				<ListaComponent />
*/
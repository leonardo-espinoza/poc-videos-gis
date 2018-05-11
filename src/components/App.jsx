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
				<AddWordButtonComponent />
				<ListaComponent />
			</div>
		);
	}
}

/*
				<video id="mivideo" width="480" height="auto"> / * Original: 960x480 * /
					<source src="http://localhost/samplevideos/mp4Prueba2_120secs.mp4" type="video/mp4" />
					<p>Este video no está soportado por el browser.</p>
				</video>
				<br />
					<source src="https://s3-us-west-1.amazonaws.com/hikvisionvideo/video/20180507_20180507124035_20180507124312_124031.mp4" type="video/mp4; codecs=h.264,cvd,mpga" />
				<video id="mivideo" width="800" height="auto" autoPlay controls>
					<source src="https://s3-us-west-1.amazonaws.com/hikvisionvideo/video/20180504_20180504124803_20180504193207_124804.mp4" type="video/mp4; codecs=h.264,cvd,mpga" />
					<p>Este video no está soportado por el browser.</p>
				</video><br />
					<source src="https://s3-us-west-1.amazonaws.com/hikvisionvideo/video/20180504_20180504124803_20180504193207_124804.mp4" type="video/mp4; codecs=h.264,cvd,mpga" />
					<source src="http://techslides.com/demos/sample-videos/small.mp4" type="video/mp4" />
*/
import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import StreamVideoCamara from './StreamVideoCamara'

const videos = [
	{
		id: 1,
		source: "http://localhost/samplevideos/mp4Prueba2_60secs.mp4",
		contentType: "video/mp4"
	},
	{
		id: 2,
		source: "http://localhost/samplevideos/mp4Prueba2_120secs.mp4",
		contentType: "video/mp4"
	},
	{
		id: 3,
		source: "http://localhost/samplevideos/mp4Prueba2_10secs.mp4",
		contentType: "video/mp4"
	},
	{
		id: 4,
		source: "http://localhost/samplevideos/mp4Prueba2_20secs.mp4",
		contentType: "video/mp4"
	}
];


const mapStateToProps = (state) => {
	return {
    	parametros: state.myReducer
    }
}
const mapDistpatchToProps = (dispatch) => {
	let word = "Hola"
	return {
		//onClickButton: () => dispatch(performAction(word))
		onClickButton: () => dispatch(getChileanRegions())
	}
}

const PanelStreamCamaras = ({ parametros }) => (
	<div className="panelVideos">
		{videos.map((camara, indice) => <StreamVideoCamara key={indice} camara={camara} />)}
	</div>
);

PanelStreamCamaras.propTypes = {
	parametros: PropTypes.arrayOf(PropTypes.string)
};



export default connect(mapStateToProps, null)(PanelStreamCamaras);

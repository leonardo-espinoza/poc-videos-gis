import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import LoadGoogleMapsApi from 'load-google-maps-api'


const OPTIONS = {
  center: { lat: -33.459229, lng: -70.645348 },
  zoom: 16
}

const API_CONFIG = {
  key:'AIzaSyBMD6YmhGzUJiyhacnKvIW678xxG5a2Ze4',
  language: 'es'
}

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


class EspacioGIS extends React.Component {

	constructor(props) {
		super(props);
		//this.mapaRef = React.createRef();
	}

	componentDidMount() {
		LoadGoogleMapsApi( API_CONFIG ).then(googleMaps => {
			this.googleMapCamara = new googleMaps.Map(this.refs.mapaRef, OPTIONS);
		}).catch(err => {
			console.log('No se pudo cargar el mapa', err);
		});
	}

	render() {
		return (
		<div className="espacioGIS">
			<div ref="mapaRef" id="cameraMap" style={{
				width: '600px',
				height: '620px' 
			}} />
		</div>
		);
	}

}

EspacioGIS.propTypes = {
	parametros: PropTypes.arrayOf(PropTypes.string)
};



export default connect(mapStateToProps, null)(EspacioGIS);

//				backgroundImage: 'url("http://localhost/samplevideos/mapaWaypoint.png")',

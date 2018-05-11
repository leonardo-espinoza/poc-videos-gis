import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import InfoGrupos from './InfoGrupos'
import PanelStreamCamaras from './PanelStreamCamaras'

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

const EspacioStreaming = ({ parametros }) => (
	<div className="espacioStreaming">
		<InfoGrupos />
		<PanelStreamCamaras />
	</div>
);

EspacioStreaming.propTypes = {
	parametros: PropTypes.arrayOf(PropTypes.string)
};



export default connect(mapStateToProps, null)(EspacioStreaming);
